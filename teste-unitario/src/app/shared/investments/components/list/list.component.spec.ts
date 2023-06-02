import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(U) should list investments`, () => {
    let investments = component.investiments;

    expect(investments.length).toBe(4);
    expect(investments[0].name).toContain('itau')
    expect(investments[3].name).toContain('inter')
  })

  it(`(I) should list investments`, () => {
    let investments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');

    expect(investments.length).toBe(4);
    expect(investments[0].textContent.trim()).toEqual('itau | 100')
  })
});
