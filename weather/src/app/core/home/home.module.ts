import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routedComponents, routes } from './home-routing.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [...routedComponents],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    TranslateModule
  ],
})
export class HomeModule {}
