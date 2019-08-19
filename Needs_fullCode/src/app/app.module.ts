import { BrowserModule, enableDebugTools } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { StoriesComponent } from './stories/stories.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HistoryComponent } from './about/history/history.component';
import { VissionComponent } from './about/vission/vission.component';
import { AluminiComponent } from './about/alumini/alumini.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';

const appRoutes:Routes = [
  {path: 'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Event',component:EventComponent},
  {path:'Event/:id',component:EventDetailComponent},
  {path:'Stories',component:StoriesComponent},
  {path:'Gallery',component:GalleryComponent},
  {path:'Contact',component:ContactComponent},
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EventComponent,
    EventDetailComponent,
    StoriesComponent,
    GalleryComponent,
    HistoryComponent,
    VissionComponent,
    AluminiComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,
      {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
