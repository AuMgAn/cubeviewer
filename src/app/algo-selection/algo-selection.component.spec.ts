import { type ComponentFixture, TestBed } from "@angular/core/testing";

import { AlgoSelectionComponent } from "./algo-selection.component";

describe("AlgoSelectionComponent", () => {
	let component: AlgoSelectionComponent;
	let fixture: ComponentFixture<AlgoSelectionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AlgoSelectionComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AlgoSelectionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
