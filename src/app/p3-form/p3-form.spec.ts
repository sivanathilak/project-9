import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P3Form } from './p3-form';

describe('P3Form', () => {
  let component: P3Form;
  let fixture: ComponentFixture<P3Form>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P3Form],
    }).compileComponents();

    fixture = TestBed.createComponent(P3Form);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
