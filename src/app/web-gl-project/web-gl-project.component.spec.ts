import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebGLProjectComponent } from './web-gl-project.component';

describe('WebGLProjectComponent', () => {
  let component: WebGLProjectComponent;
  let fixture: ComponentFixture<WebGLProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebGLProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebGLProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
