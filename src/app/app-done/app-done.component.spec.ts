import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDoneComponent } from './app-done.component';

describe('AppDoneComponent', () => {
  let component: AppDoneComponent;
  let fixture: ComponentFixture<AppDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
