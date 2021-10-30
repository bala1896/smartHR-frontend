import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Bootstrap DataTable
import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';

import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';   
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgxPrintModule} from 'ngx-print'; 

import {HttpClientModule, HttpClient} from '@angular/common/http'; 
import { DatePipe } from '@angular/common';

// export class department {
//   constructor(
//     public uid: number,
//     public name: string,
//   ){}
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot(
      {
        timeOut: 1500,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }
    ),
  ],
  providers: [DatePipe],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
