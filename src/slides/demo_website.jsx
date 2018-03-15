/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import {
  Slide,
  SlideSet,
  Heading,
} from 'spectacle';

export default (
  <SlideSet>
    <Slide transition={['zoom']} align="center center">
      <Heading>
        Demonstration
      </Heading>
    </Slide>
    <Slide transition={['zoom']} align="flex-start flex-start" >
      <iframe
        title="MIND"
        src="http://microbialnet.org/v0.9.html"
        width="1400"
        height="850"
      />
    </Slide>
  </SlideSet>
);
