import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoordflitserComponent } from './woordflitser.component';

describe('WoordflitserComponent', () => {
  let component: WoordflitserComponent;
  let fixture: ComponentFixture<WoordflitserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoordflitserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoordflitserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
