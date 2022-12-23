import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'elements', loadChildren: () =>  import ('./elements/elements.module').then(m => m.ElementsModule) },
  { path: 'components', loadChildren: () =>  import ('./components/components.module').then(m => m.ComponentsModule)  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
