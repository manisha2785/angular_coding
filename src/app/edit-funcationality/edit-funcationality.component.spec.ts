import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFuncationalityComponent } from './edit-funcationality.component';

describe('EditFuncationalityComponent', () => {
  let component: EditFuncationalityComponent;
  let fixture: ComponentFixture<EditFuncationalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFuncationalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFuncationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
