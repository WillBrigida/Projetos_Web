import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common'

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { RouterModule } from '@angular/router';
import { rootRounterConfig } from './app.route';
import { DatabindingComponent } from './demo/databinding/databinding.component';
import { ProdutoComponent } from './navegacao/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DatabindingComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rootRounterConfig, {useHash: false} )]
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 