/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Slide,
  List,
  Heading,
  SlideSet,
  Notes,
} from 'spectacle';

import { MyListItem, MyHeading } from './components/tags';

export default (
  <SlideSet>
    <Slide transition={['zoom']} align="center center">
      <Heading>
        Demonstration
      </Heading>
    </Slide>
    <Slide align="flex-start flex-start">
      <Notes>
        <h4> Slide Notes </h4>
        <ol>
          <li></li>
        </ol>
      </Notes>
      <iframe
        title="webapp"
        src="http://127.0.0.1:8050/"
        width="1400"
        height="1000"
        style={{ marginLeft: '-30px', paddingLeft: '-30px' }}
      />
    </Slide>
  </SlideSet>
);
