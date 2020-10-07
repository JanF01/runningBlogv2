import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ArticleComponent } from "./article/article.component";

@NgModule({
  declarations: [AppComponent, ArticleComponent],
  imports: [BrowserModule, AppRoutingModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
