import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamEventDetailComponent } from './team-event-detail.component';

describe('TeamEventDetailComponent', () => {
  let component: TeamEventDetailComponent;
  let fixture: ComponentFixture<TeamEventDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamEventDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
