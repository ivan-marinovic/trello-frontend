import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoardsComponent } from './add-boards.component';

describe('AddBoardsComponent', () => {
  let component: AddBoardsComponent;
  let fixture: ComponentFixture<AddBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBoardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
