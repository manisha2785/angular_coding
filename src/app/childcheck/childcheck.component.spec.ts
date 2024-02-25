import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcheckComponent } from './childcheck.component';

describe('ChildcheckComponent', () => {
  let component: ChildcheckComponent;
  let fixture: ComponentFixture<ChildcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildcheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
