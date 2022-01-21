import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPessoaFisicaComponent } from './cadastro-pessoa-fisica.component';

describe('CadastroPessoaFisicaComponent', () => {
  let component: CadastroPessoaFisicaComponent;
  let fixture: ComponentFixture<CadastroPessoaFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPessoaFisicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
