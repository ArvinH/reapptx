import React, { Component } from 'react';

import { Text, Slide, render } from '../src';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Slide>
					<Text>Slide 1</Text>
				</Slide>
				<Slide>
					<Text>Slide 2</Text>
				</Slide>
			</React.Fragment>
		);
	}
}

// This will create a file 'text.docx' in the current directory!
render(<App />, `${__dirname}/text.pptx`);
