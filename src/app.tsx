import * as m from 'mithril';
import { ButtonCounter } from './app/button-counter';

import './style.scss';

export class App {

	onChildClicked(e: number) {
		console.warn('callback from parent triggered', e);
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