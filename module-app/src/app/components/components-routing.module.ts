import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsHomeComponent } from './components-home/components-home.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnerComponent } from './partner/partner.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsHomeComponent,
    children: [
      { path: '', component: BiographyComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'partners', component: PartnerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
