import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowProfilesComponent } from './cow-profiles.component';

describe('CowProfilesComponent', () => {
  let component: CowProfilesComponent;
  let fixture: ComponentFixture<CowProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
