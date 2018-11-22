import { Component } from '@angular/core';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';

@Component({
    selector   : 'admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
    styleUrls  : ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent
{
    /**
     * Constructor
     */
    crudComp: CrudPopupComponent;
    constructor(private parCrud: CrudPopupComponent) {
        this.crudComp = this.parCrud;
    }
}
