import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable, BehaviorSubject } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import * as shape from 'd3-shape';
import { AnimHomeService } from 'app/espace/animateur/anim-home.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';


@Component({
  selector: 'app-fostatistique-list',
  templateUrl: './fourn-statistique-list.component.html',
  styleUrls: ['./fourn-statistique-list.component.scss']
})

export class FoStatistiqueListComponent implements OnInit 
{
  stats: any[];
  selectedStatsTimeline: any;
  widgets: any;
  widget5: any = {};
  widget6: any = {};
  widget7: any = {};
  widget8: any = {};
  widget9: any = {};
  widget11: any = {};

  dateNow = Date.now();

  /**
   * Constructor
   *
   * @param {FuseSidebarService} _fuseSidebarService
   * @param {AnimHomeService} _animHomeService
   */
  constructor(
      private _fuseSidebarService: FuseSidebarService,
      private _animHomeService: AnimHomeService
  )
  {
      /**
       * Widget 5
       */
      this.widget5 = {
          currentRange  : 'TW',
          xAxis         : true,
          yAxis         : true,
          gradient      : false,
          legend        : false,
          showXAxisLabel: false,
          xAxisLabel    : 'Days',
          showYAxisLabel: false,
          yAxisLabel    : 'Isues',
          scheme        : {
              domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
          },
          onSelect      : (ev) => {
              console.log(ev);
          },
          supporting    : {
              currentRange  : '',
              xAxis         : false,
              yAxis         : false,
              gradient      : false,
              legend        : false,
              showXAxisLabel: false,
              xAxisLabel    : 'Days',
              showYAxisLabel: false,
              yAxisLabel    : 'Isues',
              scheme        : {
                  domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
              },
              curve         : shape.curveBasis
          }
      };

      /**
       * Widget 6
       */
      this.widget6 = {
          currentRange : 'TW',
          legend       : false,
          explodeSlices: false,
          labels       : true,
          doughnut     : true,
          gradient     : false,
          scheme       : {
              domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63']
          },
          onSelect     : (ev) => {
              console.log(ev);
          }
      };

      /**
       * Widget 7
       */
      this.widget7 = {
          currentRange: 'T'
      };

      /**
       * Widget 8
       */
      this.widget8 = {
          legend       : false,
          explodeSlices: false,
          labels       : true,
          doughnut     : false,
          gradient     : false,
          scheme       : {
              domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#ffc107']
          },
          onSelect     : (ev) => {
              console.log(ev);
          }
      };

      /**
       * Widget 9
       */
      this.widget9 = {
          currentRange  : 'TW',
          xAxis         : false,
          yAxis         : false,
          gradient      : false,
          legend        : false,
          showXAxisLabel: false,
          xAxisLabel    : 'Days',
          showYAxisLabel: false,
          yAxisLabel    : 'Isues',
          scheme        : {
              domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
          },
          curve         : shape.curveBasis
      };

      setInterval(() => {
          this.dateNow = Date.now();
      }, 1000);

  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      this.stats = this._animHomeService.projects;
      this.selectedStatsTimeline = this.stats[0];
      this.widgets = this._animHomeService.widgets_prj;

      /**
       * Widget 11
       */
      this.widget11.onContactsChanged = new BehaviorSubject({});
      //this.widget11.onContactsChanged.next(this.widgets.widget11.table.rows);
      this.widget11.dataSource = new FilesDataSource(this.widget11);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void
  {
      this._fuseSidebarService.getSidebar(name).toggleOpen();
  }
}

export class FilesDataSource extends DataSource<any>
{
  /**
   * Constructor
   *
   * @param _widget11
   */
  constructor(private _widget11)
  {
      super();
  }

  /**
   * Connect function called by the table to retrieve one stream containing the data to render.
   *
   * @returns {Observable<any[]>}
   */
  connect(): Observable<any[]>
  {
      return this._widget11.onContactsChanged;
  }

  /**
   * Disconnect
   */
  disconnect(): void
  {
  }
}
