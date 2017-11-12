import * as m from 'mithril';
import { ClassComponent, Vnode } from 'mithril';

export interface Attrs {
	name: string;
}

export class HelloWorld implements ClassComponent<Attrs> {	
	view(vnode: Vnode<Attrs, this>) {
		return <div>Hello {vnode.attrs.name}</div>
	}
}