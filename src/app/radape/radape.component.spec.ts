import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadapeComponent } from './radape.component';

describe('RadapeComponent', () => {
  let component: RadapeComponent;
  let fixture: ComponentFixture<RadapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
