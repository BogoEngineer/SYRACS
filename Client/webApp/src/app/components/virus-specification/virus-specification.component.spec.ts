import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirusSpecificationComponent } from './virus-specification.component';

describe('VirusSpecificationComponent', () => {
  let component: VirusSpecificationComponent;
  let fixture: ComponentFixture<VirusSpecificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirusSpecificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirusSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
