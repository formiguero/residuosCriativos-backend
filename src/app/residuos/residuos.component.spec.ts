import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResiduosComponent } from './residuos.component';

describe('ResiduosComponent', () => {
  let component: ResiduosComponent;
  let fixture: ComponentFixture<ResiduosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResiduosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResiduosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
