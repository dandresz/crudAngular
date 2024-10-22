import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component'; // Asegúrate de que el componente CRUD esté importado

const routes: Routes = [
  { path: '', redirectTo: '/crud', pathMatch: 'full' }, // Redirige a CRUD por defecto
  { path: 'crud', component: CrudComponent }, // Ruta al componente CRUD
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
