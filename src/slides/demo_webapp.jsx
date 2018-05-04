/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Slide,
  List,
  ListItem,
  SlideSet,
  Notes,
} from 'spectacle';

import { MyListItem, MyHeading } from './components/tags';

export default (
  <SlideSet>
    <Slide align="center flex-start">
      <MyHeading>
        Heading
      </MyHeading>
      <List>
        <MyListItem> ListItem </MyListItem>
      </List>
    </Slide>
    <Slide align="flex-start flex-start">
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
