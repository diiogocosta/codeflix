import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguagesComponent } from './languages.component';

@NgModule({
  declarations: [LanguagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LanguagesComponent
      }
    ])
  ]
})
export class LanguagesModule {}
