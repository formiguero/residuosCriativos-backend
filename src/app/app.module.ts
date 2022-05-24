import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask'

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

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
import { PainelPessoaFisicaComponent } from './paineis/painel-pessoa-fisica/painel-pessoa-fisica.component';
import { PainelPessoaJuridicaComponent } from './paineis/painel-pessoa-juridica/painel-pessoa-juridica.component';
import { CadastroResiduosComponent } from './paineis/cadastro-residuos/cadastro-residuos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewPasswordComponent } from './reset-password/new-password/new-password.component';
import { SolicitantesResiduosComponent } from './paineis/solicitantes-residuos/solicitantes-residuos.component';
import { PopUpComponent } from './paineis/painel-pessoa-fisica/pop-up/pop-up.component';
import { PopUpDeleteComponent } from './paineis/solicitantes-residuos/pop-up-delete/pop-up-delete.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


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
    CadastroPessoaJuridicaComponent,
    PainelPessoaFisicaComponent,
    PainelPessoaJuridicaComponent,
    CadastroResiduosComponent,
    ResetPasswordComponent,
    NewPasswordComponent,
    SolicitantesResiduosComponent,
    PopUpComponent,
    PopUpDeleteComponent,
    NavbarComponent,
    FooterComponent
  ],

  //Modules
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    NgxMaskModule.forRoot()
   
  ],

  //Services, Guards
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
