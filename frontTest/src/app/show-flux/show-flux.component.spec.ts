import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFluxComponent } from './show-flux.component';

describe('ShowFluxComponent', () => {
  let component: ShowFluxComponent;
  let fixture: ComponentFixture<ShowFluxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFluxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
