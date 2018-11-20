import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnimAlertesArticleComponent } from './dialogs/article/article.component';
import { AnimHomeService } from '../../anim-home.service';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';


@Component({
  selector: 'app-alertes-anim',
  templateUrl: './alertes-anim.component.html',
  styleUrls: ['./alertes-anim.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlertesAnimComponent implements OnInit {

  animAlertes1: any[];
  animAlertes2: any[];
	crudComp: CrudPopupComponent;
  
  animAlertesdata_line1 = [
      {
        title: 'Fin de Stock',
        path:'assets/img/',
        articlesCount:'5',
        featuredArticles:[
                              {
                                  title: 'Nom Produit (Magasin)',
                pourcent: '85',
                icone:'layers',
                color:'orange'
                              },
                              {
                                  title: 'Nom Produit (Magasin)',
                pourcent: '85',
                icone:'layers',
                color:'green'
                              },
                              {
                                  title: 'Nom Produit (Magasin)',
                pourcent: '85',
                icone:'layers',
                color:'green'
                              }
                          ]
      },
      {
        title: 'Echecs Paiements',
        path:'assets/img/',
        articlesCount:'7',
        featuredArticles:[
                              {
                                  title: 'No Commande (Acheteur)',
                pourcent: '85',
                icone:'credit_card',
                color:'orange'
                              },
                              {
                                  title: 'No Commande (Acheteur)',
                pourcent: '85',
                icone:'credit_card',
                color:'green'
                              },
                              {
                                  title: 'No Commande (Fournisseur)',
                pourcent: '85',
                icone:'credit_card',
                color:'orange'
                              }
                          ]
      },
      {
        title: 'Retard de Livraison',
        path:'assets/img/',
        articlesCount:'15',
        featuredArticles:[
                              {
                                  title: 'No Livraison (Acheteur)',
                pourcent: '85',
                icone:'local_shipping',
                color:'red'
                              },
                              {
                                  title: 'No Livraison (Acheteur)',
                pourcent: '85',
                icone:'local_shipping',
                color:'orange'
                              },
                              {
                                  title: 'No Livraison (Acheteur)',
                pourcent: '85',
                icone:'local_shipping',
                color:'green'
                              }
                          ]
      },
      {
        title: 'Demande Pret',
        path:'assets/img/',
        articlesCount:'15',
        featuredArticles:[
                              {
                                  title: 'Prenom Nom (Acheteur)',
                pourcent: '85',
                icone:'monetization_on',
                color:'orange'
                              },
                              {
                                  title: 'Prenom Nom (Acheteur)',
                pourcent: '85',
                icone:'monetization_on',
                color:'green'
                              },
                              {
                                  title: 'Prenom Nom (Fournisseur)',
                pourcent: '85',
                icone:'monetization_on',
                color:'green'
                              }
                          ]
      }
  ]

  animAlertesdata_line2 = [
    {
      title: 'Plafond Ligne de Crédits',
      path:'assets/img/',
      articlesCount:'5',
      featuredArticles:[
                            {
                                title: 'No Ligne Crédit 1',
              pourcent: '85',
              icone:'account_balance',
              color:'green'
                            },
                            {
                                title: 'No Ligne Crédit 2',
              pourcent: '85',
              icone:'account_balance',
              color:'green'
                            },
                            {
                                title: 'No Ligne Crédit 3',
              pourcent: '85',
              icone:'account_balance',
              color:'red'
                            }
                        ]
    },
    {
      title: 'Plafond Ligne de Dépots',
      path:'assets/img/',
      articlesCount:'7',
      featuredArticles:[
                            {
                                title: 'No Ligne Dépot 1',
              pourcent: '85',
              icone:'receipt',
              color:'orange'
                            },
                            {
                                title: 'No Ligne Dépot 2',
              pourcent: '85',
              icone:'receipt',
              color:'green'
                            },
                            {
                                title: 'No Ligne Dépot 3',
              pourcent: '85',
              icone:'receipt',
              color:'green'
                            }
                        ]
    },
    {
      title: 'Retard Remboursement Pret',
      path:'assets/img/',
      articlesCount:'15',
      featuredArticles:[
                            {
                                title: 'Prenom Nom 1',
              pourcent: '85',
              icone:'assessment',
              color:'red'
                            },
                            {
                                title: 'Prenom Nom 2',
              pourcent: '85',
              icone:'assessment',
              color:'green'
                            },
                            {
                                title: 'Prenom Nom 3',
              pourcent: '85',
              icone:'assessment',
              color:'green'
                            }
                        ]
    },
    {
      title: 'Validation Produit',
      path:'assets/img/',
      articlesCount:'15',
      featuredArticles:[
                            {
                                title: 'Nom Produit (Boutique)',
              pourcent: '85',
              icone:'card_giftcard',
              color:'green'
                            },
                            {
                                title: 'Nom Produit (Boutique)',
              pourcent: '85',
              icone:'card_giftcard',
              color:'orange'
                            },
                            {
                                title: 'Nom Produit (Boutique)',
              pourcent: '85',
              icone:'card_giftcard',
              color:'red'
                            }
                        ]
    }
]
  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {AnimHomeService} _animHomeService
   * @param {MatDialog} _matDialog
   */
  constructor(
      private _animHomeService: AnimHomeService,
      private _matDialog: MatDialog,private parCrud: CrudPopupComponent
  )
  {
      // Set the private defaults
      this._unsubscribeAll = new Subject();
	  this.crudComp=this.parCrud;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      console.log("AnimAlertesComponent :ngOnInit");
  /*this._animHomeService.onAnimAlertesChanged
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe(response => {
              this.animAlertes = response;
          });
      */
     /*this._animHomeService.onAnimAlertesChanged
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe(response => {
              this.animAlertes = response;
          });
          console.log("AnimAlertesComponent :ngOnInit end");*/
          this.animAlertes1 =this.animAlertesdata_line1;
          this.animAlertes2 =this.animAlertesdata_line2;
        }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Read article
   *
   * @param article
   */
  readArticle(article): void
  {
      this._matDialog.open(AnimAlertesArticleComponent, {
          panelClass: 'knowledgebase-article-dialog',
          data      : {article: article}
      });
  }
}
