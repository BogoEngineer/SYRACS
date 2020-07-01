import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-symptom-analysis',
  templateUrl: './symptom-analysis.component.html',
  styleUrls: ['./symptom-analysis.component.css']
})
export class SymptomAnalysisComponent implements OnInit {
  symptomList: string[] = 
  ['Fever', 'Hemorrhaging', 'Severe aches and pains', 'Fatigue', 'Weakness', 'Diarrhea', 'Vomiting', 'Skin rash',
   'Weight loss', 'Headache', 'Weakness', 'Nausea', 'Jaundice', 'Dizziness', 'Encephalitis', 'Swelling', 'Hearing loss',
   'Tremors', 'Scabs', 'Sight loss', 'Cough', 'Pneumonia', 'Violent movements', 'Uncontrolled excitement', 'Fear of water', 'Inability to move parts of the body',
   'Confusion', 'Loss of consciousness'];
  file_name=""
  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  imageInputChange(fileInputEvent: any) {
    this.file_name = fileInputEvent.target.files[0].name;
  }

  fake(){
    this.snackBar.open("This feature hasn't been developed yet!", "x", {duration:1500});
  }
}
