import * as m from 'mithril';
import { ButtonCounter } from './app/button-counter';

import './style.scss';

export class App {

	childCount: number = 0;

	onChildClicked(e: number) {
		this.childCount = e;
		console.warn(this.childCount);
	}

	view() {
		return (
			<div class="container pt-2">
				<h1>Mithril Typescript Starter Template</h1>

				<p>
					Simple Mithril Typescript TSX Template with a custom ButtonCounter Component.
      			</p>

				<ButtonCounter name="Mithril TSX" onClicked={(e) => this.onChildClicked(e)} />
			</div>
		)
	}
}

m.mount(document.body as HTMLElement, App);