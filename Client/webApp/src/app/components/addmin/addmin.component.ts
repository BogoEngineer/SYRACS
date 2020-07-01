import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Fruit {
  name: string;
}


@Component({
  selector: 'app-addmin',
  templateUrl: './addmin.component.html',
  styleUrls: ['./addmin.component.css']
})
export class AddminComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;

  @Output() valueChange = new EventEmitter();
  @Output() valueUserChange = new EventEmitter();

  symptomList: string[] = 
  ['Fatigue', 'Weakness', 'Cough'];

  types: string[] = 
  ['Humans', 'Animals', 'Plants'];

  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
    this.seventhFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required],
      thirdCtrl: ['', Validators.required],
      fourthCtrl: ['', Validators.required]
    });
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.symptomList.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(symptom: string): void {
    const index = this.symptomList.indexOf(symptom);

    if (index >= 0) {
      this.symptomList.splice(index, 1);
    }
  }

  addVirus(){
    let virus = {
      name: this.firstFormGroup.value.firstCtrl,
      type: this.secondFormGroup.value.secondCtrl,
      symptoms: this.symptomList,
      description: this.fourthFormGroup.value.fourthCtrl,
      progress: this.fifthFormGroup.value.fifthCtrl,
      positive_cases: this.sixthFormGroup.value.sixthCtrl,
    }
    this.userService.addVirus(virus).subscribe(res=>{
      this.snackBar.open(`Virus ${virus.name} has been added!`, "x", {duration: 1500});
    });
    this.valueChange.emit();
  }
  
  addUser(){
    let user = {
      username: this.seventhFormGroup.value.firstCtrl,
      password: this.seventhFormGroup.value.secondCtrl,
      admin: this.seventhFormGroup.value.thirdCtrl[0] as boolean,
      email: this.seventhFormGroup.value.fourthCtrl,
    }
    this.userService.addUser(user).subscribe(res=>{
      this.snackBar.open(`User ${user.username} has been added!`, "x", {duration: 1500});
    });
    this.valueUserChange.emit();
  }
}
