class Slide {
	constructor(root, props) {
		this.root = root;
		this.props = props;

		this.slideInstance = this.root.pptx.makeNewSlide();
	}

	appendChild(child) {
		// Platform specific API for appending child nodes
    // Note: This will vary in different host environments. For example - In browser, you might use document.appendChild(child)
		if (child.type === 'TEXT') {
			// render the text node
      this.slideInstance.addText(child.content);
		}
	}
}

export default Slide;
