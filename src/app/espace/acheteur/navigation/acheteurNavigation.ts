import { FuseNavigation } from '@fuse/types';

export const acheteurNavigation: FuseNavigation[] = [
    {
        id       : 'Shopping',
        title    : 'Shopping',
        translate: 'NAV.APPLICATIONS',
        type     : 'collapsable',
        icon     : 'add_shopping_cart',
        url      : 'shopping'
    },
    {
        id      : 'demande_devis',
        title   : 'Demande devis',
        type    : 'collapsable',
        icon    : 'assignment',
        url     : 'demande-devis'
    },
    {
        id      : 'user-interface',
        title   : 'Suivi Commandes',
        type    : 'collapsable',
        icon    : 'queue_play_next',
        url     : 'suivi-commande'
    },
    {
        id      : 'demande-financement',
        title   : 'Demande Financement',
        icon    : 'send',
        type    : 'group',
        url     : 'demande-financement'
    },
    {
        id      : 'historique-commandes',
        title   : 'Historique Commande',
        icon    : 'history',
        type    : 'group',
        url     : 'historique-commandes'
    }

];
