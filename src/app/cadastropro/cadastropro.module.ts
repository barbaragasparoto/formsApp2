import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroproPageRoutingModule } from './cadastropro-routing.module';

import { CadastroproPage } from './cadastropro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroproPageRoutingModule
  ],
  declarations: [CadastroproPage]
})
export class CadastroproPageModule {}
