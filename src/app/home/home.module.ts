import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LandingBannerComponent } from './landing-banner/landing-banner.component';
import { SharedComponentsModule } from '../components/shared-components.module';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { AboutComponent } from './about/about.component';
import { SuscribeComponent } from './suscribe/suscribe.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, LandingBannerComponent, JobsearchComponent, AboutComponent, SuscribeComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
