import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycle3ParentComponent } from './life-cycle3-parent.component';

describe('LifeCycle3ParentComponent', () => {
  let component: LifeCycle3ParentComponent;
  let fixture: ComponentFixture<LifeCycle3ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycle3ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycle3ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
