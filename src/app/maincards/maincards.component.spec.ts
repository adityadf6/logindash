import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincardsComponent } from './maincards.component';

describe('MaincardsComponent', () => {
  let component: MaincardsComponent;
  let fixture: ComponentFixture<MaincardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
