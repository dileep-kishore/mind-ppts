/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Slide,
  List,
  SlideSet,
  Notes,
  Image,
} from 'spectacle';

import { MyListItem, MyHeading } from './components/tags';

const mainFig = require('../images/main_fig.png');
const diversity = require('../images/otu_diversity.png');

export default (
  <SlideSet>
    <Slide align="center flex-start">
      <Notes>
        <h4> Slide Notes </h4>
        <ol>
          <li> Generate all/important combinations of the data with various methods </li>
          <li> Coefficients of a linear regression of variance </li>
          <li> This is like doing ANNOVA on the data from all combinations </li>
          <li> We want to look at which steps lead to the most variance </li>
        </ol>
      </Notes>
      <MyHeading>
        Main figure/idea
      </MyHeading>
      <Image src={mainFig} alt="main_fig" />
    </Slide>
    <Slide align="center flex-start">
      <MyHeading>
        Diversity
      </MyHeading>
      <Image src={diversity} alt="otu_diversity" />
    </Slide>
    <Slide align="center flex-start">
      <MyHeading>
        Distance Metrics
      </MyHeading>
      <List>
        <MyListItem>
          Between abundances in OTU tables
        </MyListItem>
        <MyListItem>
          Between assigned taxonomies in OTU tables
        </MyListItem>
        <MyListItem>
          Between associations in networks
        </MyListItem>
      </List>
    </Slide>
    <Slide align="center flex-start">
      <MyHeading>
        Other Figures
      </MyHeading>
      <List>
        <MyListItem>
          Rank abundance comparison
        </MyListItem>
        <MyListItem>
          Correlation between sequence similarity and abundance similarity
        </MyListItem>
        <MyListItem>
          Sequence mismatch and taxonomy mismatch
        </MyListItem>
        <MyListItem>
          A 2D embedding of the networks
        </MyListItem>
      </List>
    </Slide>
  </SlideSet>
);