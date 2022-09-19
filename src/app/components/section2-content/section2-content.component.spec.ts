import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2ContentComponent } from './section2-content.component';

describe('Section2ContentComponent', () => {
  let component: Section2ContentComponent;
  let fixture: ComponentFixture<Section2ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section2ContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
