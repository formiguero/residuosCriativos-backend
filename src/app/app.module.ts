import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SobreProjetoComponent } from './sobre-projeto/sobre-projeto.component';
import { ContatoComponent } from './contato/contato.component';
import { TrocasComponent } from './trocas/trocas.component';
import { ResiduosComponent } from './residuos/residuos.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroPessoaFisicaComponent } from './cadastro/cadastro-pessoa-fisica/cadastro-pessoa-fisica.component';
import { CadastroPessoaJuridicaComponent } from './cadastro/cadastro-pessoa-juridica/cadastro-pessoa-juridica.component';


@NgModule({

  //Components
  declarations: [
    AppComponent,
    HomePageComponent,
    SobreProjetoComponent,
    ContatoComponent,
    TrocasComponent,
    ResiduosComponent,
    LoginComponent,
    CadastroComponent,
    CadastroPessoaFisicaComponent,
    CadastroPessoaJuridicaComponent
  ],

  //Modules
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    AppRoutingModule
  ],

  //Services, Guards
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
