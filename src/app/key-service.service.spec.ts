import { TestBed } from "@angular/core/testing";

import { KeyServiceService } from "./key-service.service";

describe("KeyServiceService", () => {
	let service: KeyServiceService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(KeyServiceService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
