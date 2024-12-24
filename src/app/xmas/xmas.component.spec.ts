import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmasComponent } from './xmas2024.component';

describe('XmasComponent', () => {
  let component: XmasComponent;
  let fixture: ComponentFixture<XmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XmasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
