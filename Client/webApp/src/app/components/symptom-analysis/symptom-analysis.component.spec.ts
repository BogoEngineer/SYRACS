import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomAnalysisComponent } from './symptom-analysis.component';

describe('SymptomAnalysisComponent', () => {
  let component: SymptomAnalysisComponent;
  let fixture: ComponentFixture<SymptomAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
