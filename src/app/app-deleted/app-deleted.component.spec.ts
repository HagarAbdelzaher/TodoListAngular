import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeletedComponent } from './app-deleted.component';

describe('AppDeletedComponent', () => {
  let component: AppDeletedComponent;
  let fixture: ComponentFixture<AppDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDeletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
