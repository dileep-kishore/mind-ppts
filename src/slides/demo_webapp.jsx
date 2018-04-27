/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Slide,
  List,
  SlideSet,
  Notes,
} from 'spectacle';

import { MyListItem, MyHeading } from './components/tags';

export default (
  <SlideSet>
    <Slide align="center flex-start">
      <Notes>
        <h4> Slide Notes </h4>
        <ol>
          <li> I would like your input on how best to describe the various levels of data </li>
          <li> Might restrict the modeling to the database paper </li>
        </ol>
      </Notes>
      <MyHeading>
        Comparison metrics
      </MyHeading>
      <List>
        <MyListItem> Diversity </MyListItem>
        <MyListItem> Abundances </MyListItem>
        <MyListItem> Degree distributions</MyListItem>
        <MyListItem> Motifs or connected components in the network </MyListItem>
        <MyListItem> Metabolic models  </MyListItem>
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
