import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorageComponent } from './storage/storage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ReleaseStorageComponent } from './release-storage/release-storage.component';
import { ReceptionStorageComponent } from './reception-storage/reception-storage.component';



const routes: Routes = [
  {path: '', redirectTo: '/storage', pathMatch: 'full'},
  {path: 'storage', component: StorageComponent},
  {path: 'reception', component: ReceptionStorageComponent},
  {path: 'release', component: ReleaseStorageComponent},
  {path: 'document', component: DocumentsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
