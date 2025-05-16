import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {
	MatDialog,
	MatDialogActions,
	MatDialogClose,
	MatDialogContent,
	MatDialogRef,
	MatDialogTitle,
} from "@angular/material/dialog";

import { type AlgoData, AlgorithmsService } from "../algorithms.service";

/**
 * @title Dialog Animations
 */
@Component({
	selector: "algo-selector",
	styleUrl: "algo-selection.scss",
	templateUrl: "algo-selection.html",
	imports: [MatButtonModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsExample {
	readonly dialog = inject(MatDialog);

	openDialog(
		enterAnimationDuration: string,
		exitAnimationDuration: string,
	): void {
		this.dialog.open(DialogAnimationsExampleDialog, {
			width: "250px",
			enterAnimationDuration,
			exitAnimationDuration,
		});
	}
}

@Component({
	selector: "algo-selector-dialog",
	styleUrl: "algo-selection.scss",
	templateUrl: "algo-selection-dialog.html",
	imports: [
		MatButtonModule,
		MatDialogActions,
		MatDialogClose,
		MatDialogTitle,
		MatDialogContent,
		CommonModule,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsExampleDialog {
	readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
	algoSerive: AlgorithmsService = inject(AlgorithmsService);
}
