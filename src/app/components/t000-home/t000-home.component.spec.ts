import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T000HomeComponent } from './t000-home.component';

describe('T000HomeComponent', () => {
  let component: T000HomeComponent;
  let fixture: ComponentFixture<T000HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T000HomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(T000HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
