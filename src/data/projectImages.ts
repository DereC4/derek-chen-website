import type { StaticImageData } from 'next/image';

import slorkWars1 from '@/assets/pics/projects/slorkwars-1.png';
import slorkWars2 from '@/assets/pics/projects/slorkwars-2.png';
import guests1 from '@/assets/pics/projects/guestsplugin.png'

export const projectImages: Record<string, StaticImageData> = {
    'slork-wars': slorkWars1,
    'slork-wars-2': slorkWars2,
    'guests': guests1
};
