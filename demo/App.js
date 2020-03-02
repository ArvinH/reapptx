import React, { Component } from 'react';

import { Text, Slide, render } from '../src';

const App = () => (
	<React.Fragment>
		<Slide>
			<Text>Slide 1 😁 😁</Text>
		</Slide>
		<Slide>
			<Text>Slide 2 😍 😍</Text>
		</Slide>
	</React.Fragment>
);

// generate 'text.pptx' in the __dirname!
render(<App />, `${__dirname}/text.pptx`);
