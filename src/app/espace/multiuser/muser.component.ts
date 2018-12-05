import { Component, ViewEncapsulation, ViewChild, OnInit, OnDestroy} from '@angular/core';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { acheteurNavigation } from '../acheteur/navigation/acheteurNavigation';
import { banqueNavigation } from '../banque/navigation/banqueNavigation';
import { fournissNavigation } from '../fournisseur/navigation/fourniss-navigation';
import { animNavigation } from '../animateur/navigation/anim-navigation';
import { adminNavigation } from '../administrateur/navigation/admin-navigation';
import { Globals } from 'app/globals/Globals.element';
import { Router } from '@angular/router';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';
import { fuseAnimations } from '@fuse/animations';
import { Subject } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ProjectDashboardService } from 'app/main/apps/dashboards/project/project.service';
import { MuserHomeService } from './muser-home.service';
import { takeUntil } from 'rxjs/operators';

export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
  }
  
  const COLORS: string[] = ['red', 'orange', 'green'];
  const NAMES: string[] = ['Binta', 'Aziz', 'Kine', 'Mohamed', 'Khady', 'Thierno',
    'Fatou', 'Amadou', 'Malick', 'Babacar', 'Massamba', 'Pape',
    'Coura', 'Alassane', 'Massamba', 'Alioune', 'Sady', 'Kader', 'Momar'];
    
const ACTEURTYPES: string[] = ['Client', 'Fournisseur', 'Animateur'];

@Component({
    selector: 'app-muser',
    templateUrl: './muser.component.html',
    styleUrls: ['./muser.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class MultiUserComponent  implements OnInit, OnDestroy 
{  
    navigation: any;
    event:string;
	role:string;
    crudComp: CrudPopupComponent;
    home: any;
    widgets: any;
    private _unsubscribeAll: Subject<any>;
    
	roles = [
        { Name: 'Acheteur', value: '1',routing:'/shopping'},
        { Name: 'Banque', value: '2',routing:'/banque'},
        { Name: 'Fournisseur', value: '3',routing:'/main-magasin'},
        { Name: 'Animateur', value: '4',routing:'/main-anim'},
        { Name: 'Administrateur', value: '5',routing:'/main'}
        ];
    
    displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    
    length = 100;
    pageSize = 10;
    constructor(private _fuseNavigationService: FuseNavigationService,private globals: Globals,private router: Router,private parCrud: CrudPopupComponent,private _proj: ProjectDashboardService, private _muserService: MuserHomeService){
		this.navigation = fournissNavigation;
		this.role=this.globals.role;
		 this.crudComp=this.parCrud;
		console.log("MultiUserComponent role :"+this.role);
        // Register the navigation to the service
        this._fuseNavigationService.register('muser', this.navigation);

        // Set the main navigation as our current navigation
        this._fuseNavigationService.setCurrentNavigation('muser');

        this.widgets=_proj.getWidgets();
        this._unsubscribeAll = new Subject();
        // Create 100 users
		const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
		
		// Assign the data to the data source for the table to render
		this.dataSource = new MatTableDataSource(users);
    }

	 /**
     * On init
     */
    ngOnInit(): void
    {
        console.log ("MultiUserComponent ngOnInit")
       this.widgets = this._muserService.widgets;
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		
		
		this._muserService.homeMainOnChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(home => {
                this.home = home;
            });
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

    applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
		  this.dataSource.paginator.firstPage();
		}
      }
      
    changeNavigation(value):void
    {
        console.log("MultiUserComponent changeNavigation :"+value);
        if(value=="1")
        {
            this.navigation = acheteurNavigation;
			// Register the navigation to the service
			this._fuseNavigationService.register('muser-ach', this.navigation);
			// Set the main navigation as our current navigation
			this._fuseNavigationService.setCurrentNavigation('muser-ach');
            //this.router.navigate(["'/shopping'"]);
        }
        else if (value=="2")
        {
            this.navigation = banqueNavigation;
			// Register the navigation to the service
			this._fuseNavigationService.register('muser-banq', this.navigation);
			// Set the main navigation as our current navigation
			this._fuseNavigationService.setCurrentNavigation('muser-banq');
            //this.router.navigate(["'/banque'"]);
        }
        else if (value=="3")
        {
            this.navigation = fournissNavigation;
			// Register the navigation to the service
			this._fuseNavigationService.register('muser-four', this.navigation);
			// Set the main navigation as our current navigation
			this._fuseNavigationService.setCurrentNavigation('muser-four');
            //this.router.navigate(["'/main-magasin'"]);
        }
        else if (value=="4")
        {
            this.navigation = animNavigation;
			// Register the navigation to the service
			this._fuseNavigationService.register('muser-anim', this.navigation);
			// Set the main navigation as our current navigation
			this._fuseNavigationService.setCurrentNavigation('muser-anim');
            //this.router.navigate(["'/main-anim'"]);
        }
        else if (value=="5")
        {
            this.navigation = adminNavigation;
			// Register the navigation to the service
			this._fuseNavigationService.register('muser-admin', this.navigation);
			// Set the main navigation as our current navigation
			this._fuseNavigationService.setCurrentNavigation('muser-admin');
            //this.router.navigate(["'/main'"]);
        }
    }
    /**
     * Register a custom plugin
     */
    private _registerCustomChartJSPlugin(): void
    {
        (<any>window).Chart.plugins.register({
            afterDatasetsDraw: function (chart, easing): any {
                // Only activate the plugin if it's made available
                // in the options
                if (
                    !chart.options.plugins.xLabelsOnTop ||
                    (chart.options.plugins.xLabelsOnTop && chart.options.plugins.xLabelsOnTop.active === false)
                )
                {
                    return;
                }

                // To only draw at the end of animation, check for easing === 1
                const ctx = chart.ctx;

                chart.data.datasets.forEach(function (dataset, i): any {
                    const meta = chart.getDatasetMeta(i);
                    if ( !meta.hidden )
                    {
                        meta.data.forEach(function (element, index): any {

                            // Draw the text in black, with the specified font
                            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                            const fontSize = 13;
                            const fontStyle = 'normal';
                            const fontFamily = 'Roboto, Helvetica Neue, Arial';
                            ctx.font = (<any>window).Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                            // Just naively convert to string for now
                            const dataString = dataset.data[index].toString() + 'k';

                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            const padding = 15;
                            const startY = 24;
                            const position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, startY);

                            ctx.save();

                            ctx.beginPath();
                            ctx.setLineDash([5, 3]);
                            ctx.moveTo(position.x, startY + padding);
                            ctx.lineTo(position.x, position.y - padding);
                            ctx.strokeStyle = 'rgba(255,255,255,0.12)';
                            ctx.stroke();

                            ctx.restore();
                        });
                    }
                });
            }
        });
    }
}

function createNewUser(id: number): UserData {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  
    return {
      id: id.toString(),
      name: name,
      //progress: name+"_"+Math.round(Math.random() * 100).toString()+"@mail.com"
      progress: ACTEURTYPES[Math.round(Math.random() * (ACTEURTYPES.length - 1))]
      //progress: "77 400 500"
      ,color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }
  

