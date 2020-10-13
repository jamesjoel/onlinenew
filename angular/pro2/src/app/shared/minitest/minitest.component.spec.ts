import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinitestComponent } from './minitest.component';

describe('MinitestComponent', () => {
  let component: MinitestComponent;
  let fixture: ComponentFixture<MinitestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinitestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinitestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
