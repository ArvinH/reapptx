import { PPTXDocument } from '../src/components';
import PPTXRenderer from './reconciler';

function render(element) {
	const container = new PPTXDocument();
	const node = PPTXRenderer.createContainer(container);

	PPTXRenderer.updateContainer(element, node, null);

	return container;
}

export default render;
