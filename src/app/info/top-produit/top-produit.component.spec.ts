import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProduitComponent } from './top-produit.component';

describe('TopProduitComponent', () => {
  let component: TopProduitComponent;
  let fixture: ComponentFixture<TopProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
