import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadorEntradaComponent } from './validador-entrada.component';

describe('ValidadorEntradaComponent', () => {
  let component: ValidadorEntradaComponent;
  let fixture: ComponentFixture<ValidadorEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidadorEntradaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidadorEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
