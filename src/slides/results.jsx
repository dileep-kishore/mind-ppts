/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import {
  Slide,
  Text,
  SlideSet,
  Image,
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

const literature = require('../images/network_comp_paper.png');

export default (
  <SlideSet>
    <Slide align="center flex-start" >
      <MyHeading>
        Networks
      </MyHeading>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
      <MyHeading>
        Associations
      </MyHeading>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <div style={{ position: 'relative', alignContent: 'center', margin: 'auto' }} >
          <Network data={pearsonNet} height={300} width={300} radius={6} radiusMargin={13} />
          <Text
            style={{ position: 'absolute', bottom: '10%', left: '25%' }}
            textSize={20}
            textColor="lightblue"
          >
            Pearson
          </Text>
        </div>
        <div style={{ position: 'relative', alignContent: 'center', margin: 'auto' }} >
          <Network data={spearmanNet} height={300} width={300} radius={6} radiusMargin={13} />
          <Text
            style={{ position: 'absolute', bottom: '10%', left: '25%' }}
            textSize={20}
            textColor="lightblue"
          >
           Spearman
          </Text>
        </div>
        <div style={{ position: 'relative', alignContent: 'center', margin: 'auto' }} >
          <Network data={sparccNet} height={300} width={300} radius={6} radiusMargin={13} />
          <Text
            style={{ position: 'absolute', bottom: '10%', left: '25%' }}
            textSize={20}
            textColor="lightblue"
          >
            SparCC
          </Text>
        </div>
        <div style={{ position: 'relative', alignContent: 'center', margin: 'auto' }} >
          <Network data={spieceasiNet} height={300} width={250} radius={6} radiusMargin={13} />
          <Text
            style={{ position: 'absolute', bottom: '10%', left: '25%' }}
            textSize={20}
            textColor="lightblue"
          >
            SpiecEasi
          </Text>
        </div>
      </div>
    </Slide>
    <Slide align="center flex-start">
      <MyHeading>
        Literature
      </MyHeading>
      <Image src={literature} alt="literature" />
    </Slide>
  </SlideSet>
);
