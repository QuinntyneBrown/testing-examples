// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

    // Test ID

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooComponent } from './foo.component';

describe('FooComponent', () => {
  let component: FooComponent;
  let fixture: ComponentFixture<FooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

    // ARRANGE
    // ACT
    // ASSERT

