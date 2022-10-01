import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StorageComponent } from './storage/storage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ReceptionStorageComponent } from './reception-storage/reception-storage.component';
import { ReleaseStorageComponent } from './release-storage/release-storage.component';
import { CompanyNameComponent } from './company-name/company-name.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StorageComponent,
    DocumentsComponent,
    ReceptionStorageComponent,
    ReleaseStorageComponent,
    CompanyNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
