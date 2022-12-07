import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroproPage } from './cadastropro.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroproPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroproPageRoutingModule {}
