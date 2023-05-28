import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.fetchUsers();
  }

  fetchUsers(page: number = 1, perPage: number = 5) {
    this.userService.getUsers(page, perPage).subscribe((response) => {
      console.log('response.data: ', response.data);
      this.dataSource.data = response.data;
    });
  }

  onPageChange(event: PageEvent) {
    const { pageIndex, pageSize } = event;
    this.fetchUsers(pageIndex + 1, pageSize);
  }
}
