import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/component';
import { AboutComponent } from './about/component';
import { ServicesComponent} from './services/component';
import { ClientsComponent} from './clients/component';
import { ResourcesComponent} from './resources/component';
import { ContactComponent} from './contact/component';



const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent},

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ClientsComponent,
    ResourcesComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{useHash:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
