import officegen from 'officegen';

// This creates the document instance
class PPTXDocument {
	constructor() {
		this.pptx = officegen('pptx');
	}
}

export default PPTXDocument;
