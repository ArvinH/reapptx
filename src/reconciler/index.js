import { Text, Slide, PPTXDocument } from "../components";

const Reconciler = require("react-reconciler");

const hostConfig = {
  appendInitialChild(parentInstance, child) {
    if (parentInstance.appendChild) {
      parentInstance.appendChild(child);
    }
  },

  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    const COMPONENTS = {
      ROOT: () => new PPTXDocument(),
      TEXT: () => new Text(rootContainerInstance, props),
      SLIDE: () => new Slide(rootContainerInstance, props),
      default: undefined
    };

    return COMPONENTS[type]() || COMPONENTS.default;
  },

  getRootHostContext(instance) {
    return {};
	},

	getChildHostContext(parentHostContext, type, rootContainerInstance) {
    return {};
  },

  shouldSetTextContent(type, props) {
    return false;
  },

  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    return text;
  },

  finalizeInitialChildren(
    parentInstance,
    type,
    props,
    rootContainerInstance,
    hostContext
  ) {
    return false;
  },

  getPublicInstance(inst) {
    return inst;
  },

  prepareForCommit(rootcontainerInfo) {
    // noop
  },

  resetAfterCommit(rootcontainerInfo) {
    // noop
  },

  appendChildToContainer(container, child) {
		// noop
  },

  removeChildFromContainer(container, child) {
    // noop
  },

  now: () => {},

  supportsMutation: true
};
const PPTXRenderer = Reconciler(hostConfig);

export default PPTXRenderer;
