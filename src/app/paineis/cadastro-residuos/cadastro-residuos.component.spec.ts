import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroResiduosComponent } from './cadastro-residuos.component';

describe('CadastroResiduosComponent', () => {
  let component: CadastroResiduosComponent;
  let fixture: ComponentFixture<CadastroResiduosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroResiduosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroResiduosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
