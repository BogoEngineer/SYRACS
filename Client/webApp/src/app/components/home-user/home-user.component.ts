import {Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { VirusSpecificationComponent } from '../virus-specification/virus-specification.component';
import { UserService } from 'src/app/services/user.service';


export interface Virus {
  name: string;
  type: any;
  positive_cases: string;
  progress: number
}

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit, AfterViewInit {
  user: any;
  selectedVirus: Virus;
  @Output() valueReset = new EventEmitter();
  
  displayedColumns: string[] = ['name', 'type', 'progress', 'positive_cases'];
  dataSource: MatTableDataSource<Virus>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  viruses: Virus[];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userInfo'))[0];
    function f(x){
      return 0;
    }
    this.valueReset.emit(f);
  }

  ngAfterViewInit() {
    this.userService.getViruses().subscribe(res=>{
      this.viruses = res.data;
      this.dataSource = new MatTableDataSource(this.viruses);
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

  showSpecifications(virus:Virus){
    this.selectedVirus = virus;
  }
}