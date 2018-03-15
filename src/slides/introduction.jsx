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
    <Slide align="center flex-start" >
      <MyHeading>
        Introduction
      </MyHeading>
      <List>
        <MyListItem>
          A comprehensive database of microbial interactions from different data sources
        </MyListItem>
        <MyListItem>
          A platform for users to analyze and visualize their data
        </MyListItem>
        <MyListItem>
          Data population has started with 16S rDNA sequence data
        </MyListItem>
      </List>
    </Slide>
    <Slide align="center flex-start" >
      <MyHeading>
        Terminology
      </MyHeading>
      <List>
        <MyListItem>
          <b>Operational Taxonomic Units:</b> Clusters of micro-organisms grouped by DNA sequence similarity usually in the 16S region
        </MyListItem>
        <MyListItem>
          <b>Co-occurrence Networks:</b> Networks obtained from correlation matrices of 16S rDNA samples from various environments
        </MyListItem>
        <MyListItem>
          <b>Exact Sequence Variants:</b> Amplicon sequence variants (ASVs) that are resolved exactly, down to the level of single-nucleotide differences over the sequenced gene region.
        </MyListItem>
      </List>
    </Slide>
  </SlideSet>
);
