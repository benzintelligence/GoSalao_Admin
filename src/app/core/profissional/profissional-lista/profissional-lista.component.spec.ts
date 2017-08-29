import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalListaComponent } from './profissional-lista.component';

describe('ProfissionalListaComponent', () => {
  let component: ProfissionalListaComponent;
  let fixture: ComponentFixture<ProfissionalListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionalListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
