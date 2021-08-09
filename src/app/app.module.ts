import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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


@NgModule({

  //Components
  declarations: [
    AppComponent,
    HomePageComponent,
    SobreProjetoComponent,
    ContatoComponent,
    TrocasComponent,
    ResiduosComponent
  ],

  //Modules
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],

  //Services, Guards
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
