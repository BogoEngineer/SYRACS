import {Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

export interface User {
  username: string;
  password: any;
  email: string;
  admin: boolean
}

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit, AfterViewInit {

  @Output() valueUserReset = new EventEmitter()

  displayedColumns: string[] = ['username', 'password', 'email', 'admin'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.valueUserReset.emit();
  }

  ngAfterViewInit() {
    this.userService.getUsers().subscribe(res=>{
      this.users = res.data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
