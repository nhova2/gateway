import { FuseNavigation } from '@fuse/types';

export const muserNavigation: FuseNavigation[] = [
    {
        id       : 'main-muser',
        title    : 'Home',
        translate: 'NAV.APPLICATIONS',
        type     : 'collapsable',
        icon     : 'computer',
        url      : 'main-muser'
    },
    {
        id      : 'muser-alertes',
        title   : 'Alertes',
        type    : 'collapsable',
        icon    : 'warning',
        url     : 'muser-alertes'
    },
    {
        id      : 'muser-suivi',
        title   : 'Suivi & Historique',
        type    : 'collapsable',
        icon    : 'verified_user',
        url     : 'muser-suivi'
    },
    {
        id      : 'muser-gestion',
        title   : 'Gestion',
        icon    : 'backup',
        type    : 'group',
        url     : 'muser-gestion'
    },
    {
        id      : 'muser-statistique',
        title   : 'Statistique & Notes',
        type    : 'group',
        icon    : 'trending_up',
        url     : 'muser-statistique'
    }

];
