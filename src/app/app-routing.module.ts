import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroPessoaFisicaComponent } from './cadastro/cadastro-pessoa-fisica/cadastro-pessoa-fisica.component';
import { CadastroPessoaJuridicaComponent } from './cadastro/cadastro-pessoa-juridica/cadastro-pessoa-juridica.component';
import { PainelPessoaFisicaComponent } from './paineis/painel-pessoa-fisica/painel-pessoa-fisica.component';
import { PainelPessoaJuridicaComponent } from './paineis/painel-pessoa-juridica/painel-pessoa-juridica.component';
import { CadastroResiduosComponent } from './paineis/cadastro-residuos/cadastro-residuos.component';
import { AuthGuard } from './shared/auth.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewPasswordComponent } from './reset-password/new-password/new-password.component';
import { SolicitantesResiduosComponent } from './paineis/solicitantes-residuos/solicitantes-residuos.component';
import { PesquisadoresComponent } from './pesquisadores/pesquisadores.component';
import { EventosComponent } from './eventos/eventos.component';
import { ComunicacaoComponent } from './comunicacao/comunicacao.component';
import { ArquivosComponent } from './arquivos/arquivos.component';


const routes:Routes=[
  {path:'', component:HomePageComponent},
  {path:'login', component:LoginComponent},
  {path:'projetos', component:ProjetosComponent},
  {path:'pesquisadores', component:PesquisadoresComponent},
  {path:'eventos', component:EventosComponent},
  {path:'comunicacao', component:ComunicacaoComponent},
  {path:'arquivos', component:ArquivosComponent},
  {path:'cadastro', component:CadastroComponent,children:[
    {path:'pessoa-fisica', component:CadastroPessoaFisicaComponent},
    {path:'pessoa-juridica', component:CadastroPessoaJuridicaComponent}
  ]},
  {path:'reset-password', component:ResetPasswordComponent},
  {path:'new-password/:email/:token', component:NewPasswordComponent},
  {path:'painel-pessoa-fisica', component:PainelPessoaFisicaComponent,canActivate:[AuthGuard]},
  {path:'painel-pessoa-juridica', component:PainelPessoaJuridicaComponent,canActivate:[AuthGuard]},
  {path:'cadastro-residuos', component:CadastroResiduosComponent,canActivate:[AuthGuard]},
  {path:'solicitantes-residuos', component:SolicitantesResiduosComponent,canActivate:[AuthGuard]}
]

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
],
exports:[RouterModule]
})
export class AppRoutingModule { }
