import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsHomeComponent } from './components-home/components-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnerComponent } from './partner/partner.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    ComponentsHomeComponent,
    TableComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnerComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule
  ]
})
export class ComponentsModule { }
