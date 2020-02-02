import { Routes } from "@angular/router";
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { DatabindingComponent } from './demo/databinding/databinding.component';
import { ProdutoComponent } from './navegacao/produto/produto.component';
export const rootRounterConfig : Routes = [

    { path: '', redirectTo : '/home', pathMatch: 'full'},
    { path: 'home', component : HomeComponent},
    { path: 'contatos', component : ContatoComponent},
    { path: 'sobre', component : SobreComponent},
    { path: 'databinding', component : DatabindingComponent},
    { path: 'produto', component : ProdutoComponent}
];