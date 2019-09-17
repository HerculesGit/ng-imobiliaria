import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarClienteComponentComponent } from './editar-cliente.component';

describe('EditarClienteComponentComponent', () => {
  let component: EditarClienteComponentComponent;
  let fixture: ComponentFixture<EditarClienteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditarClienteComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarClienteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
