import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopProduitComponent } from './top-produit/top-produit.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { StaticInfoComponent } from './static-info/static-info.component';

@NgModule({
  declarations: [TopProduitComponent, ActualiteComponent, StaticInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StaticInfoComponent,
    ActualiteComponent,
    TopProduitComponent
  ]
})
export class InfoModule { }
