import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelPessoaJuridicaComponent } from './painel-pessoa-juridica.component';

describe('PainelPessoaJuridicaComponent', () => {
  let component: PainelPessoaJuridicaComponent;
  let fixture: ComponentFixture<PainelPessoaJuridicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelPessoaJuridicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelPessoaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
