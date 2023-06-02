import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { TableComponent } from '../components/table/table.component';
import { CardComponent } from '../components/card/card.component';
import { ListComponent } from '../components/list/list.component';
import { AutocompleteComponent } from '../components/auto-complete/auto-complete.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ProgressCardComponent } from '../components/progress-card/progress-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';





@NgModule({
  declarations: [HeaderComponent, SidebarComponent, TableComponent,AutocompleteComponent,CardComponent,ListComponent,SearchBarComponent, ProgressCardComponent],
  exports: [HeaderComponent, SidebarComponent, TableComponent,AutocompleteComponent,CardComponent,ListComponent,SearchBarComponent,ProgressCardComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule
    
  ]
})
export class SharedModule {
  // Shared module logic goes here
}
