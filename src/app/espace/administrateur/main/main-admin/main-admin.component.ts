import { Component, OnInit } from '@angular/core';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.scss']
})
export class MainAdminComponent implements OnInit {

  crudComp: CrudPopupComponent;
  constructor(private parCrud: CrudPopupComponent) {
    this.crudComp = this.parCrud;
  }

  ngOnInit() {
  }

}
