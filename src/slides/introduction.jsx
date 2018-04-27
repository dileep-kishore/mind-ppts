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
    <Slide align="center flex-start" >
      <Notes>
        <h4> Slide Notes </h4>
        <ol>
          <li> Talk about which data sources we have and what we want to incorporate</li>
          <li> Which experimental data-sets so far? </li>
        </ol>
      </Notes>
      <MyHeading>
        Introduction
      </MyHeading>
      <List>
        <MyListItem>
          A comprehensive database of microbial interactions from different data sources
        </MyListItem>
        <MyListItem>
          A platform for users to compare, analyze and visualize their data
        </MyListItem>
        <MyListItem>
          Data population has started with associations derived from 16S data
          and literature
        </MyListItem>
      </List>
    </Slide>
    <Slide align="center flex-start" >
      <Notes>
        <h4> Slide Notes </h4>
        <ol>
          <li> Some terminology that would be helpful in understanding my presentation </li>
        </ol>
      </Notes>
      <MyHeading>
        Terminology
      </MyHeading>
      <List>
        <MyListItem>
          <b>Operational Taxonomic Units:</b> Clusters of micro-organisms grouped by DNA sequence similarity in the 16S region
        </MyListItem>
        <MyListItem>
          <b>Co-occurrence Networks:</b> Networks obtained from the associations inferred in 16S rDNA samples from various environments
        </MyListItem>
        <MyListItem>
          <b>Exact Sequence Variants:</b> Amplicon sequence variants (ASVs) that are resolved exactly, down to the level of single-nucleotide differences over the sequenced gene region.
        </MyListItem>
      </List>
    </Slide>
  </SlideSet>
);
