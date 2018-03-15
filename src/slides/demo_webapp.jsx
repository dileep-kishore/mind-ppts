/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Slide,
  List,
  SlideSet,
} from 'spectacle';

import { MyListItem, MyHeading } from './components/tags';

export default (
  <SlideSet>
    <Slide align="center flex-start">
      <MyHeading>
        Comparison metrics
      </MyHeading>
      <List>
        <MyListItem> Diversity </MyListItem>
        <MyListItem> Abundances </MyListItem>
        <MyListItem>Motifs in the network </MyListItem>
        <MyListItem> Degree distributions</MyListItem>
        <MyListItem> Connected components</MyListItem>
        <MyListItem> Metabolic modeling</MyListItem>
      </List>
    </Slide>
    <Slide align="flex-start flex-start">
      <iframe
        title="webapp"
        src="http://127.0.0.1:8050/"
        width="1400"
        height="850"
        style={{ marginLeft: '-30px', paddingLeft: '-30px' }}
      />

    </Slide>
  </SlideSet>
);
