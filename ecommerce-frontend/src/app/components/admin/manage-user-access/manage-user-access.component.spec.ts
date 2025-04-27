import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserAccessComponent } from './manage-user-access.component';

describe('ManageUserAccessComponent', () => {
  let component: ManageUserAccessComponent;
  let fixture: ComponentFixture<ManageUserAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageUserAccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUserAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
