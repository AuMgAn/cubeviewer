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
		this.keyEventBuffer = [];
	}

	isEmpty(): boolean {
		return this.keyEventBuffer.length === 0;
	}

	pop(): KeyEvent | undefined {
		if (this.isEmpty()) {
			return undefined;
		}
		const value = this.keyEventBuffer[0];
		this.keyEventBuffer.splice(0, 1);
		return value;
	}

	private keyboardEvent2KeyEvent(ev: KeyboardEvent): KeyEvent {
		return {
			key: ev.key.toLowerCase(),
			shift: ev.shiftKey,
		};
	}

	updateKeypress(event: KeyboardEvent) {
		const eventKey = this.keyboardEvent2KeyEvent(event);
		this.keyPressed += eventKey.key.toUpperCase();
		if (eventKey.shift) {
			this.keyPressed += "'";
		}
		this.keyEventBuffer.push(eventKey);
		this.formatKeys();
	}

	private formatKeys() {
		let keyBuffer = "";
		// RR -> R2 ; R2R -> R' ; R'R' -> R2; R2R' -> R; RR' -> ; R'R -> ;
		for (let k = 0; k < this.keyPressed.length; k++) {
			if (k === this.keyPressed.length - 1) {
				keyBuffer += this.keyPressed[k];
				break;
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

	static Algo2KeyEvents(algo: string): KeyEvent[] {
		const keyEventBuffer: KeyEvent[] = [];
		for (let i = 0; i < algo.length; i++) {
			if (i === algo.length - 1) {
				keyEventBuffer.push({
					key: algo[i].toLowerCase(),
					shift: false,
				});
				break;
			}

			if (algo[i + 1] === "'") {
				keyEventBuffer.push({
					key: algo[i].toLowerCase(),
					shift: true,
				});
				i++;
			} else if (algo[i + 1] === "2") {
				keyEventBuffer.push({
					key: algo[i].toLowerCase(),
					shift: false,
				});
				keyEventBuffer.push({
					key: algo[i].toLowerCase(),
					shift: false,
				});
				i++;
			} else if (algo[i] !== " ") {
				keyEventBuffer.push({
					key: algo[i].toLowerCase(),
					shift: false,
				});
			}
		}

		return keyEventBuffer;
	}
}
