import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(U) getPoupanca(): should poupanca have 10`,() => {
    expect(component.getPoupanca).toEqual(10);
  })

  it(`(U) getCarteira(): should carteira have 10`,() => {
    expect(component.getPoupanca).toEqual(10);
  })

  it(`(U) getSacar(): should transfer poupanca from carteira`,() => {
    component.setSacar('10');

    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  })

  it(`(U) setSacar(): should transfer poupanca dont have string or poupanca < value`,() => {
    expect(component.setSacar('string')).not.toBeTruthy();

    expect(component.setSacar('100')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  })

  it(`(U) getDepositar(): should transfer carteira from poupanca`,() => {
    component.setDepositar('50');

    expect(component.getCarteira).toEqual(0);
    expect(component.getPoupanca).toEqual(60);
  })

  it(`(U) setDepositar(): should transfer carteira dont have string or poupanca (isNan)) or carteira < value`,() => {
    expect(component.setSacar('string')).not.toBeTruthy();

    expect(component.setSacar('100')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  })
});
