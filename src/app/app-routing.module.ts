import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/main.component';
import { ResidencesComponent } from './residences/residences.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { DetailApartmentComponent } from './detail-apartment/detail-apartment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: ResidencesComponent},
  {path:'residences', component:ResidencesComponent,
  children:[
    {path:'add', component:DetailsResidenceComponent},
    {path:'edit/:id', component:AddResidenceComponent},
    {path:'details/:x', component:DetailsResidenceComponent},
    {path:'**', component:NotFoundComponent}]},
  {path:'addResidence', component:FormResidenceComponent },
  {path: 'apartements/:idr', component:DetailsResidenceComponent},
  { path: 'addApartment', component:FormApartmentComponent },
  { path: 'apartment-details/:id', component: DetailApartmentComponent },
  { path: 'apartment-details/:id', component: DetailApartmentComponent },

  { path: '404', component: NotFoundComponent }, 
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }