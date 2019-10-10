import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuteProcessComponent } from './recute-process.component';

describe('RecuteProcessComponent', () => {
  let component: RecuteProcessComponent;
  let fixture: ComponentFixture<RecuteProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuteProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuteProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
