import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P1Console } from './p1-console';

describe('P1Console', () => {
  let component: P1Console;
  let fixture: ComponentFixture<P1Console>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P1Console],
    }).compileComponents();

    fixture = TestBed.createComponent(P1Console);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
