import * as m from 'mithril';
import { MithrilTsxComponent } from 'mithril-tsx-component'

type Vnode = m.Vnode<IAttrs, ButtonCounter>
type VnodeDOM = m.VnodeDOM<IAttrs, ButtonCounter>

export interface IAttrs {
	name: string;
	onClicked: (e: number) => void;
}

export class ButtonCounter extends MithrilTsxComponent<IAttrs> {
	count: number = 0;

	oncreate(v: VnodeDOM) {
		console.warn('oncreate', v);
	}

	handleClick(onclickedHandler: Function) {
		this.count++;
		onclickedHandler(this.count);
	}

	view(vnode: Vnode) {
		return (
			<button onclick={() => this.handleClick(vnode.attrs.onClicked)} class="btn btn-outline-secondary">
				{vnode.attrs.name} - You clicked me {this.count} times
    		</button>
		);
	}
}