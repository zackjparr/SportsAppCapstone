import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsBoardComponent } from './sports-board.component';

describe('SportsBoardComponent', () => {
  let component: SportsBoardComponent;
  let fixture: ComponentFixture<SportsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
