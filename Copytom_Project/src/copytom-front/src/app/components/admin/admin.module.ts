import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ListarComponent } from './listar/listar.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import{FormsModule}from '@angular/forms'
import{ ServiceService }from '../AdminService/service.service'
import{HttpClientModule}from '@angular/common/http'


@NgModule({
  declarations: [AdminComponent, ListarComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService]
})
export class AdminModule { }
