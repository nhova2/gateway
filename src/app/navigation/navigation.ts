import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'domaines',
        title: 'Domaine',
        type: 'collapsable',
        icon: 'domain',
        url: 'domaines'
    },
    {
        id: 'produit',
        title: 'produit',
        type: 'collapsable',
        icon: 'card_giftcard',
        url: 'produit'
    },
    {
        id: 'Enchere',
        title: 'Enchere',
        type: 'group',
        icon: 'gavel',
        url: 'Enchere'
    },
    {
        id: 'services',
        title: 'Services',
        icon: 'bookmark_border',
        type: 'group',
        url: 'services'
    },
    {
        id: 'ratings',
        title: 'Ratings',
        icon: 'star',
        type: 'group',
        url: 'ratings'
    },
    {
        id: 'offres',
        title: 'Offres',
        icon: 'local_offer',
        type: 'group',
        url: 'offres'
    }

];
