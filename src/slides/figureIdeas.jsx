/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Slide,
  List,
  ListItem,
  SlideSet,
  Notes,
  Image,
} from 'spectacle';

import { MyListItem, MyHeading } from './components/tags';

const mainFig = require('../images/main_fig.png');

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
      <MyHeading> How do we find the best methods? </MyHeading>
      <List>
        <MyListItem> Is there a standard to compare against? </MyListItem>
        <MyListItem> Can we make synthetic data? </MyListItem>
        <MyListItem> What metrics can we use for comparisons? </MyListItem>
        <List padding="0 50px">
          <ListItem> Diversity </ListItem>
          <ListItem> Abundances </ListItem>
          <ListItem> Degree distributions</ListItem>
          <ListItem> Motifs or connected components in the network </ListItem>
          <ListItem> Metabolic models  </ListItem>
        </List>
      </List>
    </Slide>
    <Slide align="center flex-start">
      <Notes>
        <h4> Slide Notes </h4>
        <ol>
          <li>
            An important point to keep in mind is that the whole point of this is
            to get develop a pipeline for the database
          </li>
          <li> Ask people for suggestions </li>
        </ol>
      </Notes>
      <MyHeading> What can we do then? </MyHeading>
      <List>
        <MyListItem> Identify parts of the pipeline that are most crucial </MyListItem>
        <MyListItem> Show how data/errors propagate through the pipeline </MyListItem>
        <MyListItem>
          Identify downstream steps that make choices in upstream steps inconsequential
        </MyListItem>
      </List>
    </Slide>
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
      <Notes>
        <h4> Slide Notes </h4>
        <ol>
          <li>
          Figure 1: Variation due to different steps of the pipeline as a bar chart. These can be coefficients from a linear regression in the space of the variance?
          </li>
          <li>
          Figure 2: Diversity, Rank abundance, Pairwise correlations after the denoising step
          </li>
          <li>
          Figure 3: Sequence similarity, sequence mismatch in taxonomy, abundance similarity at the taxonomy assignment step
          </li>
          <li>
          Figure 4: Edge overlaps, Degree distribution and some other metrics after the network step
          </li>
          <li>
          Figure 5: Comparing to a network manually curated from literature (Vaginal microbiome might be the best system because it has the fewest number of species)
          </li>
        </ol>
      </Notes>
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