import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavbarModule } from './navbar/navbar.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { ArtworkModule } from './artwork/artwork.module';
import { FooterModule } from './footer/footer.module';
import { ProjectsModule } from './projects/projects.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    NavbarModule,
    FooterModule,
    AboutModule,
    ProjectsModule,
    ArtworkModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
