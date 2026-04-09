const UTX_NETWORK_API = 'https://www.utexas.network/api/webring';
const UTX_WEBRING_SITES_API = 'https://raw.githubusercontent.com/umbresp/ut-webring/refs/heads/main/sites.json';

type UtxNetworkResponse = {
    members?: Array<{
        website?: string;
    }>;
};

type UmbrespSitesResponse = {
    webring?: Array<{
        link?: string;
        url?: string;
    }>;
};

function normalizeWebsiteUrl(rawUrl: string): string | null {
    const trimmed = rawUrl.trim();
    if (!trimmed) return null;

    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

    try {
        return new URL(withProtocol).href;
    } catch {
        return null;
    }
}

export class MergedWebringService {
    static readonly fallbackRandomLink = 'https://api.jolteon.me/webring/randomlink';

    private static cachedMergedLinks: string[] | null = null;
    private static inflightRequest: Promise<string[]> | null = null;

    static async getMergedLinks(): Promise<string[]> {
        if (this.cachedMergedLinks) {
            return this.cachedMergedLinks;
        }

        if (this.inflightRequest) {
            return this.inflightRequest;
        }

        this.inflightRequest = this.fetchAndMergeLinks().finally(() => {
            this.inflightRequest = null;
        });

        return this.inflightRequest;
    }

    static async getRandomLink(): Promise<string> {
        const mergedLinks = await this.getMergedLinks();

        if (mergedLinks.length === 0) {
            return this.fallbackRandomLink;
        }

        return mergedLinks[Math.floor(Math.random() * mergedLinks.length)];
    }

    private static async fetchAndMergeLinks(): Promise<string[]> {
        const [networkResult, sitesResult] = await Promise.allSettled([
            fetch(UTX_NETWORK_API).then(response => response.json() as Promise<UtxNetworkResponse>),
            fetch(UTX_WEBRING_SITES_API).then(response => response.json() as Promise<UmbrespSitesResponse>),
        ]);

        const pooledSites: string[] = [];

        if (networkResult.status === 'fulfilled' && Array.isArray(networkResult.value.members)) {
            networkResult.value.members.forEach(member => {
                if (typeof member.website === 'string') {
                    const normalized = normalizeWebsiteUrl(member.website);
                    if (normalized) pooledSites.push(normalized);
                }
            });
        }

        if (sitesResult.status === 'fulfilled' && Array.isArray(sitesResult.value.webring)) {
            sitesResult.value.webring.forEach(site => {
                const candidate =
                    typeof site.link === 'string' ? site.link : typeof site.url === 'string' ? site.url : '';
                const normalized = normalizeWebsiteUrl(candidate);
                if (normalized) pooledSites.push(normalized);
            });
        }

        this.cachedMergedLinks = [...new Set(pooledSites)];
        return this.cachedMergedLinks;
    }
}
