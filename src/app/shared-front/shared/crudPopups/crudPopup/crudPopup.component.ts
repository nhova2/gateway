import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateCompteDialogComponent } from './create-compte-dialog/create-compte-dialog.component';
import { CreateAcheteurDialogComponent } from './create-acheteur-dialog/create-acheteur-dialog.component';
import { CreateOperationDialogComponent } from './create-operation-dialog/create-operation-dialog.component';
import { UpdateCompteDialogComponent } from './update-compte-dialog/update-compte-dialog.component';
import { UpdateAcheteurDialogComponent } from './update-acheteur-dialog/update-acheteur-dialog.component';
import { UpdateOperationDialogComponent } from './update-operation-dialog/update-operation-dialog.component';
import { CreateRoleDialogComponent } from './create-role-dialog/create-role-dialog.component';
import { UpdateRoleDialogComponent } from './update-role-dialog/update-role-dialog.component';
import { CreateRemboursementDialogComponent } from './create-remboursement-dialog/create-remboursement-dialog.component';
import { UpdateRemboursementDialogComponent } from './update-remboursement-dialog/update-remboursement-dialog.component';
import { CreateActiviteDialogComponent } from './create-activite-dialog/create-activite-dialog.component';
import { UpdateActiviteDialogComponent } from './update-activite-dialog/update-activite-dialog.component';
import { CreateDomaineDialogComponent } from './create-domaine-dialog/create-domaine-dialog.component';
import { UpdateDomaineDialogComponent } from './update-domaine-dialog/update-domaine-dialog.component';
import { CreateOffreDialogComponent } from './create-offre-dialog/create-offre-dialog.component';
import { UpdateOffreDialogComponent } from './update-offre-dialog/update-offre-dialog.component';
import { CreateEnchereDialogComponent } from './create-enchere-dialog/create-enchere-dialog.component';
import { UpdateEnchereDialogComponent } from './update-enchere-dialog/update-enchere-dialog.component';
import { CreateDevisDialogComponent } from './create-devis-dialog/create-devis-dialog.component';
import { UpdateDevisDialogComponent } from './update-devis-dialog/update-devis-dialog.component';
import { CreateProduitDialogComponent } from './create-produit-dialog/create-produit-dialog.component';
import { UpdateProduitDialogComponent } from './update-produit-dialog/update-produit-dialog.component';
import { CreateServiceDialogComponent } from './create-service-dialog/create-service-dialog.component';
import { UpdateServiceDialogComponent } from './update-service-dialog/update-service-dialog.component';
import { CreateMagasinDialogComponent } from './create-magasin-dialog/create-magasin-dialog.component';
import { UpdateMagasinDialogComponent } from './update-magasin-dialog/update-magasin-dialog.component';
import { CreateBoutiqueDialogComponent } from './create-boutique-dialog/create-boutique-dialog.component';
import { UpdateBoutiqueDialogComponent } from './update-boutique-dialog/update-boutique-dialog.component';
import { CreateLigneCreditDialogComponent } from './create-ligne-credit-dialog/create-ligne-credit-dialog.component';
import { UpdateLigneCreditDialogComponent } from './update-ligne-credit-dialog/update-ligne-credit-dialog.component';
import { CreateLigneDepotDialogComponent } from './create-ligne-depot-dialog/create-ligne-depot-dialog.component';
import { UpdateLigneDepotDialogComponent } from './update-ligne-depot-dialog/update-ligne-depot-dialog.component';
import { CreateDemandePretDepotDialogComponent } from './create-demande-pret-dialog/create-demande-pret-dialog.component';
import { UpdateDemandePretDepotDialogComponent } from './update-demande-pret-dialog/update-demande-pret-dialog.component';
import { CreateDemandeDepotDialogComponent } from './create-demande-depot/create-demande-depot.component';
import { UpdateDemandeDepotDialogComponent } from './update-demande-depot/update-demande-depot.component';
import { CreateDemandeFinancementDevisDialogComponent } from './create-demande-financement-devis-dialog/create-demande-financement-devis-dialog.component';
import { UpdateDemandeFinancementDevisDialogComponent } from './update-demande-financement-devis-dialog/update-demande-financement-devis-dialog.component';
import { CreateDemandeAgrementDialogComponent } from './create-demande-agreement/create-demande-agreement.component';
import { UpdateDemandeAgrementDialogComponent } from './update-demande-agreement/update-demande-agreement.component';


@Component({
  selector: 'app-crudpopup',
  templateUrl: './crudPopup.component.html',
  styleUrls: ['./crudPopup.component.scss']
})
export class CrudPopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  //--------------------------Methodes creates dialog------------------------------------

  openCreateCompte() {
    const dialogCreateCpt = this.dialog.open(CreateCompteDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCreateAcheteur() {
    const dialogCreateCpt = this.dialog.open(CreateAcheteurDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreateOperation() {
    const dialogCreateCpt = this.dialog.open(CreateOperationDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreateRole() {
    const dialogCreateCpt = this.dialog.open(CreateRoleDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreateRemboursement() {
    const dialogCreateCpt = this.dialog.open(CreateRemboursementDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreateActivite() {
    const dialogCreateCpt = this.dialog.open(CreateActiviteDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreateDomaine() {
    const dialogCreateCpt = this.dialog.open(CreateDomaineDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreateOffre() {
    const dialogCreateCpt = this.dialog.open(CreateOffreDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreateEnchere() {
    const dialogCreateCpt = this.dialog.open(CreateEnchereDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreateDevis() {
    const dialogCreateCpt = this.dialog.open(CreateDevisDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreateProduit() {
    const dialogCreateCpt = this.dialog.open(CreateProduitDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCreateService() {
    const dialogCreateCpt = this.dialog.open(CreateServiceDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCreateMagasin() {
    const dialogCreateCpt = this.dialog.open(CreateMagasinDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCreateBoutique() {
    const dialogCreateCpt = this.dialog.open(CreateBoutiqueDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreateLigneCredit() {
    const dialogCreateCpt = this.dialog.open(CreateLigneCreditDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreateLigneDepot() {
    const dialogCreateCpt = this.dialog.open(CreateLigneDepotDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreateDemandePret() {
    const dialogCreateCpt = this.dialog.open(CreateDemandePretDepotDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreateDemandeDepot() {
    const dialogCreateCpt = this.dialog.open(CreateDemandeDepotDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreateDemandeFinancementDevis() {
    const dialogCreateCpt = this.dialog.open(CreateDemandeFinancementDevisDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCreateDemandeAgreement() {
    const dialogCreateCpt = this.dialog.open(CreateDemandeAgrementDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  //--------------------------Methodes updates dialog------------------------------------

  openUpdateCompte() {
    const dialogCreateCpt = this.dialog.open(UpdateCompteDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateAcheteur() {
    const dialogCreateCpt = this.dialog.open(UpdateAcheteurDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateOperation() {
    const dialogCreateCpt = this.dialog.open(UpdateOperationDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateRole() {
    const dialogCreateCpt = this.dialog.open(UpdateRoleDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateRemboursement() {
    const dialogCreateCpt = this.dialog.open(UpdateRemboursementDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateActivite() {
    const dialogCreateCpt = this.dialog.open(UpdateActiviteDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateDomaine() {
    const dialogCreateCpt = this.dialog.open(UpdateDomaineDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateOffre() {
    const dialogCreateCpt = this.dialog.open(UpdateOffreDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateEnchere() {
    const dialogCreateCpt = this.dialog.open(UpdateEnchereDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateDevis() {
    const dialogCreateCpt = this.dialog.open(UpdateDevisDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateProduit() {
    const dialogCreateCpt = this.dialog.open(UpdateProduitDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateService() {
    const dialogCreateCpt = this.dialog.open(UpdateServiceDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateMagasin() {
    const dialogCreateCpt = this.dialog.open(UpdateMagasinDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateBoutique() {
    const dialogCreateCpt = this.dialog.open(UpdateBoutiqueDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateLigneCredit() {
    const dialogCreateCpt = this.dialog.open(UpdateLigneCreditDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateLigneDepot() {
    const dialogCreateCpt = this.dialog.open(UpdateLigneDepotDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateDemandePret() {
    const dialogCreateCpt = this.dialog.open(UpdateDemandePretDepotDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateDemandeDepot() {
    const dialogCreateCpt = this.dialog.open(UpdateDemandeDepotDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateDemandeFinancementDevis() {
    const dialogCreateCpt = this.dialog.open(UpdateDemandeFinancementDevisDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateDemandeAgreement () {
    const dialogCreateCpt = this.dialog.open(UpdateDemandeAgrementDialogComponent);

    dialogCreateCpt.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
