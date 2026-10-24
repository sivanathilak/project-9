import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P2Cards } from './p2-cards';

describe('P2Cards', () => {
  let component: P2Cards;
  let fixture: ComponentFixture<P2Cards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P2Cards],
    }).compileComponents();

    fixture = TestBed.createComponent(P2Cards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
