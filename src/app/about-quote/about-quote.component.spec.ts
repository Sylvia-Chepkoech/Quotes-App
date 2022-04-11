import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutQuoteComponent } from './about-quote.component';

describe('AboutQuoteComponent', () => {
  let component: AboutQuoteComponent;
  let fixture: ComponentFixture<AboutQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
