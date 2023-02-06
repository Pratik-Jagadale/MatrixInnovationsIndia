import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSProjectsComponent } from './ds-projects.component';

describe('DSProjectsComponent', () => {
  let component: DSProjectsComponent;
  let fixture: ComponentFixture<DSProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DSProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
