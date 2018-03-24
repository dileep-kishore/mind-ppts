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
    <Slide align="flex-start flex-start" >
      <iframe
        title="MIND"
        src="http://microbialnet.org/v0.91.html"
        width="1400"
        height="850"
        style={{ marginLeft: '-30px', paddingLeft: '-30px' }}
      />
    </Slide>
  </SlideSet>
);
