import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadorFormularioComponent } from './validador-formulario.component';

describe('ValidadorFormularioComponent', () => {
  let component: ValidadorFormularioComponent;
  let fixture: ComponentFixture<ValidadorFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidadorFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidadorFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
