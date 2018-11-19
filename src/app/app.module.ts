import { NgModule} from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { FakeDbService } from 'app/fake-db/fake-db.service';
import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/store/store.module';
import { LayoutModule } from 'app/layout/layout.module';

import { AppService } from './front/app.service';

import { SharedModule } from './shared-front/shared/shared.module';
import { AdministrateurComponent } from './espace/administrateur/admin.component';
import { FuseDemoModule } from '../@fuse/components/demo/demo.module';
import { AcheteurComponent } from './espace/acheteur/acheteur.component';
import { BanqueComponent } from './espace/banque/banque.component';
import { AnimateurComponent } from './espace/animateur/anim.component';
import { ProjectDashboardService } from './main/apps/dashboards/project/project.service';
import { AnimHomeService } from './espace/animateur/anim-home.service';
import { FournisseurComponent } from './espace/fournisseur/fourniss.component';
import { FournissHomeService } from './espace/fournisseur/fourniss-home.service';
import { MultiUserComponent } from './espace/multiuser/muser.component';
import { MuserHomeService } from './espace/multiuser/muser-home.service';
import { CommonModule } from '@angular/common';
import { NgMarqueeModule } from 'ng-marquee';
import { AppFilterSidebarComponent } from './commons/filter-sidebar/filter-sidebar.component';
import { Ng5SliderModule } from 'ng5-slider';
import { Globals } from './globals/Globals.element';
import { MultiUserModule } from './espace/multiuser/muser.module';
import { CrudPopupComponent } from './shared-front/shared/crudPopups/crudPopup/crudPopup.component';

const appRoutes: Routes = [
    {
        path        : 'apps',
        loadChildren: './main/apps/apps.module#AppsModule'
    },
    {
        path        : 'pages',
        loadChildren: './main/pages/pages.module#PagesModule'
    },
    {
        path        : 'ui',
        loadChildren: './main/ui/ui.module#UIModule'
    },
    {
        path        : 'documentation',
        loadChildren: './main/documentation/documentation.module#DocumentationModule'
    },
    {
        path        : 'angular-material-elements',
        loadChildren: './main/angular-material-elements/angular-material-elements.module#AngularMaterialElementsModule'
    },
    {
        path      : 'domaines',
        loadChildren: './front/domaines/domaines.module#DomaineModule'
    },
    {   path        : 'produit', 
        loadChildren: './front/produit/produit.module#ProduitModule'
    },
    { 
        path        : 'Enchere', 
        loadChildren: './front/Encheres/Enchere.module#EnchereModule'
    },
    { 
        path        : 'services', 
        loadChildren: './front/services/services.module#ServiceModule'
    },
    {   path        : 'cart', 
        loadChildren: './front/cart/cart.module#CartModule'
    },
    {   path: 'ratings', 
        loadChildren: './front/rating/rating.module#RatingModule'
    },
    {   path        : 'offres', 
        loadChildren: './front/offres/offres.module#OffresModule'
    },
    {
        path      : '',
        loadChildren: './front/home/home.module#HomeModule'
    },
    {
        path      : 'popups',
        loadChildren: './front/popups/popups.module#PopupsModule'
    },
    {
        path: '',
        component: AdministrateurComponent, children: [
            {
                path: 'main',
                loadChildren: './espace/administrateur/main/main.module#MainModule'
            },
            {
                path: 'alertes',
                loadChildren: './espace/administrateur/alertes/alertes.module#AlertesModule'
            },
            {
                path: 'suivi',
                loadChildren: './espace/administrateur/suivi-historique/suivi-historique.module#SuiviHistoriqueModule'
            },
            {
                path: 'statistique',
                loadChildren: './espace/administrateur/statistique/statistique.module#StatistiqueModule'
            },
            {
                path: 'sauvegarde',
                loadChildren: './espace/administrateur/sauvegarde/sauvegarde.module#SauvegardeModule'
            }

        ]
    },
    {
        path: '',
        component: AcheteurComponent, children: [
            {
                path: 'shopping',
                loadChildren: './espace/acheteur/shopping/shopping.module#ShoppingModule'
            },
            {
                path: 'demande-devis',
                loadChildren: './espace/acheteur/demande-devis/demande-devis.module#DemandeDevisModule'
            },
            {
                path: 'suivi-commande',
                loadChildren: './espace/acheteur/suivi-commandes/suivi-commandes.module#SuiviCommandesModule'
            },
            {
                path: 'livraisons',
                loadChildren: './espace/acheteur/livraison/livraison.module#LivraisonModule'
            },
            {
                path: 'demande-financement',
                loadChildren: './espace/acheteur/demande-financement/demande-financement.module#DemandeFinancementModule'
            },
            {
                path: 'historique-commandes',
                loadChildren: './espace/acheteur/historique-commandes/historique-commandes.module#HistoriqueCommandesModule'
            }

        ]
    },
	{
        path: '',
        component: AnimateurComponent, children: [
            {
                path: 'main-anim',
                loadChildren: './espace/animateur/main/main-anim.module#MainAnimModule'
            },
            {
                path: 'anim-alertes',
                loadChildren: './espace/animateur/alertes/animateur-alertes.module#AlertesAnimateurModule'
            },
            {
                path: 'anim-suivi',
                loadChildren: './espace/animateur/suivi-historique/suivi-historique.module#SuiviHistoriqueModule'
            },
            {
                path: 'anim-statistique',
                loadChildren: './espace/animateur/statistique/anim-statistique.module#StatistiqueAnimModule'
            },
            {
                path: 'anim-gestion',
                loadChildren: './espace/animateur/gestion/gestion.module#GestionAnimModule'
            }

        ]
    },
	{
        path: '',
        component: FournisseurComponent, children: [
            {
                path: 'main-livraisons',
                loadChildren: './espace/fournisseur/four-livraisons/fournisseur-livraisons.module#LivraisonsFournisseurModule'
            }
            ,
            {
                path: 'main-commandes',
                loadChildren: './espace/fournisseur/four-commandes/fournisseur-commandes.module#CommandesFournisseurModule'
            },
            {
                path: 'main-magasin',
                loadChildren: './espace/fournisseur/four-magasins/fournisseur-magasins.module#MagasinsFournisseurModule'
            },
            {
                path: 'main-catalogue',
                loadChildren: './espace/fournisseur/four-catalogues/fournisseur-catalogues.module#CataloguesFournisseurModule'
            },
            {
                path: 'main-remboursement',
                loadChildren: './espace/fournisseur/four-remboursements/fournisseur-remboursements.module#RemboursementsFournisseurModule'
            },
            {
                path: 'main-statistique',
                loadChildren: './espace/fournisseur/four-statistiques/fournisseur-statistiques.module#StatistiquesFournisseurModule'
            },
            {
                path: 'main-boutique',
                loadChildren: './espace/fournisseur/four-boutiques/fournisseur-boutiques.module#BoutiquesFournisseurModule'
            },
            {
                path: 'main-statistique',
                loadChildren: './espace/fournisseur/four-statistiques/fournisseur-statistiques.module#StatistiquesFournisseurModule'
            },
            {
                path: 'main-boutique',
                loadChildren: './espace/fournisseur/four-boutiques/fournisseur-boutiques.module#BoutiquesFournisseurModule'
            },
            {
                path: 'main-offre',
                loadChildren: './espace/fournisseur/four-offres/fournisseur-offres.module#OffresFournisseurModule'
            },
            {
                path: 'main-enchere',
                loadChildren: './espace/fournisseur/four-encheres/fournisseur-encheres.module#EncheresFournisseurModule'
            },
            {
                path: 'main-simulation',
                loadChildren: './espace/fournisseur/four-simulations/fournisseur-simulations.module#SimulationsFournisseurModule'
            }
        ]
    },
	{
        path: '',
        component: MultiUserComponent, children: [
            {
                path: 'muser-main',
                loadChildren: './espace/multiuser/muser.module#MultiUserModule'
            },
            {
											
																							 
				
			
			  
                path: 'muser-shopping',
                loadChildren: './espace/acheteur/shopping/shopping.module#ShoppingModule'
            },
            {
                path: 'muser-main-anim',
                loadChildren: './espace/animateur/main/main-anim.module#MainAnimModule'
            },
            {
                path: 'muser-main-magasin',
                loadChildren: './espace/fournisseur/four-magasins/fournisseur-magasins.module#MagasinsFournisseurModule'
            },
            {
                path: 'muser-main-catalogue',
                loadChildren: './espace/fournisseur/four-catalogues/fournisseur-catalogues.module#CataloguesFournisseurModule'
            },
            {
                path: 'muser-banque',
                loadChildren: './espace/banque/accueil/accueil.module#AccueilModule'
            }

        ]
    },
    {
        path: '',
        component: BanqueComponent, children: [
            {
                path: 'banque',
                loadChildren: './espace/banque/accueil/accueil.module#AccueilModule'
            },
            {
                path: 'credit',
                loadChildren: './espace/banque/credit/credit.module#CreditModule'
            },
            {
                path: 'agreement',
                loadChildren: './espace/banque/agreement/agreement.module#AgreementModule'
            },
            {
                path: 'demande',
                loadChildren: './espace/banque/demande/demande.module#DemandeModule'
            },
            {
                path: 'depot',
                loadChildren: './espace/banque/depot/depot.module#DepotModule'
            },
            {
                path: 'commande',
                loadChildren: './espace/banque/commande/commande.module#CommandeModule'
            },
            {
                path: 'flux-commissionement',
                loadChildren: './espace/banque/flux-commission/flux-commission.module#FluxCommissionModule'
            },
            {
                path: 'devis',
                loadChildren: './espace/banque/devis/devis.module#DevisModule'
            },
            {
                path: 'produit-banq',
                loadChildren: './espace/banque/produit/produit.module#ProduitModule'
            },
            {
                path: 'banque-cl',
                loadChildren: './espace/banque/client/client.module#ClientModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'apps/dashboards/analytics'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        AdministrateurComponent,
        AcheteurComponent, 
        BanqueComponent,
        AcheteurComponent,
        AnimateurComponent,
        FournisseurComponent//,
        //MultiUserComponent
        //,AppFilterSidebarComponent

    ],
    imports     : [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule,
        SharedModule,
        FuseDemoModule,
        
        // New modules
        NgMarqueeModule,
        Ng5SliderModule,
			MultiUserModule			
        //MainMultiAnimModule,
        //MainMultiFournissModule
    ],
    bootstrap   : [
        AppComponent
    ], 
    providers: [AppService,AnimHomeService,ProjectDashboardService,FournissHomeService,MuserHomeService,Globals,CrudPopupComponent
    ]
})
export class AppModule
{
}
