import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestCasinosComponent } from './newest-casinos.component';

describe('NewestCasinosComponent', () => {
  let component: NewestCasinosComponent;
  let fixture: ComponentFixture<NewestCasinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestCasinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
