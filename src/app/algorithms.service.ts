import { Injectable } from "@angular/core";
import * as ollData from "../../public/oll.json";
import * as pllData from "../../public/pll.json";

export type AlgoData = { name: string; algo: string; pic: string };

@Injectable({
	providedIn: "root",
})
export class AlgorithmsService {
	oll: AlgoData[];
	pll: AlgoData[];
	selectedAlgo: AlgoData | undefined;

	constructor() {
		// biome-ignore lint/suspicious/noExplicitAny: disabled until finding viable workaround
		const anyOll: any = ollData;
		// biome-ignore lint/suspicious/noExplicitAny: disabled until finding viable workaround
		const anyPll: any = pllData;
		this.oll = anyOll.default;
		this.pll = anyPll.default;
		this.oll.sort((a, b) => {
			return Number.parseInt(a.name) - Number.parseInt(b.name);
		});
	}

	getAllNames(): string[] {
		const nameBuffer: string[] = [];
		for (const alg of this.oll) {
			nameBuffer.push(alg.name);
		}
		for (const alg of this.pll) {
			nameBuffer.push(alg.name);
		}

		return nameBuffer;
	}

	setSelected(alg: string) {
		let newSelected = this.oll.find((element) => {
			return element.name === alg;
		});
		if (!newSelected) {
			newSelected = this.pll.find((element) => {
				return element.name === alg;
			});
		}
		if (!newSelected) {
			throw new Error("Unreachable");
		}
		this.selectedAlgo = newSelected;
	}
}
