// Code logic by Miguel F. Serna https://www.mfserna.dev/
// https://www.utexas.network/api/webring
(function () {
    const scriptTag = document.currentScript || document.querySelector('script[data-webring]');
    if (!scriptTag) return;

    const configuredBaseUrl = 'http://www.utexas.network';
    const userId = scriptTag.getAttribute('data-user') || '';
    const embedColor = scriptTag.getAttribute('data-color') || 'black';
    const embedArrow = scriptTag.getAttribute('data-arrow') || 'arrow';
    const embedCustomColor = scriptTag.getAttribute('data-custom-color') || '';
    const embedAlign = scriptTag.getAttribute('data-align') || 'left';
    const embedBackground = scriptTag.getAttribute('data-background') || '';
    const embedBorder = scriptTag.getAttribute('data-border') || '';
    const embedNoBg = scriptTag.hasAttribute('data-no-background');

    function normalizeBaseUrl(url) {
        if (!url) return '';
        try {
            const parsed = new URL(url, window.location.href);
            const isLocalHost =
                parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1' || parsed.hostname === '::1';
            if (!isLocalHost && parsed.protocol !== 'https:') {
                parsed.protocol = 'https:';
            }
            return parsed.origin;
        } catch (error) {
            return '';
        }
    }

    function resolveBaseUrl() {
        return 'https://www.utexas.network';
    }

    function parseSizeAttr(attrName, fallback, min, max) {
        const raw = scriptTag.getAttribute(attrName);
        if (raw === null) return fallback;

        const value = Number.parseFloat(raw);
        if (!Number.isFinite(value)) return fallback;
        if (value < min) return min;
        if (value > max) return max;
        return value;
    }

    const iconSize = parseSizeAttr('data-icon-size', 56, 16, 256);
    const arrowSize = parseSizeAttr('data-arrow-size', 24, 10, 96);
    const gapSize = parseSizeAttr('data-gap', 12, 0, 80);
    const baseUrl = resolveBaseUrl();

    // Fetch connections for this user (or all members if no user specified)
    const apiUrl = userId ? baseUrl + '/api/webring?user=' + userId : baseUrl + '/api/webring';

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            // Create a wrapper for alignment
            const wrapper = document.createElement('div');
            wrapper.className = 'utexas-webring-wrapper';
            const alignStyles = {
                left: 'justify-content: flex-start;',
                center: 'justify-content: center;',
                right: 'justify-content: flex-end;',
            };
            wrapper.style.cssText = `
                display: flex;
                width: 100%;
                ${alignStyles[embedAlign] || alignStyles['left']}
            `;

            const container = document.createElement('div');
            container.id = 'utexas-webring';
            container.className = 'utexas-webring';

            // Build container styles based on whether background/border is set
            const hasBackground = embedBackground || embedBorder;

            let containerStyles = `
                display: inline-flex;
                align-items: center;
                gap: ${gapSize}px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                transition: all 0.3s ease;
            `;

            if (hasBackground) {
                containerStyles += `
                    padding: 12px;
                    border-radius: 12px;
                    background: ${embedBackground || 'transparent'};
                    border: ${embedBorder ? '2px solid ' + embedBorder : 'none'};
                `;
            }

            container.style.cssText = containerStyles;

            const arrowColor = getArrowColor(embedColor, embedCustomColor);

            // Left arrow - navigate to previous connection
            const leftArrow = document.createElement('button');
            leftArrow.innerHTML = getArrowIcon('left', embedArrow);
            leftArrow.style.cssText = `
                border: none;
                background: transparent;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.2s, opacity 0.2s;
                font-size: ${arrowSize}px;
                padding: 0;
                line-height: 1;
                color: ${arrowColor};
            `;
            leftArrow.onmouseover = () => {
                leftArrow.style.transform = 'scale(1.2)';
                leftArrow.style.opacity = '0.8';
            };
            leftArrow.onmouseout = () => {
                leftArrow.style.transform = 'scale(1)';
                leftArrow.style.opacity = '1';
            };

            // Center icon - links to the webring homepage
            const centerLink = document.createElement('a');
            centerLink.href = baseUrl;
            centerLink.target = '_blank';
            centerLink.rel = 'noopener noreferrer';
            centerLink.title = 'Visit utexas.network';
            centerLink.style.cssText = `
                display: flex;
                transition: transform 0.2s;
            `;
            centerLink.onmouseover = () => (centerLink.style.transform = 'scale(1.1)');
            centerLink.onmouseout = () => (centerLink.style.transform = 'scale(1)');

            if (embedColor === 'custom' && embedCustomColor) {
                const iconWrapper = document.createElement('div');
                iconWrapper.style.cssText = `
                    width: ${iconSize}px;
                    height: ${iconSize}px;
                    background-color: ${embedCustomColor};
                    mask: url(${baseUrl}/icon.svg) center/contain no-repeat;
                    -webkit-mask: url(${baseUrl}/icon.svg) center/contain no-repeat;
                `;
                centerLink.appendChild(iconWrapper);
            } else {
                const colorMap = {
                    black: '/icon.svg',
                    red: '/iconred.svg',
                    yellow: '/iconyellow.svg',
                    white: '/iconwhite.svg',
                };
                const iconSrc = baseUrl + (colorMap[embedColor] || colorMap['black']);

                const icon = document.createElement('img');
                icon.src = iconSrc;
                icon.alt = 'UT Austin Webring';
                icon.style.cssText = `
                    width: ${iconSize}px;
                    height: ${iconSize}px;
                    display: block;
                `;
                centerLink.appendChild(icon);
            }

            // Right arrow - navigate to next connection
            const rightArrow = document.createElement('button');
            rightArrow.innerHTML = getArrowIcon('right', embedArrow);
            rightArrow.style.cssText = `
                border: none;
                background: transparent;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.2s, opacity 0.2s;
                font-size: ${arrowSize}px;
                padding: 0;
                line-height: 1;
                color: ${arrowColor};
            `;
            rightArrow.onmouseover = () => {
                rightArrow.style.transform = 'scale(1.2)';
                rightArrow.style.opacity = '0.8';
            };
            rightArrow.onmouseout = () => {
                rightArrow.style.transform = 'scale(1)';
                rightArrow.style.opacity = '1';
            };

            // If there are members to navigate through
            if (data.members && data.members.length > 0) {
                let currentIndex = Math.floor(Math.random() * data.members.length);

                leftArrow.onclick = () => {
                    currentIndex = (currentIndex - 1 + data.members.length) % data.members.length;
                    navigateToMember(data.members[currentIndex]);
                };

                rightArrow.onclick = () => {
                    currentIndex = (currentIndex + 1) % data.members.length;
                    navigateToMember(data.members[currentIndex]);
                };

                function navigateToMember(member) {
                    window.open(member.website, '_blank');
                }
            } else {
                // No connections - hide arrows or make them link to webring
                leftArrow.style.opacity = '0.3';
                leftArrow.style.cursor = 'default';
                rightArrow.style.opacity = '0.3';
                rightArrow.style.cursor = 'default';
            }

            function getArrowIcon(direction, style) {
                const arrows = {
                    arrow: direction === 'left' ? '←' : '→',
                    chevron: direction === 'left' ? '‹' : '›',
                    angle: direction === 'left' ? '〈' : '〉',
                };
                return arrows[style] || arrows.arrow;
            }

            function getArrowColor(color, customColor) {
                if (color === 'custom' && customColor) {
                    return customColor;
                }
                const colorMap = {
                    black: '#000000',
                    red: '#bf5700',
                    yellow: '#ffb81c',
                    white: '#ffffff',
                };
                return colorMap[color] || '#000000';
            }

            container.appendChild(leftArrow);
            container.appendChild(centerLink);
            container.appendChild(rightArrow);

            wrapper.appendChild(container);
            scriptTag.parentNode.insertBefore(wrapper, scriptTag.nextSibling);
        })
        .catch(err => {
            console.error('Webring error:', err);
        });
})();
