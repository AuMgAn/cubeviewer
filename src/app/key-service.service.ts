import { Injectable } from "@angular/core";

export type KeyEvent = {
	key: string;
	shift: boolean;
};

@Injectable({
	providedIn: "root",
})
export class KeyService {
	keyPressed = "";
	keyEventBuffer: KeyEvent[] = [];

	reset() {
		this.keyPressed = "";
	}

	private keyboardEvent2KeyEvent(ev: KeyboardEvent): KeyEvent {
		return {
			key: ev.key.toLowerCase(),
			shift: ev.shiftKey,
		};
	}

	updateKeypress(event: KeyboardEvent) {
		const eventKey = this.keyboardEvent2KeyEvent(event);
		if (
			["u", "d", "f", "b", "r", "l", "m", "s", "e"].indexOf(eventKey.key, 0) !==
			-1
		) {
			this.keyPressed += eventKey.key.toUpperCase();
			if (eventKey.shift) {
				this.keyPressed += "'";
			}
			this.keyEventBuffer.push(eventKey);
		}
		let keyBuffer = "";
		// RR -> R2 ; R2R -> R' ; R'R' -> R2; R2R' -> R; RR' -> ; R'R -> ;
		for (let k = 0; k < this.keyPressed.length; k++) {
			if (k === this.keyPressed.length - 1) {
				keyBuffer += this.keyPressed[k];
				continue;
			}
			let offset = 0;
			// R'...
			if (this.keyPressed[k + 1] === "'") {
				offset++;
				if (this.keyPressed[k] === this.keyPressed[k + offset + 1]) {
					offset++;
					if (this.keyPressed[k + offset + 1] === "'") {
						// R'R' -> R2
						offset++;
						keyBuffer += `${this.keyPressed[k]}2`;
					} else {
						// R'R ->
						keyBuffer += "";
					}
				} else {
					// R'
					keyBuffer += `${this.keyPressed[k]}'`;
				}

				// R2 ...
			} else if (this.keyPressed[k + 1] === "2") {
				offset++;
				if (this.keyPressed[k + offset + 1] === this.keyPressed[k]) {
					offset++;
					if (this.keyPressed[k + offset + 1] === "'") {
						// R2R' -> R
						offset++;
						keyBuffer += this.keyPressed[k];
					} else {
						// R2R -> R'
						keyBuffer += `${this.keyPressed[k]}'`;
					}
				} else {
					// R2
					keyBuffer += `${this.keyPressed[k]}2`;
				}

				// RR ...
			} else if (this.keyPressed[k] === this.keyPressed[k + 1]) {
				offset++;
				if (this.keyPressed[k + offset + 1] === "'") {
					// RR' ->
					offset++;
					keyBuffer += "";
				} else {
					// RR -> R2
					keyBuffer += `${this.keyPressed[k]}2`;
				}

				// Rw ...
			} else if (this.keyPressed[k + 1] === "w") {
				offset++;
			} else {
				// R
				keyBuffer += this.keyPressed[k];
			}
			k += offset;
		}
		this.keyPressed = keyBuffer;
	}
}
