import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { routedComponents, routes } from './weather-routing.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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
  providers: [],
})
export class WeatherModule {}
