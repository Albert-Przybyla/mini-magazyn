import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorageComponent } from './storage/storage.component';
import { DocumentsComponent } from './documents/documents.component';
import { AddOrderComponent } from './add-order/add-order.component';



const routes: Routes = [
  {path: '', redirectTo: '/storage', pathMatch: 'full'},
  {path: 'storage', component: StorageComponent},
  {path: 'add', component: AddOrderComponent},
  {path: 'document', component: DocumentsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
