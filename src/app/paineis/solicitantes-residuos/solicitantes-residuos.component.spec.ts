import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitantesResiduosComponent } from './solicitantes-residuos.component';

describe('SolicitantesResiduosComponent', () => {
  let component: SolicitantesResiduosComponent;
  let fixture: ComponentFixture<SolicitantesResiduosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitantesResiduosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitantesResiduosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
