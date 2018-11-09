import { Component, OnDestroy, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { MuserHomeService } from '../../muser-home.service';
import { ProjectDashboardService } from 'app/main/apps/dashboards/project/project.service';


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
  
const ACTEURTYPES: string[] = ['Client', 'Multiuser', 'Multiuser'];
@Component({
  selector: 'app-main-muser',
  templateUrl: './main-muser.component.html',
  styleUrls: ['./main-muser.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})

export class MainMuserComponent implements OnInit, OnDestroy 
{

   home: any;
	widgets: any;
    // Private
    private _unsubscribeAll: Subject<any>;
	
	displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
	dataSource: MatTableDataSource<UserData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	
	length = 100;
	pageSize = 10;
	
	devices = [
        {
          name: 'Peche',
          value:'75',
          change:'-0.9'
        },
        {
          name: 'Elevage',
          value:'10',
          change:'0.9'
        },
        {
          name: 'Agriculture',
          value:'15',
          change:'2.1'
        }
    ]

    /**
     * Constructor
     *
     * @param {MuserHomeService} _muserService
     */
    constructor(
        private _muserService: MuserHomeService, private _proj: ProjectDashboardService
    )
    {
        console.log("MuserHomeComponent contructor");
        this.widgets=_proj.getWidgets();

        // Set the private defaults
        this._unsubscribeAll = new Subject();
		
		this._registerCustomChartJSPlugin();
		
		// Create 100 users
		const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
		
		// Assign the data to the data source for the table to render
		this.dataSource = new MatTableDataSource(users);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        console.log ("MainMuserComponent ngOnInit")
        // Get the widgets from the service
       // this.widgets = this._muserService.widgets;
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
/** Builds and returns a new User. */
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
