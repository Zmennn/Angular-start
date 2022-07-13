import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycle3ChildComponent } from './life-cycle3-child.component';

describe('LifeCycle3ChildComponent', () => {
  let component: LifeCycle3ChildComponent;
  let fixture: ComponentFixture<LifeCycle3ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycle3ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycle3ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
