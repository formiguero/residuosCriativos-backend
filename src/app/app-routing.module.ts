import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ResiduosComponent } from './residuos/residuos.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroPessoaFisicaComponent } from './cadastro/cadastro-pessoa-fisica/cadastro-pessoa-fisica.component';
import { CadastroPessoaJuridicaComponent } from './cadastro/cadastro-pessoa-juridica/cadastro-pessoa-juridica.component';


const routes:Routes=[
  {path:'',component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {path:'cadastro',component:CadastroComponent,children:[
    {path:'pessoa-fisica',component:CadastroPessoaFisicaComponent},
    {path:'pessoa-juridica',component:CadastroPessoaJuridicaComponent}
  ]},
  {path:'residuos',component:ResiduosComponent}
]

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
],
exports:[RouterModule]
})
export class AppRoutingModule { }
