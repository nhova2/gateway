import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { FuseUtils } from '@fuse/utils';
import { BonCommande } from 'app/models/msmagasindomains/bon-commande/bon-commande.model';

@Injectable()
export class AnimHomeService implements Resolve<any>
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
	
	animAlertes: any;
    onAnimAlertesChanged: BehaviorSubject<any>;

    // Ajout element liés aux commandes
    onAnimSuivisChanged: BehaviorSubject<any>;
    onSelectedAnimSuivisChanged: BehaviorSubject<any>;
    onUserDataChanged: BehaviorSubject<any>;
    onSearchTextChanged: Subject<any>;
    onFilterChanged: Subject<any>;
    
	suivis_commandes: BonCommande[];
    user: any;
	
    selectedAnimSuivis: string[] = [];
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
        console.log("AnimHomeService constructor");
		this.timelineOnChanged = new BehaviorSubject({});
        this.homeMainOnChanged = new BehaviorSubject({});
        this.photosVideosOnChanged = new BehaviorSubject({});
		this.onCategoriesChanged = new BehaviorSubject({});
        this.onCoursesChanged = new BehaviorSubject({});
        this.onAnimAlertesChanged = new BehaviorSubject({});
        
        // Commandes
        this.onAnimSuivisChanged = new BehaviorSubject([]);
        this.onSelectedAnimSuivisChanged = new BehaviorSubject([]);
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
        console.log("AnimHomeService Service - resolve");
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getProjects(),
                this.getWidgets(),
				this.getWidgetsProjects(),
				this.getTimeline(),
                this.getAnimMain(),
                this.getPhotosVideos(),
				this.getCategories(),
                this.getCourses(),
                this.getAnimAlertes(),
                this.getAnimSuivis(),
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
        console.log("AnimHomeService getTimeLine");
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
    getAnimMain(): Promise<any[]>
    {
        console.log("AnimHomeService getAnimMain");
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
        console.log("AnimHomeService getPhotosVideos");
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
        console.log("AnimHomeService getProjects");
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
        console.log("AnimHomeService getWidgets");
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
        console.log("AnimHomeService getWidgetsProjects");
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
     * Get AnimAlertes base
     */
    getAnimAlertes(): Promise<any[]>
    {
         console.log("AnimHomeService : getAnimAlertes");
		return new Promise((resolve, reject) => {

            this._httpClient.get('api/knowledge-base')
                .subscribe((response: any) => {
                    this.animAlertes = response;
                    this.onAnimAlertesChanged.next(this.animAlertes);
                    resolve(this.animAlertes);
                }, reject);
        });
    }

    // Ajouts Users
    /**
     * Get AnimSuivis
     *
     * @returns {Promise<any>}
     */
    getAnimSuivis(): Promise<any>
    {
        console.log("AnimHomeService getAnimSuivis");
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
                                return this.user.frequentAnimSuivis.includes(_suivi.id);
                            });
                        }

                        if ( this.searchText && this.searchText !== '' )
                        {
                            this.suivis_commandes = FuseUtils.filterArrayByString(this.suivis_commandes, this.searchText);
                        }

                        this.suivis_commandes = this.suivis_commandes.map(commande => {
                            return new BonCommande(commande);
                        });

                        this.onAnimSuivisChanged.next(this.suivis_commandes);
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
        console.log("AnimHomeService getUserData");
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
    toggleSelectedAnimSuivi(id): void
    {
        // First, check if we already have that suivi as selected...
        console.log("AnimHomeService toggleSelectedAnimSuivi");
        if ( this.selectedAnimSuivis.length > 0 )
        {
            const index = this.selectedAnimSuivis.indexOf(id);

            if ( index !== -1 )
            {
                this.selectedAnimSuivis.splice(index, 1);

                // Trigger the next event
                this.onSelectedAnimSuivisChanged.next(this.selectedAnimSuivis);

                // Return
                return;
            }
        }

        // If we don't have it, push as selected
        this.selectedAnimSuivis.push(id);

        // Trigger the next event
        this.onSelectedAnimSuivisChanged.next(this.selectedAnimSuivis);
    }

    /**
     * Toggle select all
     */
    toggleSelectAll(): void
    {
        if ( this.selectedAnimSuivis.length > 0 )
        {
            this.deselectAnimSuivis();
        }
        else
        {
            this.selectAnimSuivis();
        }
    }

    /**
     * Select suivis
     *
     * @param filterParameter
     * @param filterValue
     */
    selectAnimSuivis(filterParameter?, filterValue?): void
    {
        console.log("AnimHomeService selectAnimSuivis");
        this.selectedAnimSuivis = [];

        // If there is no filter, select all suivis
        if ( filterParameter === undefined || filterValue === undefined )
        {
            this.selectedAnimSuivis = [];
            this.suivis_commandes.map(commande => {
                this.selectedAnimSuivis.push(commande.id);
            });
        }

        // Trigger the next event
        this.onSelectedAnimSuivisChanged.next(this.selectedAnimSuivis);
    }

    /**
     * Update suivi
     *
     * @param suivi
     * @returns {Promise<any>}
     */
    updateAnimSuivi(commande): Promise<any>
    {
        console.log("AnimHomeService updateAnimSuivi");
        return new Promise((resolve, reject) => {

            this._httpClient.post(this.selectedUrl2 + commande.id, {...commande})
                .subscribe(response => {
                    this.getAnimSuivis();
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
        console.log("AnimHomeService updateUserData");
        return new Promise((resolve, reject) => {
            this._httpClient.post(this.selectedUrl1 + this.user.id, {...userData})
                .subscribe(response => {
                    this.getUserData();
                    this.getAnimSuivis();
                    resolve(response);
                });
        });
    }

    /**
     * Deselect suivis
     */
    deselectAnimSuivis(): void
    {
        this.selectedAnimSuivis = [];

        // Trigger the next event
        this.onSelectedAnimSuivisChanged.next(this.selectedAnimSuivis);
    }

    /**
     * Delete suivi
     *
     * @param suivi
     */
    deleteAnimSuivi(suivi): void
    {
        const suiviIndex = this.suivis_commandes.indexOf(suivi);
        this.suivis_commandes.splice(suiviIndex, 1);
        this.onAnimSuivisChanged.next(this.suivis_commandes);
    }

    /**
     * Delete selected suivis
     */
    deleteSelectedAnimSuivis(): void
    {
        console.log("AnimHomeService deleteSelectedAnimSuivis");
        for ( const suiviId of this.selectedAnimSuivis )
        {
            const suivi = this.suivis_commandes.find(_suivi => {
                return _suivi.id === suiviId;
            });
            const suiviIndex = this.suivis_commandes.indexOf(suivi);
            this.suivis_commandes.splice(suiviIndex, 1);
        }
        this.onAnimSuivisChanged.next(this.suivis_commandes);
        this.deselectAnimSuivis();
    }
}