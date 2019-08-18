import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
// import { NavbarComponent } from '../components/navbar/navbar.component';
import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedComponentsModule
  ]
})
export class ProfileModule { }
