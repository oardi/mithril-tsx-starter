import * as m from 'mithril';
import { HelloWorld } from './app/helloworld';

import './style.scss';

export class App {
	view() {
		return (
			<div class="container pt-2">
				<h1>Mithril Typescript Starter Template</h1>

				<div class="card">
					<div class="card-body">
						<HelloWorld name="Mithril TSX" />
					</div>
				</div>
			</div>
		)
	}
}

m.mount(document.body as HTMLElement, App);