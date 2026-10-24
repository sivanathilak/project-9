import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P4Delete } from './p4-delete';

describe('P4Delete', () => {
  let component: P4Delete;
  let fixture: ComponentFixture<P4Delete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P4Delete],
    }).compileComponents();

    fixture = TestBed.createComponent(P4Delete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
