import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1DisplayComponent } from './section1-display.component';

describe('Section1DisplayComponent', () => {
  let component: Section1DisplayComponent;
  let fixture: ComponentFixture<Section1DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section1DisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section1DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
