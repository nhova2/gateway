import { FuseNavigation } from '@fuse/types';

export const frontNavigation: FuseNavigation[] = [
    {
        id: 'domaines',
        title: 'Domaine',
        type: 'collapsable',
        icon: 'domain',
        url: '/domaines',
        children: [
            {
                id: 'domaines-activite',
                title: 'domaines-activité',
                type: 'item',
                url: '/domaines/activites/listes'
            }
        ]
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
