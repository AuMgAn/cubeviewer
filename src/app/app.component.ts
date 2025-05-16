import { CommonModule } from "@angular/common";
import { Component, Inject, type OnInit, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DialogAnimationsExample } from "./algo-selection/algo-selection.component";
import { type AlgoData, AlgorithmsService } from "./algorithms.service";
import { type KeyEvent, KeyService } from "./key-service.service";
import { ViewerComponent } from "./viewer/viewer.component";

@Component({
	selector: "app-root",
	imports: [
		CommonModule,
		ViewerComponent,
		FormsModule,
		DialogAnimationsExample,
	],
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
	selectedAlgo: AlgoData | undefined = undefined;

	ngOnInit(): void {
		this.setAlgorithm();
	}

	updateFace(newFace: string) {
		this.face = newFace;
	}

	setAlgorithm() {
		this.algorithm = KeyService.Algo2KeyEvents(this.rawAlgorithm);
	}

	openDialog() {
		console.log("click");
	}
}
