import { CarduserComponent } from './carduser.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('AccountComponent', () => {
  let component: CarduserComponent;
  let fixture: ComponentFixture<CarduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
