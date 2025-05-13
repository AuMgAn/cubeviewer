import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ViewerComponent } from "./viewer/viewer.component";

@Component({
	selector: "app-root",
	imports: [CommonModule, ViewerComponent, FormsModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "cubeviewer";
	sides = [2, 3]; //, 4, 5, 6, 7, 8];
	colors = ["green", "blue", "white", "yellow", "red", "orange"];
	selectedSide = 3;
	face = "green";
	speed = 0.1;
	algorithm = "";

	updateFace(newFace: string) {
		this.face = newFace;
	}
}
