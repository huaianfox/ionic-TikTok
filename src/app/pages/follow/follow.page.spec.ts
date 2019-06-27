import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowPage } from './follow.page';

describe('FollowPage', () => {
  let component: FollowPage;
  let fixture: ComponentFixture<FollowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
