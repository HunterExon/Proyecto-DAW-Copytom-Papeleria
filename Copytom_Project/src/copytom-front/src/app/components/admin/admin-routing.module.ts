import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin.component';
import { EditComponent } from './edit/edit.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {path: '', component: AdminComponent,
    children:[
    {path: 'listar', component: ListarComponent},
    {path: 'add', component: AddComponent},
    {path: 'edit', component: EditComponent}
  ]
}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }