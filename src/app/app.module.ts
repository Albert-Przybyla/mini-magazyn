import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StorageComponent } from './storage/storage.component';
import { DocumentsComponent } from './documents/documents.component';
import { CompanyNameComponent } from './company-name/company-name.component';
import { FormsModule } from '@angular/forms';
import { AddOrderComponent } from './add-order/add-order.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddWzDocumentComponent } from './add-wz-document/add-wz-document.component';
import { AddPzDocumentComponent } from './add-pz-document/add-pz-document.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataDocumentService } from './in-memory-data-document.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StorageComponent,
    DocumentsComponent,
    CompanyNameComponent,
    AddOrderComponent,
    AddWzDocumentComponent,
    AddPzDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    CommonModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataDocumentService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
