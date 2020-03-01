import { Text, Slide, PPTXDocument } from '../components';

const Reconciler = require('react-reconciler');
let ROOT_NODE_INSTANCE = null;

const hostConfig = {
	appendInitialChild(parentInstance, child) {
		if (parentInstance.appendChild) {
			parentInstance.appendChild(child);
		}
	},

	createInstance(type, props, internalInstanceHandle) {
		const COMPONENTS = {
			ROOT: () => new PPTXDocument(),
			TEXT: () => new Text(ROOT_NODE_INSTANCE, props),
			SLIDE: () => new Slide(ROOT_NODE_INSTANCE, props),
			default: undefined,
		};
	
		return COMPONENTS[type]() || COMPONENTS.default;
	},

	createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
		return text;
	},

	finalizeInitialChildren(wordElement, type, props) {
		return false;
	},

	getPublicInstance(inst) {
		return inst;
	},

	prepareForCommit() {
		// noop
	},

	prepareUpdate(wordElement, type, oldProps, newProps) {
		return true;
	},

	resetAfterCommit() {
		// noop
	},

	resetTextContent(wordElement) {
		// noop
	},

	appendChildToContainer() {
		// noop
	},

	removeChildFromContainer() {
		// noop
	},

	getRootHostContext(instance) {
		if (typeof instance !== undefined) {
			return (ROOT_NODE_INSTANCE = instance);
		} else {
			console.warn(`${instance} is not an instance of officegen docx constructor.`);
	
			return (ROOT_NODE_INSTANCE = new PPTXDocument());
		}
	},

	getChildHostContext(instance) {
		// return emptyObject;
	},

	shouldSetTextContent(type, props) {
		return false;
	},

	now: () => {},

	useSyncScheduling: true,

	supportsMutation: true,
};
const PPTXRenderer = Reconciler(hostConfig);

export default PPTXRenderer;
