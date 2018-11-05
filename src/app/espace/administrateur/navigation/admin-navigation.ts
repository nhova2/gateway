import { FuseNavigation } from '@fuse/types';

export const adminNavigation: FuseNavigation[] = [
    {
        id       : 'main',
        title    : 'Main',
        translate: 'NAV.APPLICATIONS',
        type     : 'collapsable',
        icon     : 'computer',
        url      : 'main'
    },
    {
        id      : 'alertes',
        title   : 'Alertes',
        type    : 'collapsable',
        icon    : 'warning',
        url     : 'alertes'
    },
    {
        id      : 'user-interface',
        title   : 'Suivi Historique',
        type    : 'collapsable',
        icon    : 'verified_user',
        url     : 'suivi'
    },
    {
        id      : 'angular-material-elements',
        title   : 'Statistique',
        type    : 'group',
        icon    : 'trending_up',
        url     : 'statistique'
    },
    {
        id      : 'documentation',
        title   : 'Sauvegarde',
        icon    : 'backup',
        type    : 'group',
        url     : 'sauvegarde'
    }

];
