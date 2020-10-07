import { CdkDragStart } from "@angular/cdk/drag-drop";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "IntenseRun";
  menuOpen: boolean = false;

  constructor() {}

  openSideMenu(event: CdkDragStart) {
    this.menuOpen = true;
  }
}
