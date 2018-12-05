import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Data, AppService } from '../../front/app.service';
import { Product } from '../../front/app.models';
import { MatDialog } from '@angular/material';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { FuseConfigService } from '@fuse/services/config.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
    selector: 'app-domaines',
    templateUrl: './domaines.component.html',
    styleUrls: ['./domaines.component.scss']
  })
  export class DomainesComponent {

  fuseConfig: any;

  public slides = [
    { title: 'The biggest sale', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
  ];

  ngOnInit() {
    // Subscribe to config changes
    this._fuseConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.fuseConfig = config;
      });
  }
  // Private
  private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
  /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
  constructor(private _fuseSidebarService: FuseSidebarService, private _fuseConfigService: FuseConfigService ) {

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }
 

  /**
    * On destroy
    */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  /**
     * Toggle sidebar
     *
     * @param name
     */
  toggleSidebar(name): void {
    this._fuseSidebarService.getSidebar(name).toggleOpen();
  }

  }