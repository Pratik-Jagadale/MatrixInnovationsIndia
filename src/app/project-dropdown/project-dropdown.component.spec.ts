import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDropdownComponent } from './project-dropdown.component';

describe('ProjectDropdownComponent', () => {
  let component: ProjectDropdownComponent;
  let fixture: ComponentFixture<ProjectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
