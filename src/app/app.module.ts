import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { SignUpComponent } from './core/components/sign-up/sign-up.component';
import { HeaderComponent } from './core/components/common/header/header.component';
import { FooterComponent } from './core/components/common/footer/footer.component';
import { CustomDatePipe } from './core/pipes/custom-date.pipe';
import { HomeComponent } from './core/components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialsModule } from './widget-module/ng-materials/ng-materials.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    CustomDatePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialsModule,
    ReactiveFormsModule,
    // ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
