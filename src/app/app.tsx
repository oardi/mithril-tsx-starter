import * as m from 'mithril';
import { HelloWorld } from './helloworld';

export class App {
	view() {
		return (
			<div>
				<HelloWorld name="Test" />
			</div>
		)
	}
}

m.mount(document.body, App);