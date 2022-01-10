import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KontaktiComponent } from './kontakti/kontakti.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagComponent } from './pag/pag.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './filter.pipe';
import { SafePipe } from './save.pipe';
import { GenreComponent } from './genre/genre.component';
import { CardComponent } from './card/card.component';
import { TopratedComponent } from './toprated/toprated.component';



const appRoutes: Routes = [
  { path: '', component: KontaktiComponent },
  { path: 'profile/:id', component: ProfileComponentComponent },
  { path: 'genre/:id', component: GenreComponent },
  { path: 'toprated', component: TopratedComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    KontaktiComponent,
    PagComponent,
    FilterPipe,
    ProfileComponentComponent,
    SafePipe,
    GenreComponent,
    CardComponent,
    TopratedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
