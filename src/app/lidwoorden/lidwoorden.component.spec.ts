import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LidwoordenComponent } from './lidwoorden.component';

describe('LidwoordenComponent', () => {
  let component: LidwoordenComponent;
  let fixture: ComponentFixture<LidwoordenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LidwoordenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LidwoordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
