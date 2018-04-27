/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import {
  Slide,
  List,
  ListItem,
  SlideSet,
  Image,
  S,
  Text,
} from 'spectacle';
import { css } from 'emotion';
import { MyHeading, MyListItem } from './components/tags';

const flexgrid = css`
  display: flex;

  img {
    margin-top: 50px;
    padding-right: 10px;
    border-right: dashed grey;
  }
`;

const samples = require('../images/2_samples.svg');
const clustering = require('../images/3_clusteringOTUs.svg');
const alignment = require('../images/4_alignmenttodatabases.svg');
const associations = require('../images/7_pairwisecorrelation.svg');
const pipeline = require('../images/mind_pipeline_updated.svg');

const processing = 'http://journals.plos.org/ploscompbiol/article/figure/image?size=large&id=10.1371/journal.pcbi.1003531.g001';

const Method = ({ className, children, image, header, height = "50%", width = "50%" }) => (
  <div className={className}>
    <S type="underline" textFont="secondary" textSize={50} >{header}</S>
    <div className={flexgrid}>
      <Image
        src={image}
        alt="method"
        height={height}
        width={width}
        padding="0 0"
        style={{ marginLeft: '0px', marginRight: '30px' }}
      />
      {children}
    </div>
  </div>
);

const Sampling = (
  <Slide align="flex-start flex-start">
    <MyHeading>
      Methods
    </MyHeading>
    <Method header="Sequencing method" image={samples}>
      <List margin="20 0">
        <ListItem> 454 vs. illumina </ListItem>
        <ListItem> Different sequencing depths </ListItem>
        <ListItem> Different pre-processing </ListItem>
        <ListItem> Different quality filtering </ListItem>
      </List>
    </Method>
  </Slide>
);

const Clustering = (
  <Slide align="flex-start flex-start">
    <MyHeading>
      Methods
    </MyHeading>
    <Method header="Clustering method" image={clustering} height="500px">
      <List margin="20 0">
        <ListItem> Closed reference </ListItem>
        <ListItem> Open reference </ListItem>
        <ListItem> De novo reference </ListItem>
        <ListItem> Error modeling </ListItem>
      </List>
    </Method>
  </Slide>
);

const Alignment = (
  <Slide align="flex-start flex-start">
    <MyHeading>
      Methods
    </MyHeading>
    <Method header="Alignment method" image={alignment} height="400px" >
      <List margin="20 0">
        <ListItem> Greengenes </ListItem>
        <ListItem> Silva </ListItem>
        <ListItem> RDP </ListItem>
      </List>
    </Method>
  </Slide>
);

const Processing = (
  <Slide align="flex-start flex-start">
    <MyHeading>
      Methods
    </MyHeading>
    <Method header="Processing method" image={processing}>
      <List margin="20 0">
        <ListItem> Normalization </ListItem>
        <ListItem> Rarefying </ListItem>
        <ListItem> Mixture models </ListItem>
        <ListItem> Removing sparse data </ListItem>
      </List>
    </Method>
  </Slide>
);

const Associations = (
  <Slide align="flex-start flex-start">
    <MyHeading>
      Methods
    </MyHeading>
    <Method header="Calculating associations" image={associations} height="5oopx">
      <List margin="20 0">
        <ListItem> Compositionality </ListItem>
        <ListItem> Sparsity </ListItem>
        <ListItem>
          Pairwise associations
          <List padding="0 50px">
            <ListItem> Pearson </ListItem>
            <ListItem> Spearman </ListItem>
            <ListItem> SparCC </ListItem>
          </List>
        </ListItem>
        <ListItem>
          Direct associations
          <List padding="0 50px">
            <ListItem> SpiecEasi </ListItem>
            <ListItem> CCLasso </ListItem>
            <ListItem> mLDM </ListItem>
          </List>
        </ListItem>
      </List>
    </Method>
  </Slide>
);


export default (
  <SlideSet>
    {Sampling}
    {Clustering}
    {Alignment}
    {Processing}
    {Associations}
    <Slide align="center flex-start">
      <MyHeading>
        Pipeline
      </MyHeading>
      <List>
        <MyListItem>
          Develop a standard pipeline - identify tools and good parameters
        </MyListItem>
        <MyListItem>
          Create a set of guidelines using a decision tree
        </MyListItem>
        <MyListItem>
          A consensus network created using a weighted voting scheme
        </MyListItem>
      </List>
    </Slide>
    <Slide align="center flex-start">
      <Image
        src={pipeline}
        alt="pipeline"
        style={{ height: '925' }}
      />
    </Slide>
  </SlideSet>
);
