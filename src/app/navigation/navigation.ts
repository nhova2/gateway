import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'domaines',
        title: 'Domaine',
        type: 'item',
        icon: 'domain',
        url: 'domaines'
    },
    {
        id: 'produit',
        title: 'produit',
        type: 'item',
        icon: 'card_giftcard',
        url: 'produit'
    },
    {
        id: 'Enchere',
        title: 'Enchere',
        type: 'item',
        icon: 'gavel',
        url: 'Enchere'
    },
    {
        id: 'services',
        title: 'Services',
        icon: 'bookmark_border',
        type: 'item',
        url: 'services'
    },
    {
        id: 'ratings',
        title: 'Ratings',
        icon: 'star',
        type: 'item',
        url: 'ratings'
    },
    {
        id: 'offres',
        title: 'Offres',
        icon: 'local_offer',
        type: 'item',
        url: 'offres'
    }

];
