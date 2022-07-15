import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovpedidoComponent } from './novpedido.component';

describe('NovpedidoComponent', () => {
  let component: NovpedidoComponent;
  let fixture: ComponentFixture<NovpedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovpedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
