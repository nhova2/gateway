import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FoCatalogueListComponent } from './catalogue-list/fourn-catalogue-list.component';


import { EcommerceProductsComponent } from './products/products.component';
import { EcommerceProductsService } from './products/products.service';
import { EcommerceProductComponent } from './product/product.component';
import { EcommerceProductService } from './product/product.service';
import { EcommerceOrdersComponent } from './orders/orders.component';
import { EcommerceOrdersService } from './orders/orders.service';
import { EcommerceOrderComponent } from './order/order.component';
import { EcommerceOrderService } from './order/order.service';
import { MatButtonModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatSnackBarModule, MatTableModule, MatTabsModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';
import { FuseWidgetModule } from '@fuse/components';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';



export const routes = [
  //{ path: '', component: FoCatalogueListComponent, pathMatch: 'full' },
  { path: '', 
  component: EcommerceProductsComponent, 
  pathMatch: 'full' ,
  resolve  : {
    data: EcommerceProductsService
    }
    },
  {
        path     : 'products',
        component: EcommerceProductsComponent,
        resolve  : {
            data: EcommerceProductsService
        }
    },
    {
        path     : 'products/:id',
        component: EcommerceProductComponent,
        resolve  : {
            data: EcommerceProductService
        }
    },
    {
        path     : 'products/:id/:handle',
        component: EcommerceProductComponent,
        resolve  : {
            data: EcommerceProductService
        }
    },
    {
        path     : 'orders',
        component: EcommerceOrdersComponent,
        resolve  : {
            data: EcommerceOrdersService
        }
    },
    {
        path     : 'orders/:id',
        component: EcommerceOrderComponent,
        resolve  : {
            data: EcommerceOrderService
        }
    }
];

@NgModule({
  imports: [
    CommonModule,
    FuseSharedModule,
    SharedModule,
    MatBadgeModule,
    MatInputModule,
    RouterModule.forChild(routes),
	MatButtonModule,
	MatChipsModule,
	MatFormFieldModule,
	MatIconModule,
	MatPaginatorModule,
	MatRippleModule,
	MatSelectModule,
	MatSortModule,
	MatSnackBarModule,
	MatTableModule,
	MatTabsModule,

	NgxChartsModule,
	AgmCoreModule.forRoot({
		apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
	}),
	FuseWidgetModule
  ],
  declarations: [
	//FoCatalogueListComponent,
	EcommerceProductsComponent,
	EcommerceProductComponent,
	EcommerceOrdersComponent,
	EcommerceOrderComponent
  ],
   exports: [
        EcommerceProductsComponent,
        EcommerceProductComponent,
        EcommerceOrdersComponent,
        EcommerceOrderComponent
    ],
    providers   : [
        EcommerceProductsService,
        EcommerceProductService,
        EcommerceOrdersService,
        EcommerceOrderService,
        CrudPopupComponent
    ]
})
export class CataloguesFournisseurModule { }
