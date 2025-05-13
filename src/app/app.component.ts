import { CommonModule } from "@angular/common";
import { Component, type OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ViewerComponent } from "./viewer/viewer.component";

import { type KeyEvent, KeyService } from "./key-service.service";

@Component({
	selector: "app-root",
	imports: [CommonModule, ViewerComponent, FormsModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
	title = "cubeviewer";
	sides = [2, 3]; //, 4, 5, 6, 7, 8];
	colors = ["green", "blue", "white", "yellow", "red", "orange"];
	selectedSide = 3;
	face = "green";
	speed = 0.1;
	rawAlgorithm = "R2U'RU'RUR'UR2UD'RU'R'D";
	algorithm: KeyEvent[] = [];

	ngOnInit(): void {
		this.setAlgorithm();
	}

	updateFace(newFace: string) {
		this.face = newFace;
	}

	setAlgorithm() {
		this.algorithm = KeyService.Algo2KeyEvents(this.rawAlgorithm);
	}
}
