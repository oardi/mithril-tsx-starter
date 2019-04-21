import * as m from 'mithril';
import { Vnode } from 'mithril';
import { MithrilTsxComponent } from 'mithril-tsx-component'

export interface Attrs {
	name: string;
}

export class HelloWorld extends MithrilTsxComponent<Attrs> {	
	view(vnode: Vnode<Attrs, this>) {
		return <div>Hello {vnode.attrs.name}</div>
	}
}