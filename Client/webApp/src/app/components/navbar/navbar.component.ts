import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @Input() links: String[];
  @Input() virusNotify: Number;
  @Input() userNotify: Number;
  constructor(public router:Router) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
  }

  logOut(){
    localStorage.clear();
  }
}
