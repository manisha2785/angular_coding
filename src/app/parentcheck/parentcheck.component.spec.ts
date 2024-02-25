import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcheckComponent } from './parentcheck.component';

describe('ParentcheckComponent', () => {
  let component: ParentcheckComponent;
  let fixture: ComponentFixture<ParentcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentcheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
