import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalaryComponent } from './photo-galary.component';

describe('PhotoGalaryComponent', () => {
  let component: PhotoGalaryComponent;
  let fixture: ComponentFixture<PhotoGalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoGalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoGalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
