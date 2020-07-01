import { Component, Output, EventEmitter } from '@angular/core';
import { AddminComponent } from './components/addmin/addmin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webApp';

  valueViruses=0;
  valueUsers=0;

  onActivate(elementRef) { 
    if(elementRef.valueChange){
      elementRef.valueChange.subscribe(event => {
      this.valueViruses += 1;
      });
    }
    if(elementRef.valueReset){
      elementRef.valueReset.subscribe(event => {
      this.valueViruses = 0;
      });
    }
    if(elementRef.valueUserReset){
      elementRef.valueUserReset.subscribe(event => {
      this.valueUsers = 0;
      });
    }
    if(elementRef.valueUserChange){
      elementRef.valueUserChange.subscribe(event => {
      this.valueUsers += 1;
      });
    }
  }
}
