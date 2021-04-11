import { AdminComponent } from './components/admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioRoutingModule } from './components/inicio/inicio-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRoutingModule } from './components/profile/profile-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterRoutingModule } from './components/register/register-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InicioRoutingModule,
    FormsModule,
    ProfileRoutingModule,
    HttpClientModule,
    RegisterRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
