import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycle1ChildComponent } from './life-cycle1-child.component';

describe('LifeCycle1ChildComponent', () => {
  let component: LifeCycle1ChildComponent;
  let fixture: ComponentFixture<LifeCycle1ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycle1ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycle1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
