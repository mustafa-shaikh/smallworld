import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name', 'avatar'];
  dataSource = new MatTableDataSource<any>();
  pageSizeOptions: number[] = [5, 10, 20];
  pageIndex = 0;
  pageSize = this.pageSizeOptions[0];
  totalItems = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.fetchUsers();
  }

  fetchUsers(page: number = 1, perPage: number = this.pageSize) {
    this.userService.getUsers(page, perPage).subscribe((response) => {
      this.dataSource.data = response.data;
      this.totalItems = response.total;
    });
  }

  onPageChange(event: PageEvent) {
    const { pageIndex, pageSize } = event;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.fetchUsers(pageIndex + 1, pageSize);
  }

}
