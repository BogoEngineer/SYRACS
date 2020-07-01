import { Component, OnInit, Input } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode, MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-virus-specification',
  templateUrl: './virus-specification.component.html',
  styleUrls: ['./virus-specification.component.css']
})
export class VirusSpecificationComponent implements OnInit {
  @Input() virus:any;
  panelOpenState = false;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';

  constructor() { }


  ngOnInit(): void {
  }

}
