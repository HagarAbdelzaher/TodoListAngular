import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFavoriteComponent } from './app-favorite.component';

describe('AppFavoriteComponent', () => {
  let component: AppFavoriteComponent;
  let fixture: ComponentFixture<AppFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFavoriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
