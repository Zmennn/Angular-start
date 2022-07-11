import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycle1ParentComponent } from './life-cycle1-parent.component';

describe('LifeCycle1ParentComponent', () => {
  let component: LifeCycle1ParentComponent;
  let fixture: ComponentFixture<LifeCycle1ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycle1ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycle1ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
