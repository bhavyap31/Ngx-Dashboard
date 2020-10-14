import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetReadOnlyComponent } from './widget-read-only.component';

describe('WidgetReadOnlyComponent', () => {
  let component: WidgetReadOnlyComponent;
  let fixture: ComponentFixture<WidgetReadOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetReadOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetReadOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
