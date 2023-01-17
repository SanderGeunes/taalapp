import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeerkeuzeComponent } from './meerkeuze.component';

describe('MeerkeuzeComponent', () => {
  let component: MeerkeuzeComponent;
  let fixture: ComponentFixture<MeerkeuzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeerkeuzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeerkeuzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
