import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniboxComponent } from './minibox.component';

describe('MiniboxComponent', () => {
  let component: MiniboxComponent;
  let fixture: ComponentFixture<MiniboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
