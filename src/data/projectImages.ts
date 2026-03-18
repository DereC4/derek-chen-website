import type { StaticImageData } from 'next/image';

import slorkWars1 from '@/assets/pics/projects/slorkwars-1.png';
import slorkWars2 from '@/assets/pics/projects/slorkwars-2.png';
import guests1 from '@/assets/pics/projects/guestsplugin.png'
import utgradedist from '@/assets/pics/projects/ut-grade-distribution-viewer.png'
import utregplus from '@/assets/pics/projects/ut-registration-plus-1.png'

export const projectImages: Record<string, StaticImageData> = {
    'slork-wars': slorkWars1,
    'slork-wars-2': slorkWars2,
    'guests': guests1,
    // 3.17.2026 ai did something clever here and found out i accidentally swapped the two, that is crazy, 2023 chatgpt would've never 
    'ut-registration-plus': utregplus,
    'ut-grade-distribution-viewer': utgradedist,
};
