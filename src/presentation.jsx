/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import slides
import Introduction from './slides/introduction';
import Goals from './slides/goals';
import demoWebsite from './slides/demo_website';
import Methods from './slides/methods';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: 'red',
  },
  {
    primary: 'Delicious',
    secondary: 'Pompiere',
  },
);

function Presentation() {
  return (
    <Deck
      transition={['slide', 'fade']}
      transitionDuration={500}
      theme={theme}
      // progress="bar"
      contentWidth={1250}
    >
      <Slide bgColor="tertiary">
        <Heading size={1} caps lineHeight={1} textColor="secondary" textFont="secondary" >
          The Microbial Interaction Database
        </Heading>
        <Text margin="10px 0 0" textColor="primary" size={5}>
          Dileep Kishore
        </Text>
      </Slide>
      {Introduction}
      {Goals}
      {demoWebsite}
      {Methods}
      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote> Thank you! </Quote>
        </BlockQuote>
      </Slide>
    </Deck>
  );
}

export default Presentation;
