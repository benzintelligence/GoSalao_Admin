import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDefaultFormComponent } from './field-default-form.component';

describe('FieldDefaultFormComponent', () => {
  let component: FieldDefaultFormComponent;
  let fixture: ComponentFixture<FieldDefaultFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDefaultFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDefaultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
