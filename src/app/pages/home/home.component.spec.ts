import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesModule } from '../pages.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[PagesModule] /*Importar el pagesmodule aqui para que no hubiera error del formsModule del input*/
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia sumar 2 numeros, calcular(val1:number, val2:number,Op:string)', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    const data = { valor1: 3, valor2: 2, op: '+' };
    const expectedResult = 5;

    const result = component.calcular(data.valor1, data.valor2, data.op);
    expect(result).toEqual(expectedResult);
  })

  it('Deberia restar 2 numeros, calcular(val1:number, val2:number,Op:string)', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    const data = { valor1: 4, valor2: 2, op: '-' };
    const expectedResult = 2;

    const result = component.calcular(data.valor1, data.valor2, data.op);
    expect(result).toEqual(expectedResult);
  })

  it('Deberia multiplicar 2 numeros, calcular(val1:number, val2:number,Op:string)', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    const data = { valor1: 4, valor2: 3, op: '*' };
    const expectedResult = 12;

    const result = component.calcular(data.valor1, data.valor2, data.op);
    expect(result).toEqual(expectedResult);
  })

  it('Deberia dividir 2 numeros, calcular(val1:number, val2:number,Op:string)', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    const data = { valor1: 12, valor2: 2, op: '/' };
    const expectedResult = 6;

    const result = component.calcular(data.valor1, data.valor2, data.op);
    expect(result).toEqual(expectedResult);
  })






});
