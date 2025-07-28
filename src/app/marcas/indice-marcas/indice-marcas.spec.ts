import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceMarcas } from './indice-marcas';

describe('IndiceMarcas', () => {
  let component: IndiceMarcas;
  let fixture: ComponentFixture<IndiceMarcas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceMarcas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceMarcas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
