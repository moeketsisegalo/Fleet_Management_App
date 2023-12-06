// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { RouteOptimizationComponent } from './route-optimization/route-optimization.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component'; // Import the GoogleMapsComponent

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'route-optimization', component: RouteOptimizationComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'google-maps', component: GoogleMapsComponent } // Add the route for GoogleMapsComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
