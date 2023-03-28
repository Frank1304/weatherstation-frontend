import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule
  ],
  exports: [DataTableComponent]
})
export class Dht22Module { }
