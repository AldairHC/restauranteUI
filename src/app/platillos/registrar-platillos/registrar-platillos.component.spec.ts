import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPlatillosComponent } from './registrar-platillos.component';

describe('RegistrarPlatillosComponent', () => {
  let component: RegistrarPlatillosComponent;
  let fixture: ComponentFixture<RegistrarPlatillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPlatillosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPlatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
