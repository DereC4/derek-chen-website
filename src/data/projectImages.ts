import type { StaticImageData } from 'next/image';

import slorkWars1 from '@/assets/pics/projects/slorkwars-1.png';
import slorkWars2 from '@/assets/pics/projects/slorkwars-2.png';
import guests1 from '@/assets/pics/projects/guestsplugin.png';
import utgradedist from '@/assets/pics/projects/ut-grade-distribution-viewer.png';
import utregplus from '@/assets/pics/projects/ut-registration-plus-1.png';
import pearDesktop1 from '@/assets/pics/projects/youtube-music-1.png';
import pearDesktop2 from '@/assets/pics/projects/youtube-music-2.png';
import pearDesktop3 from '@/assets/pics/projects/youtube-music-3.png';
import pearDesktop4 from '@/assets/pics/projects/youtube-music-4.png';
import pearDesktop5 from '@/assets/pics/projects/youtube-music-5.png';
import accountech from '@/assets/pics/projects/accountech.png';
import trove from '@/assets/pics/projects/trove.png';
import elytraVaults from '@/assets/pics/projects/elytravaults.png';
import macebackport from '@/assets/pics/projects/macebackport.png';
import earthMobs from '@/assets/pics/projects/minecraftearthmod.png';
import venatorEscape from '@/assets/pics/projects/venator-escape.png';

export const projectImages: Record<string, StaticImageData> = {
    'slork-wars': slorkWars1,
    'slork-wars-2': slorkWars2,
    guests: guests1,
    'pear-desktop': pearDesktop1,
    'pear-desktop-2': pearDesktop2,
    'pear-desktop-3': pearDesktop3,
    'pear-desktop-4': pearDesktop4,
    'pear-desktop-5': pearDesktop5,
    // 3.17.2026 ai did something clever here and found out i accidentally swapped the two, that is crazy, 2023 chatgpt would've never
    'ut-registration-plus': utregplus,
    'ut-distribution-viewer': utgradedist,
    accountech: accountech,
    trove: trove,
    'elytra-vaults': elytraVaults,
    'mace-backport': macebackport,
    'earth-mobs': earthMobs,
    'last-stand-star-wars-fangame': venatorEscape,
};
