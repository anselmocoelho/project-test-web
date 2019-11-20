import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManobraComponent } from './manobra.component';

describe('ManobraComponent', () => {
  let component: ManobraComponent;
  let fixture: ComponentFixture<ManobraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManobraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
