import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginpage } from './loginpage';
import { RouterLink } from '@angular/router';

describe('Loginpage', () => {
  let component: Loginpage;
  let fixture: ComponentFixture<Loginpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loginpage,RouterLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loginpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
