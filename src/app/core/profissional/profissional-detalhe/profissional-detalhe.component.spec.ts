import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalDetalheComponent } from './profissional-detalhe.component';

describe('ProfissionalDetalheComponent', () => {
  let component: ProfissionalDetalheComponent;
  let fixture: ComponentFixture<ProfissionalDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionalDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
