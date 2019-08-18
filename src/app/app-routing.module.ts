import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProfileModule } from './profile/profile.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    //  path: 'profile', loadChildren: './src/app/profile.module#ProfileModule' 
    path: 'profile/:id',
    loadChildren: '../app/profile/profile.module#ProfileModule'
  }
];

@NgModule({
  imports: [ProfileModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
