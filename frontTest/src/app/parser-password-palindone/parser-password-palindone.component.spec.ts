import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParserPasswordPalindoneComponent } from './parser-password-palindone.component';

describe('ParserPasswordPalindoneComponent', () => {
  let component: ParserPasswordPalindoneComponent;
  let fixture: ComponentFixture<ParserPasswordPalindoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParserPasswordPalindoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParserPasswordPalindoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
