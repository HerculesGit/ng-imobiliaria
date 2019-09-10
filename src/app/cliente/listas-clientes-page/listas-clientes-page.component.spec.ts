import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasClientesPageComponent } from './listas-clientes-page.component';

describe('ListasClientesPageComponent', () => {
  let component: ListasClientesPageComponent;
  let fixture: ComponentFixture<ListasClientesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasClientesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasClientesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
