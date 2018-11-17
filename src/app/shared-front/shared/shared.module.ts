import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true
};

import { PipesModule } from '../../front/theme/pipes/pipes.module';
import { RatingComponent } from './rating/rating.component';
import { ControlsComponent } from './controls/controls.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { BrandsCarouselComponent } from './brands-carousel/brands-carousel.component';
import { ProductsCarouselComponent } from './products-carousel/products-carousel.component';
import { ProductDialogComponent } from './products-carousel/product-dialog/product-dialog.component';
import { BannersComponent } from './banners/banners.component';
import { CategoryListComponent } from './category-list/category-list.component';

import { CrudPopupComponent } from './crudPopups/crudPopup/crudPopup.component';
import { CreateCompteDialogComponent } from './crudPopups/crudPopup/create-compte-dialog/create-compte-dialog.component';
import { CreateAcheteurDialogComponent } from './crudPopups/crudPopup/create-acheteur-dialog/create-acheteur-dialog.component';
import { CreateOperationDialogComponent } from './crudPopups/crudPopup/create-operation-dialog/create-operation-dialog.component';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { UpdateCompteDialogComponent } from './crudPopups/crudPopup/update-compte-dialog/update-compte-dialog.component';
import { UpdateAcheteurDialogComponent } from './crudPopups/crudPopup/update-acheteur-dialog/update-acheteur-dialog.component';
import { UpdateOperationDialogComponent } from './crudPopups/crudPopup/update-operation-dialog/update-operation-dialog.component';
import { CreateRoleDialogComponent } from './crudPopups/crudPopup/create-role-dialog/create-role-dialog.component';
import { UpdateRoleDialogComponent } from './crudPopups/crudPopup/update-role-dialog/update-role-dialog.component';
import { CreateRemboursementDialogComponent } from './crudPopups/crudPopup/create-remboursement-dialog/create-remboursement-dialog.component';
import { UpdateRemboursementDialogComponent } from './crudPopups/crudPopup/update-remboursement-dialog/update-remboursement-dialog.component';
import { CreateActiviteDialogComponent } from './crudPopups/crudPopup/create-activite-dialog/create-activite-dialog.component';
import { UpdateActiviteDialogComponent } from './crudPopups/crudPopup/update-activite-dialog/update-activite-dialog.component';
import { CreateDomaineDialogComponent } from './crudPopups/crudPopup/create-domaine-dialog/create-domaine-dialog.component';
import { UpdateDomaineDialogComponent } from './crudPopups/crudPopup/update-domaine-dialog/update-domaine-dialog.component';
import { CreateOffreDialogComponent } from './crudPopups/crudPopup/create-offre-dialog/create-offre-dialog.component';
import { UpdateOffreDialogComponent } from './crudPopups/crudPopup/update-offre-dialog/update-offre-dialog.component';
import { CreateEnchereDialogComponent } from './crudPopups/crudPopup/create-enchere-dialog/create-enchere-dialog.component';
import { UpdateEnchereDialogComponent } from './crudPopups/crudPopup/update-enchere-dialog/update-enchere-dialog.component';
import { CreateDevisDialogComponent } from './crudPopups/crudPopup/create-devis-dialog/create-devis-dialog.component';
import { UpdateDevisDialogComponent } from './crudPopups/crudPopup/update-devis-dialog/update-devis-dialog.component';
import { CreateProduitDialogComponent } from './crudPopups/crudPopup/create-produit-dialog/create-produit-dialog.component';
import { UpdateProduitDialogComponent } from './crudPopups/crudPopup/update-produit-dialog/update-produit-dialog.component';
import { CreateServiceDialogComponent } from './crudPopups/crudPopup/create-service-dialog/create-service-dialog.component';
import { UpdateServiceDialogComponent } from './crudPopups/crudPopup/update-service-dialog/update-service-dialog.component';
import { CreateMagasinDialogComponent } from './crudPopups/crudPopup/create-magasin-dialog/create-magasin-dialog.component';
import { UpdateMagasinDialogComponent } from './crudPopups/crudPopup/update-magasin-dialog/update-magasin-dialog.component';
import { CreateBoutiqueDialogComponent } from './crudPopups/crudPopup/create-boutique-dialog/create-boutique-dialog.component';
import { UpdateBoutiqueDialogComponent } from './crudPopups/crudPopup/update-boutique-dialog/update-boutique-dialog.component';
import { CreateLigneCreditDialogComponent } from './crudPopups/crudPopup/create-ligne-credit-dialog/create-ligne-credit-dialog.component';
import { UpdateLigneCreditDialogComponent } from './crudPopups/crudPopup/update-ligne-credit-dialog/update-ligne-credit-dialog.component';
import { CreateLigneDepotDialogComponent } from './crudPopups/crudPopup/create-ligne-depot-dialog/create-ligne-depot-dialog.component';
import { UpdateLigneDepotDialogComponent } from './crudPopups/crudPopup/update-ligne-depot-dialog/update-ligne-depot-dialog.component';
import { CreateDemandePretDepotDialogComponent } from './crudPopups/crudPopup/create-demande-pret-dialog/create-demande-pret-dialog.component';
import { UpdateDemandePretDepotDialogComponent } from './crudPopups/crudPopup/update-demande-pret-dialog/update-demande-pret-dialog.component';
import { CreateDemandeDepotDialogComponent } from './crudPopups/crudPopup/create-demande-depot/create-demande-depot.component';
import { UpdateDemandeDepotDialogComponent } from './crudPopups/crudPopup/update-demande-depot/update-demande-depot.component';
import { CreateDemandeFinancementDevisDialogComponent } from './crudPopups/crudPopup/create-demande-financement-devis-dialog/create-demande-financement-devis-dialog.component';
import { UpdateDemandeFinancementDevisDialogComponent } from './crudPopups/crudPopup/update-demande-financement-devis-dialog/update-demande-financement-devis-dialog.component';
import { CreateDemandeAgrementDialogComponent } from './crudPopups/crudPopup/create-demande-agreement/create-demande-agreement.component';
import { UpdateDemandeAgrementDialogComponent } from './crudPopups/crudPopup/update-demande-agreement/update-demande-agreement.component';
import { AjoutPretDialogComponent } from './crudPopups/crudPopup/ajout-pret-popup/ajout-pret-dialog.component';
import { AjoutLigneCreditComponent } from './crudPopups/crudPopup/Ajout-ligne-credit/ajout-ligne-credit.component';
import { SuiviReglementCommandeComponent } from './crudPopups/crudPopup/Suivi-reglement-commande/Suivi-reglement-commande.component';
import { RechercherProduitComponent } from './crudPopups/crudPopup/Rechercher-produit/rechercher-produit-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    PerfectScrollbarModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports: [
    BreadcrumbComponent,
    RouterModule,
    SwiperModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    PerfectScrollbarModule,
    PipesModule,
    RatingComponent,
    ControlsComponent,
    MainCarouselComponent,
    BrandsCarouselComponent,
    ProductsCarouselComponent,
    ProductDialogComponent,
    BannersComponent,
    CategoryListComponent,
    CrudPopupComponent,
    CreateCompteDialogComponent, CreateOperationDialogComponent, UpdateCompteDialogComponent,
    UpdateOperationDialogComponent,
    CreateRoleDialogComponent,
    UpdateRoleDialogComponent,
    CreateRemboursementDialogComponent,
    UpdateRemboursementDialogComponent,
    CreateActiviteDialogComponent,
    UpdateActiviteDialogComponent,
    CreateDomaineDialogComponent,
    UpdateDomaineDialogComponent,
    CreateOffreDialogComponent,
    UpdateOffreDialogComponent,
    CreateEnchereDialogComponent,
    UpdateEnchereDialogComponent,
    CreateDevisDialogComponent,
    UpdateDevisDialogComponent,
    CreateProduitDialogComponent,
    UpdateProduitDialogComponent,
    CreateServiceDialogComponent,
    UpdateServiceDialogComponent,
    CreateMagasinDialogComponent,
    UpdateMagasinDialogComponent,
    CreateBoutiqueDialogComponent,
    UpdateBoutiqueDialogComponent,
    CreateLigneCreditDialogComponent,
    UpdateLigneCreditDialogComponent,
    CreateLigneDepotDialogComponent,
    UpdateLigneDepotDialogComponent,
    CreateDemandePretDepotDialogComponent,
    UpdateDemandePretDepotDialogComponent,
    CreateDemandeDepotDialogComponent,
    UpdateDemandeDepotDialogComponent,
    CreateDemandeFinancementDevisDialogComponent,
    UpdateDemandeFinancementDevisDialogComponent,
    CreateDemandeAgrementDialogComponent,
    UpdateDemandeAgrementDialogComponent,
    AjoutPretDialogComponent,
    AjoutLigneCreditComponent,
    SuiviReglementCommandeComponent,
    RechercherProduitComponent
  ],
  declarations: [
    BreadcrumbComponent,
    RatingComponent,
    ControlsComponent,
    MainCarouselComponent,
    BrandsCarouselComponent,
    ProductsCarouselComponent,
    ProductDialogComponent,
    BannersComponent,
    CategoryListComponent,
    CreateCompteDialogComponent,
    CrudPopupComponent,
    CreateCompteDialogComponent,
    CreateAcheteurDialogComponent,
    CreateOperationDialogComponent, UpdateCompteDialogComponent, UpdateAcheteurDialogComponent,
    UpdateOperationDialogComponent,
    CreateRoleDialogComponent,
    UpdateRoleDialogComponent,
    CreateRemboursementDialogComponent,
    UpdateRemboursementDialogComponent,
    CreateActiviteDialogComponent,
    UpdateActiviteDialogComponent,
    CreateDomaineDialogComponent,
    UpdateDomaineDialogComponent,
    CreateOffreDialogComponent,
    UpdateOffreDialogComponent,
    CreateEnchereDialogComponent,
    UpdateEnchereDialogComponent,
    CreateDevisDialogComponent,
    UpdateDevisDialogComponent,
    CreateProduitDialogComponent,
    UpdateProduitDialogComponent,
    CreateServiceDialogComponent,
    UpdateServiceDialogComponent,
    CreateMagasinDialogComponent,
    UpdateMagasinDialogComponent,
    CreateBoutiqueDialogComponent,
    UpdateBoutiqueDialogComponent,
    CreateLigneCreditDialogComponent,
    UpdateLigneCreditDialogComponent,
    CreateLigneDepotDialogComponent,
    UpdateLigneDepotDialogComponent,
    CreateDemandePretDepotDialogComponent,
    UpdateDemandePretDepotDialogComponent,
    CreateDemandeDepotDialogComponent,
    UpdateDemandeDepotDialogComponent,
    CreateDemandeFinancementDevisDialogComponent,
    UpdateDemandeFinancementDevisDialogComponent,
    CreateDemandeAgrementDialogComponent,
    UpdateDemandeAgrementDialogComponent,
    AjoutPretDialogComponent,
    AjoutLigneCreditComponent,
    SuiviReglementCommandeComponent,
    RechercherProduitComponent
  ],
  entryComponents: [
    ProductDialogComponent,
    CreateCompteDialogComponent,
    CreateAcheteurDialogComponent,
    CreateOperationDialogComponent,
    UpdateCompteDialogComponent,
    UpdateAcheteurDialogComponent,
    UpdateOperationDialogComponent,
    CreateRoleDialogComponent,
    UpdateRoleDialogComponent,
    CreateRemboursementDialogComponent,
    UpdateRemboursementDialogComponent,
    CreateActiviteDialogComponent,
    UpdateActiviteDialogComponent,
    CreateDomaineDialogComponent,
    UpdateDomaineDialogComponent,
    CreateOffreDialogComponent,
    UpdateOffreDialogComponent,
    CreateEnchereDialogComponent,
    UpdateEnchereDialogComponent,
    CreateDevisDialogComponent,
    UpdateDevisDialogComponent,
    CreateProduitDialogComponent,
    UpdateProduitDialogComponent,
    CreateServiceDialogComponent,
    UpdateServiceDialogComponent,
    CreateMagasinDialogComponent,
    UpdateMagasinDialogComponent,
    CreateBoutiqueDialogComponent,
    UpdateBoutiqueDialogComponent,
    CreateLigneCreditDialogComponent,
    UpdateLigneCreditDialogComponent,
    CreateLigneDepotDialogComponent,
    UpdateLigneDepotDialogComponent,
    CreateDemandePretDepotDialogComponent,
    UpdateDemandePretDepotDialogComponent,
    CreateDemandeDepotDialogComponent,
    UpdateDemandeDepotDialogComponent,
    CreateDemandeFinancementDevisDialogComponent,
    UpdateDemandeFinancementDevisDialogComponent,
    CreateDemandeAgrementDialogComponent,
    UpdateDemandeAgrementDialogComponent,
    AjoutPretDialogComponent,
    AjoutLigneCreditComponent,
    SuiviReglementCommandeComponent,
    RechercherProduitComponent
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ]
})
export class SharedModule { }
