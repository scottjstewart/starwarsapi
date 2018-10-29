import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { FormsModule } from "@angular/forms";
import { SearchComponent } from './search/search.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeroesComponent, SearchComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
