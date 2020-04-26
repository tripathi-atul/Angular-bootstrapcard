import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTileComponent } from './card-tile/card-tile.component';
import { CardListComponent } from './card-list/card-list.component';
import { TruncatePipe } from './truncate.pipe';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTileComponent,
    CardListComponent,
    TruncatePipe,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TruncatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
