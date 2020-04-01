import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNgIfNotCompleteComponent } from './sub-ng-if-not-complete.component';

describe('SubNgIfNotCompleteComponent', () => {
  let component: SubNgIfNotCompleteComponent;
  let fixture: ComponentFixture<SubNgIfNotCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubNgIfNotCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNgIfNotCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
