import { PPTXDocument } from '../src/components';
import WordRenderer from './reconciler';

function render(element) {
	const container = new PPTXDocument();
	const node = WordRenderer.createContainer(container);

	WordRenderer.updateContainer(element, node, null);

	return container;
}

export default render;
