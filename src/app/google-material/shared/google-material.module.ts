import { NgModule } from 'vendor/angular';
import {
  MAT_DATE_LOCALE,
  MatDatepickerModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatInputModule,
} from 'vendor/material';

// component
import { GoogleMaterialComponent } from 'app/google-material/google-material.component';
// modules
import { TranslateModule } from '@ngx-translate/core';
import { GoogleMaterialRouterModule } from 'app/google-material/shared/google-material.route';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    GoogleMaterialComponent,
  ],
  imports: [
    SharedModule,
    GoogleMaterialRouterModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  exports: [
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'no-NO' },  // changes the format for the calender to norwegian (en-GB, changes it to english)
  ],
})

export class GoogleMaterialModule { }
