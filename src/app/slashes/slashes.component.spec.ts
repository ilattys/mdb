import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlashesComponent } from './slashes.component';

describe('SlashesComponent', () => {
  let component: SlashesComponent;
  let fixture: ComponentFixture<SlashesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlashesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlashesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
