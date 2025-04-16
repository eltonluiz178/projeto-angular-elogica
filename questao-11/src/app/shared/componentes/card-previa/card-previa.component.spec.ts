import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPreviaComponent } from './card-previa.component';

describe('CardPreviaComponent', () => {
  let component: CardPreviaComponent;
  let fixture: ComponentFixture<CardPreviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPreviaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPreviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
