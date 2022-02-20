import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelPessoaFisicaComponent } from './painel-pessoa-fisica.component';

describe('PainelPessoaFisicaComponent', () => {
  let component: PainelPessoaFisicaComponent;
  let fixture: ComponentFixture<PainelPessoaFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelPessoaFisicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
