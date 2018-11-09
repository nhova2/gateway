import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { BonCommande } from 'app/models/msmagasindomains/bon-commande/bon-commande.model';
import { FuseUtils } from '@fuse/utils';

@Injectable()
export class FournissHomeService implements Resolve<any>
{
    projects: any[];
    widgets: any[];
	widgets_prj: any[];
    timeline: any;
    home: any;
    photosVideos: any;

    timelineOnChanged: BehaviorSubject<any>;
    homeMainOnChanged: BehaviorSubject<any>;
    photosVideosOnChanged: BehaviorSubject<any>;
	
	onCategoriesChanged: BehaviorSubject<any>;
    onCoursesChanged: BehaviorSubject<any>;
	
	fournissAlertes: any;
    onFournissAlertesChanged: BehaviorSubject<any>;

    // Ajout element liés aux commandes
    onFournissSuivisChanged: BehaviorSubject<any>;
    onSelectedFournissSuivisChanged: BehaviorSubject<any>;
    onUserDataChanged: BehaviorSubject<any>;
    onSearchTextChanged: Subject<any>;
    onFilterChanged: Subject<any>;
    
	suivis_commandes: BonCommande[];
    user: any;
	
    selectedFournissSuivis: string[] = [];
    searchText: string;
    filterBy: string;
	
	selectedUrl1:string;
	selectedUrl2:string;
	selectedUrl3:string;
	
	commande_url_user = 'api/commandes-command/';
	commande_url_elements = 'api/commandes-commandes/';
    commande_url_uniq_select = 'api/commandes-command/5725a6802d10e277a0f35724';
	
	/*commande_url_user = 'api/contacts-user/';
	commande_url_elements = 'api/contacts-contacts/';
    commande_url_uniq_select = 'api/contacts-user/5725a6802d10e277a0f35724';*/
    
    varTest:string;
    
    // Traitement produits
    products: any[];
    onProductsChanged: BehaviorSubject<any>;

    // Ajout element liés aux commandes END

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        console.log("FournissHomeService constructor");
		this.timelineOnChanged = new BehaviorSubject({});
        this.homeMainOnChanged = new BehaviorSubject({});
        this.photosVideosOnChanged = new BehaviorSubject({});
		this.onCategoriesChanged = new BehaviorSubject({});
        this.onCoursesChanged = new BehaviorSubject({});
        this.onFournissAlertesChanged = new BehaviorSubject({});
        
        // Commandes
        this.onFournissSuivisChanged = new BehaviorSubject([]);
        this.onSelectedFournissSuivisChanged = new BehaviorSubject([]);
        this.onUserDataChanged = new BehaviorSubject([]);
        this.onSearchTextChanged = new Subject();
        this.onFilterChanged = new Subject();
        this.varTest="commande";
        
        // Traitement produits
        this.onProductsChanged = new BehaviorSubject({});

		if(this.varTest=="commande")
		{
			this.selectedUrl1=this.commande_url_user;
			this.selectedUrl2=this.commande_url_elements;
			this.selectedUrl3=this.commande_url_uniq_select;
		}
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        console.log("FournissHomeService Service - resolve");
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getProjects(),
                this.getWidgets(),
				this.getWidgetsProjects(),
				this.getTimeline(),
                this.getFournissMain(),
                this.getPhotosVideos(),
				this.getCategories(),
                this.getCourses(),
                this.getFournissAlertes(),
                this.getFournissSuivis(),
                this.getUserData(),
                this.getProducts()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get products
     *
     * @returns {Promise<any>}
     */
    getProducts(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/e-commerce-products')
                .subscribe((response: any) => {
                    this.products = response;
                    this.onProductsChanged.next(this.products);
                    resolve(response);
                }, reject);
        });
    }
    
     /**
     * Get timeline
     */
    getTimeline(): Promise<any[]>
    {
        console.log("FournissHomeService getTimeLine");
		return new Promise((resolve, reject) => {

            this._httpClient.get('api/profile-timeline')
                .subscribe((timeline: any) => {
                    this.timeline = timeline;
                    this.timelineOnChanged.next(this.timeline);
                    resolve(this.timeline);
                }, reject);
        });
    }

     /**
     * Get Home
     */
    getFournissMain(): Promise<any[]>
    {
        console.log("FournissHomeService getFournissMain");
		return new Promise((resolve, reject) => {

            this._httpClient.get('api/profile-about')
                .subscribe((home: any) => {
                    this.home = home;
                    this.homeMainOnChanged.next(this.home);
                    resolve(this.home);
                }, reject);
        });
    }

    /**
     * Get photos & videos
     */
    getPhotosVideos(): Promise<any[]>
    {
        console.log("FournissHomeService getPhotosVideos");
		return new Promise((resolve, reject) => {

            this._httpClient.get('api/profile-photos-videos')
                .subscribe((photosVideos: any) => {
                    this.photosVideos = photosVideos;
                    this.photosVideosOnChanged.next(this.photosVideos);
                    resolve(this.photosVideos);
                }, reject);
        });
    }
    /**
     * Get projects
     *
     * @returns {Promise<any>}
     */
    getProjects(): Promise<any>
    {
        console.log("FournissHomeService getProjects");
		return new Promise((resolve, reject) => {
            this._httpClient.get('api/project-dashboard-projects')
                .subscribe((response: any) => {
                    this.projects = response;
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Get widgets
     *
     * @returns {Promise<any>}
     */
    getWidgets(): Promise<any>
    {
        console.log("FournissHomeService getWidgets");
		return new Promise((resolve, reject) => {
            this._httpClient.get('api/analytics-dashboard-widgets')
                .subscribe((response: any) => {
                    this.widgets = response;
                    resolve(response);
                }, reject);
        });
    }
	
	/**
     * Get widgets
     *
     * @returns {Promise<any>}
     */
    getWidgetsProjects(): Promise<any>
    {
        console.log("FournissHomeService getWidgetsProjects");
		return new Promise((resolve, reject) => {
            this._httpClient.get('api/project-dashboard-widgets')
                .subscribe((response: any) => {
                    this.widgets_prj = response;
                    resolve(response);
                }, reject);
        });
    }
	
	/**
     * Get categories
     *
     * @returns {Promise<any>}
     */
    getCategories(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/academy-categories')
                .subscribe((response: any) => {
                    this.onCategoriesChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Get courses
     *
     * @returns {Promise<any>}
     */
    getCourses(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/academy-courses')
                .subscribe((response: any) => {
                    this.onCoursesChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
	/**
     * Get FournissAlertes base
     */
    getFournissAlertes(): Promise<any[]>
    {
         console.log("FournissHomeService : getFournissAlertes");
		return new Promise((resolve, reject) => {

            this._httpClient.get('api/knowledge-base')
                .subscribe((response: any) => {
                    this.fournissAlertes = response;
                    this.onFournissAlertesChanged.next(this.fournissAlertes);
                    resolve(this.fournissAlertes);
                }, reject);
        });
    }

    // Ajouts Users
    /**
     * Get FournissSuivis
     *
     * @returns {Promise<any>}
     */
    getFournissSuivis(): Promise<any>
    {
        console.log("FournissHomeService getFournissSuivis");
        return new Promise((resolve, reject) => {
                this._httpClient.get('api/contacts-contacts')
                    .subscribe((response: any) => {

                        this.suivis_commandes = response;

                        if ( this.filterBy === 'starred' )
                        {
                            this.suivis_commandes = this.suivis_commandes.filter(_suivi => {
                                return this.user.starred.includes(_suivi.id);
                            });
                        }

                        if ( this.filterBy === 'frequent' )
                        {
                            this.suivis_commandes = this.suivis_commandes.filter(_suivi => {
                                return this.user.frequentFournissSuivis.includes(_suivi.id);
                            });
                        }

                        if ( this.searchText && this.searchText !== '' )
                        {
                            this.suivis_commandes = FuseUtils.filterArrayByString(this.suivis_commandes, this.searchText);
                        }

                        this.suivis_commandes = this.suivis_commandes.map(commande => {
                            return new BonCommande(commande);
                        });

                        this.onFournissSuivisChanged.next(this.suivis_commandes);
                        resolve(this.suivis_commandes);
                    }, reject);
            }
        );
    }

    /**
     * Get user data
     *
     * @returns {Promise<any>}
     */
    getUserData(): Promise<any>
    {
        console.log("FournissHomeService getUserData");
        return new Promise((resolve, reject) => {
                this._httpClient.get(this.selectedUrl3)
                    .subscribe((response: any) => {
                        this.user = response;
                        this.onUserDataChanged.next(this.user);
                        resolve(this.user);
                    }, reject);
            }
        );
    }

    /**
     * Toggle selected suivi by id
     *
     * @param id
     */
    toggleSelectedFournissSuivi(id): void
    {
        // First, check if we already have that suivi as selected...
        console.log("FournissHomeService toggleSelectedFournissSuivi");
        if ( this.selectedFournissSuivis.length > 0 )
        {
            const index = this.selectedFournissSuivis.indexOf(id);

            if ( index !== -1 )
            {
                this.selectedFournissSuivis.splice(index, 1);

                // Trigger the next event
                this.onSelectedFournissSuivisChanged.next(this.selectedFournissSuivis);

                // Return
                return;
            }
        }

        // If we don't have it, push as selected
        this.selectedFournissSuivis.push(id);

        // Trigger the next event
        this.onSelectedFournissSuivisChanged.next(this.selectedFournissSuivis);
    }

    /**
     * Toggle select all
     */
    toggleSelectAll(): void
    {
        if ( this.selectedFournissSuivis.length > 0 )
        {
            this.deselectFournissSuivis();
        }
        else
        {
            this.selectFournissSuivis();
        }
    }

    /**
     * Select suivis
     *
     * @param filterParameter
     * @param filterValue
     */
    selectFournissSuivis(filterParameter?, filterValue?): void
    {
        console.log("FournissHomeService selectFournissSuivis");
        this.selectedFournissSuivis = [];

        // If there is no filter, select all suivis
        if ( filterParameter === undefined || filterValue === undefined )
        {
            this.selectedFournissSuivis = [];
            this.suivis_commandes.map(commande => {
                this.selectedFournissSuivis.push(commande.id);
            });
        }

        // Trigger the next event
        this.onSelectedFournissSuivisChanged.next(this.selectedFournissSuivis);
    }

    /**
     * Update suivi
     *
     * @param suivi
     * @returns {Promise<any>}
     */
    updateFournissSuivi(commande): Promise<any>
    {
        console.log("FournissHomeService updateFournissSuivi");
        return new Promise((resolve, reject) => {

            this._httpClient.post(this.selectedUrl2 + commande.id, {...commande})
                .subscribe(response => {
                    this.getFournissSuivis();
                    resolve(response);
                });
        });
    }

    /**
     * Update user data
     *
     * @param userData
     * @returns {Promise<any>}
     */
    updateUserData(userData): Promise<any>
    {
        console.log("FournissHomeService updateUserData");
        return new Promise((resolve, reject) => {
            this._httpClient.post(this.selectedUrl1 + this.user.id, {...userData})
                .subscribe(response => {
                    this.getUserData();
                    this.getFournissSuivis();
                    resolve(response);
                });
        });
    }

    /**
     * Deselect suivis
     */
    deselectFournissSuivis(): void
    {
        this.selectedFournissSuivis = [];

        // Trigger the next event
        this.onSelectedFournissSuivisChanged.next(this.selectedFournissSuivis);
    }

    /**
     * Delete suivi
     *
     * @param suivi
     */
    deleteFournissSuivi(suivi): void
    {
        const suiviIndex = this.suivis_commandes.indexOf(suivi);
        this.suivis_commandes.splice(suiviIndex, 1);
        this.onFournissSuivisChanged.next(this.suivis_commandes);
    }

    /**
     * Delete selected suivis
     */
    deleteSelectedFournissSuivis(): void
    {
        console.log("FournissHomeService deleteSelectedFournissSuivis");
        for ( const suiviId of this.selectedFournissSuivis )
        {
            const suivi = this.suivis_commandes.find(_suivi => {
                return _suivi.id === suiviId;
            });
            const suiviIndex = this.suivis_commandes.indexOf(suivi);
            this.suivis_commandes.splice(suiviIndex, 1);
        }
        this.onFournissSuivisChanged.next(this.suivis_commandes);
        this.deselectFournissSuivis();
    }
}