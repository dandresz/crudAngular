/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  { path: '', redirectTo: '/crud', pathMatch: 'full' }, // Redirige a CrudComponent
  { path: 'crud', component: CrudComponent },
  // otras rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Habilitar hash puede ayudar
  exports: [RouterModule]
})
export class AppRoutingModule { }*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  { path: '', component: CrudComponent }, // Ruta predeterminada
  // Otras rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

