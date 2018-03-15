/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import {
  Slide,
  Image,
  SlideSet,
  Heading,
  List,
  ListItem,
} from 'spectacle';

import { MyListItem } from './components/tags';

const img = require('../images/logo.svg');

export default (
  <SlideSet>
    <Slide align="center flex-start">
      <Heading size={2} caps margin="20px 0 0 0" textFont="secondary">
        Goals
      </Heading>
      <Image src={img} alt="Logo" />
    </Slide>
    <Slide align="center flex-start">
      <Heading size={2} caps margin="20px 0 0 0" textFont="secondary">
        Goals
      </Heading>
      <List>
        <MyListItem>
          <u>Data collection:</u>
          <List padding="0 50px">
            <ListItem>
            Collect 16S rDNA sequence data from publications and databases
            </ListItem>
            <ListItem>
              Human Microbiome Project, American Gut, RISK cohort etc...
            </ListItem>
          </List>
        </MyListItem>
        <MyListItem>
          <u>User data analysis</u>
          <List padding="0 50px">
            <ListItem>
            Provide access to a pipeline for 16S data analysis
            </ListItem>
            <ListItem>
            Data is processed using a standardized pipeline and parameters
            </ListItem>
          </List>
        </MyListItem>
        <MyListItem>
          <u>Data exploration</u>
          <List padding="0 50px">
            <ListItem>
            Disease vs. Healthy microbiome
            </ListItem>
            <ListItem>
            Identify core or differential microbiota
            </ListItem>
            <ListItem>
            Query microbial interactions by taxa level or based on environment or across
            </ListItem>
          </List>
        </MyListItem>
      </List>
    </Slide>
  </SlideSet>
);
