/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import {
  Slide,
  Text,
  SlideSet,
  Image,
  Notes,
} from 'spectacle';

import { MyHeading } from './components/tags';
import Network from './components/network';

// Importing networks
import salivaNetwork from '../data/network/saliva_network.json';
import stoolNetwork from '../data/network/stool_network.json';
import sparccNet from '../data/network/Stool_SparCC_net.json';
import pearsonNet from '../data/network/Stool_pearson_net.json';
import spearmanNet from '../data/network/Stool_spearman_net.json';
import spieceasiNet from '../data/network/Stool_SpiecEasi_net.json';

import closedrefNet from '../data/network/closedref.json';
import openrefNet from '../data/network/openref.json';
import denovoNet from '../data/network/denovo.json';
import dada2Net from '../data/network/dada2.json';

// const literature = require('../images/network_comp_paper.png');
const allDenoise = require('../images/all_denoise.png');
const allDenoiseCommon = require('../images/all_denoise_common.png');
const l1Denoise = require('../images/l1_denoise.png');
const degDenoise = require('../images/deg_denoise.png');
const overlapDenoise = require('../images/overlap_denoise.png');
// const circularNetwork = require('../images/circular_network.png');
const diversity = require('../images/gabriel/diversity_comparison.png');
const rankAbund = require('../images/gabriel/rank_abundances_ref_closedref.png');
const denovoOpenrefCorr = require('../images/gabriel/denovo-openref_correlation.png');
const dada2DenovoCorr = require('../images/gabriel/dada2-denovo_correlation.png');


const netInferenceArr = [
  { name: 'Pearson', data: pearsonNet },
  { name: 'Spearman', data: spearmanNet },
  { name: 'SparCC', data: sparccNet },
  { name: 'SpiecEasi', data: spieceasiNet },
];

const denoiseArr = [
  { name: 'Closed Reference', data: closedrefNet },
  { name: 'Open Reference', data: openrefNet },
  { name: 'Denovo', data: denovoNet },
  { name: 'Dada2', data: dada2Net },
];

export default (
  <SlideSet>
    <Slide align="center flex-start" >
      <MyHeading>
        Networks
      </MyHeading>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <Network data={salivaNetwork} />
          <Text> Saliva Network </Text>
        </div>
        <div>
          <Network data={stoolNetwork} />
          <Text> Stool Network </Text>
        </div>
      </div>
    </Slide>
    <Slide align="center flex-start">
      <Notes>
        <h4> Slide Notes </h4>
        <ol>
          <li>
            Show Dialister and Phascolactobaterium. This makes me think that we should look at
            connected components
          </li>
        </ol>
      </Notes>
      <MyHeading>
        Network inference methods
      </MyHeading>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {
          netInferenceArr.map(d => (
            <div style={{
              position: 'relative',
              alignContent: 'center',
              margin: 'auto',
              border: '1px dashed gray',
              borderRadius: '5px',
            }}>
              <Network data={d.data} height={350} width={400} radius={7} radiusMargin={13} />
              <Text
                style={{ position: 'absolute', bottom: '5%', left: '35%' }}
                textSize={22}
                textColor="blue"
              >
                {d.name}
              </Text>
            </div>
          ))
        }
      </div>
    </Slide>
    <Slide align="center flex-start">
      <MyHeading>
        Denosing/clustering methods
      </MyHeading>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {
          denoiseArr.map(d => (
            <div style={{
              position: 'relative',
              alignContent: 'center',
              margin: 'auto',
              border: '1px dashed gray',
              borderRadius: '5px',
            }}>
              <Network data={d.data} height={350} width={400} radius={7} radiusMargin={13} />
              <Text
                style={{ position: 'absolute', bottom: '5%', left: '35%' }}
                textSize={22}
                textColor="blue"
              >
                {d.name}
              </Text>
            </div>
          ))
        }
      </div>
    </Slide>
    <Slide align="center flex-start">
      <MyHeading>
        Denosing/clustering methods
      </MyHeading>
      <Image src={allDenoise} alt="all_denoise" />
    </Slide>
    <Slide align="center flex-start">
        <Notes>
          <h4> Slide Notes </h4>
          <ol>
            I checked for all edges with 3 overlaps and did find that dada2 was
            usually the odd one out
          </ol>
        </Notes>
      <MyHeading>
        Denosing/clustering methods
      </MyHeading>
      <Image src={allDenoiseCommon} alt="all_denoise_common" />
    </Slide>
    <Slide align="center flex-start">
      <MyHeading>
        Diversity
      </MyHeading>
      <Image src={diversity} alt="otu_diversity" />
    </Slide>
    <Slide align="center flex-start">
      <MyHeading>
        Rank abundance
      </MyHeading>
      <Image src={rankAbund} alt="rankAbund" />
    </Slide>
    <Slide align="center flex-start">
      <MyHeading>
        Abundance correlation on common taxa
      </MyHeading>
      <div style={{ display: 'flex' }} >
        <Image src={denovoOpenrefCorr} alt="denovoOpenrefCorr" height="500" width="700" />
        <Image src={dada2DenovoCorr} alt="dada2DenovoCorr" height="500" width="700" />
      </div>
    </Slide>
    <Slide align="center flex-start">
      <MyHeading>
        Network Properties
      </MyHeading>
      <Image src={l1Denoise} alt="l1" />
    </Slide>
    <Slide align="center flex-start">
      <MyHeading>
        Network Properties
      </MyHeading>
      <Image src={degDenoise} alt="deg_dist" />
    </Slide>
    <Slide align="center flex-start">
      <MyHeading>
        Network Properties
      </MyHeading>
      <Image src={overlapDenoise} alt="overlap" />
    </Slide>
  </SlideSet>
);
