/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import {
  Slide,
  SlideSet,
  Heading,
  Notes,
} from 'spectacle';

export default (
  <SlideSet>
    <Slide transition={['zoom']} align="center center">
      <Heading>
        Demonstration
      </Heading>
    </Slide>
    <Slide align="flex-start flex-start" >
      <Notes>
        <h4> Slide Notes </h4>
        <ol>
          <li> Example1: Compare Oral and Stool </li>
          <li> Example2: Compare published data with correlation </li>
          <li> Example3: Show node query and level-up </li>
          <li> How can we improve the UI? </li>
          <li> What other use-cases can you imagine? </li>
        </ol>
      </Notes>
      <iframe
        title="MIND"
        src="http://microbialnet.org/v0.92.html"
        width="1400"
        height="1000"
        style={{ marginLeft: '-30px', paddingLeft: '-30px' }}
      />
    </Slide>
  </SlideSet>
);
