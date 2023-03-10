/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BootComponent } from './boot.component';

describe('BootComponent', () => {
  let component: BootComponent;
  let fixture: ComponentFixture<BootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
