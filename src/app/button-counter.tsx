import * as m from 'mithril';
import { Vnode } from 'mithril';
import { MithrilTsxComponent } from 'mithril-tsx-component'

export interface Attrs {
	name: string;
	onClicked: (e: number) => void;
}

export class ButtonCounter extends MithrilTsxComponent<Attrs> {
	count: number = 0;

	handleClick(onclickedHandler: Function){
		this.count++;
		onclickedHandler(this.count);
	}

	view(vnode: Vnode<Attrs, this>) {
		return (
			<button onclick={() => this.handleClick(vnode.attrs.onClicked)} class="btn btn-outline-secondary">
				You clicked me {this.count} times
    		</button>
		);
	}
}