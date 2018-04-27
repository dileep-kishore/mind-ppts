/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import {
  Slide,
  Image,
  SlideSet,
  Heading,
  List,
  ListItem,
  Notes,
} from 'spectacle';

import { MyListItem } from './components/tags';

const img = require('../images/logo.svg');

export default (
  <SlideSet>
    <Slide align="center flex-start">
      <Notes>
        <h4> Slide Notes </h4>
        <ol>
          <li> Obtain data from databases and publications </li>
          <li> Denoising and/or clustering </li>
          <li> Taxonomy assignment using a reference database </li>
          <li> OTU/ESV processing </li>
          <li> Network Inference </li>
        </ol>
      </Notes>
      <Heading size={2} caps margin="20px 0 0 0" textFont="secondary">
        Goals
      </Heading>
      <Image
        src={img}
        alt="Logo"
        style={{ paddingTop: '10px', height: '800px' }}
      />
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
            Collect 16S rDNA sequence data
            </ListItem>
            <ListItem>
              Human Microbiome Project, American Gut, etc...
            </ListItem>
          </List>
        </MyListItem>
        <MyListItem>
          <u>User data processing</u>
          <List padding="0 50px">
            <ListItem>
            Provide access to a pipeline for 16S data analysis
            </ListItem>
            <ListItem>
            Data stored in the database is processed using the same standardized pipeline
            and parameters
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
            <ListItem>
            Allow the user to compare his network with networks with matching metadata
            </ListItem>
          </List>
        </MyListItem>
      </List>
    </Slide>
  </SlideSet>
);
