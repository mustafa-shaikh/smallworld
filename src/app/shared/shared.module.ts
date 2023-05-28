import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { TableComponent } from '../components/table/table.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, TableComponent],
  exports: [HeaderComponent, SidebarComponent, TableComponent],
  imports: [
    MatTableModule,
    MatPaginatorModule
  ]
})
export class SharedModule {
  // Shared module logic goes here
}
