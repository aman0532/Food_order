import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodComponent } from './food-page.component';

describe('FoodComponent', () => {
  let component: FoodComponent;
  let fixture: ComponentFixture<FoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
