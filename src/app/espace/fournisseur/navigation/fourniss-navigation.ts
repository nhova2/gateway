import { FuseNavigation } from '@fuse/types';

export const fournissNavigation: FuseNavigation[] = [
    {
        id       : 'magasin-fourniss',
        title    : 'Magasin',
        translate: 'NAV.APPLICATIONS',
        type     : 'collapsable',
        icon     : 'shop',
        url      : 'main-magasin'
    },
    {
        id      : 'catalogue-fourniss',
        title   : 'Catalogue',
        type    : 'collapsable',
        icon    : 'widgets',
        url     : 'main-catalogue'
    },
    {
        id      : 'boutique-fourniss',
        title   : 'Boutique',
        type    : 'collapsable',
        icon    : 'add_shopping_cart',
        url     : 'main-boutique'
    },
    {
        id      : 'offres-fourniss',
        title   : 'Offres Public',
        type    : 'collapsable',
        icon    : 'gavel',
		children : [
                    {
                        id   : 'appel-offre',
                        title: 'Appels Offre',
                        type : 'item',
                        url  : 'main-offre'
                    },
                    {
                        id   : 'enchere',
                        title: 'Encheres',
                        type : 'item',
                        url  : 'main-enchere'
                    }
                ]
        //url     : 'fourniss-suivi'
    }
	,
    {
        id      : 'simulation-fourniss',
        title   : 'Simulation',
        icon    : 'bar_chart',
        type    : 'collapsable',
        url     : 'main-simulation'
    },
    {
        id      : 'remboursement-fourniss',
        title   : 'Remboursement',
        type    : 'collapsable',
        icon    : 'money',
        url     : 'main-remboursement'
    },
    {
        id      : 'suivi-fourniss',
        title   : 'Suivi',
        type    : 'collapsable',
        icon    : 'trending_up',
		children : [
			{
				id   : 'bon-commande',
				title: 'Commandes',
				type : 'item',
				url  : 'main-commandes'
			},
			{
				id   : 'bon-livraison',
				title: 'Livraisons',
				type : 'item',
				url  : 'main-livraisons'
			}
		]
        //url     : 'fourniss-statistique'
    },
    {
        id      : 'statistique-fourniss',
        title   : 'Statistique',
        type    : 'collapsable',
        icon    : 'bubble_chart',
        url     : 'main-statistique'
    }

];
