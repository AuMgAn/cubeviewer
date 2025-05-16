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

	constructor() {
		// biome-ignore lint/suspicious/noExplicitAny: disabled until finding viable workaround
		const anyOll: any = ollData;
		// biome-ignore lint/suspicious/noExplicitAny: disabled until finding viable workaround
		const anyPll: any = pllData;
		this.oll = anyOll.default;
		this.pll = anyPll.default;
	}
}
