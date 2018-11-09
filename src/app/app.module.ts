import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
        path        : 'domaines',
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
        path        : '',
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
                path: 'produit',
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
        BanqueComponent
    ],
    imports     : [
        BrowserModule,
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
        FuseDemoModule    
    ],
    bootstrap   : [
        AppComponent
    ], 
    providers: [AppService]
})
export class AppModule
{
}
