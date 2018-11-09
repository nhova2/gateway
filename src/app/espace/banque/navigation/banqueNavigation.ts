import { FuseNavigation } from '@fuse/types';

export const banqueNavigation: FuseNavigation[] = [
    {
        id: 'banque',
        title: 'Accueil',
        translate: 'NAV.APPLICATIONS',
        type: 'collapsable',
        icon: 'home',
        url: 'banque'
    },
    {
        id       : 'credit',
        title    : 'Credit',
        type     : 'collapsable',
        icon     : 'credit_card',
        url      : 'credit'
    },
    {
        id      : 'banque-cl',
        title   : 'client',
        type    : 'collapsable',
        icon    : 'perm_identity',
        url     : 'banque-cl'
    },
    {
        id      : 'agreement',
        title   : 'Agreement',
        type    : 'collapsable',
        icon    : 'school',
        url     : 'agreement'
    },
    {
        id      : 'demande',
        title   : 'Demande',
        type    : 'group',
        icon    : 'how_to_vote',
        url     : 'demande'
    },
    {
        id      : 'depot',
        title   : 'Depot',
        icon    : 'how_to_vote',
        type    : 'group',
        url     : 'depot'
    },
    {
        id      : 'commande',
        title   : 'Commande',
        icon    : 'add_box',
        type    : 'group',
        url     : 'commande'
    }

];
