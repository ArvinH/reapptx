import fs from 'fs';
import path from 'path';
import PPTXRenderer from '../reconciler';
import { PPTXDocument } from '../components'

// Render component
async function render(component, filePath) {
	// Create root container instance
	const container = new PPTXDocument();

	// Returns the current fiber (flushed fiber)
	const node = PPTXRenderer.createContainer(container);

	// Schedules a top level update with current fiber and a priority level (depending upon the context)
	PPTXRenderer.updateContainer(component, node, null);

	// PPTXRenderer.injectIntoDevTools({
	//   bundleType: 1,
	//   version: '0.1.0',
	//   rendererPackageName: 'custom-renderer',
	//   findHostInstanceByFiber: PTTXRenderer.findHostInstance
	// })

	// Officegen generates a output stream and not a file
	const stream = fs.createWriteStream(filePath);

	await new Promise((resolve, reject) => {
		// Generate a pptx document
		container.pptx.generate(stream, Events(filePath, resolve, reject));
	});
}

// Handle docx events (optional)
function Events(filePath, resolve, reject) {
	return {
		finalize: () => {
			console.log(`✨  Word document created at ${path.resolve(filePath)}.`);
			resolve();
		},
		error: () => {
			console.log('An error occurred while generating the document.');
			reject();
		},
	};
}

export default render;
