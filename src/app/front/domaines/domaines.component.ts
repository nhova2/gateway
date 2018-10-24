import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Data, AppService } from '../../front/app.service';
import { Product } from '../../front/app.models';
import { MatDialog } from '@angular/material';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { FuseConfigService } from '@fuse/services/config.service';
import { navigation } from 'app/navigation/navigation';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
    selector: 'app-domaines',
    templateUrl: './domaines.component.html',
    styleUrls: ['./domaines.component.scss']
  })
  export class DomainesComponent {

  fuseConfig: any;
  navigation: any;

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
    // Set the defaults
    this.navigation = navigation;

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