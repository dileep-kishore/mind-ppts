<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .fig-slide(v-if='active')
    .subslide(v-if='step == 1')
      h3 Networks
      .fig
        d3network(:data='figureData(0)', :width='width', :height='height', :size="10")
        d3network(:data='figureData(1)', :width='width', :height='height', :size="10")
      .fig-caption
        span Saliva Network
        span Stool Network
    .subslide(v-if='step == 2')
      h3 Comparing networks
      .fig-overlap
        d3networkOverlap(:data='netList', :width='650', :height='650', :size="10")
      .fig-caption
        span Overlapping the Saliva and Stool Network
      .fig
    .subslide(v-if='step >= 3')
      h3.corr-head Correlations
      .fig-corr-grid
        .fig-corr(v-if='step >= 3')
          d3network(:data="corrData('pearson')", :width='400', :height='400', :strength="-100")
          .fig-caption
            span Pearson
        .fig-corr(v-if='step >= 4')
          d3network(:data="corrData('spearman')", :width='400', :height='400', :strength="-100")
          .fig-caption
            span Spearman
        .fig-corr(v-if='step >= 5')
          d3network(:data="corrData('sparcc')", :width='400', :height='400', :strength="-100")
          .fig-caption
            span SparCC
        .fig-corr(v-if='step >= 6')
          d3network(:data="corrData('spieceasi')", :width='400', :height='400', :strength="-100", :pval_cutoff="10")
          .fig-caption
            span SpiecEasi
</template>

<script>
import eagle from 'eagle.js'
import salivaNetworkData from '../data/network/saliva_network.json'
import stoolNetworkData from '../data/network/stool_network.json'
import NetworkOverlap from '../data/network/stool_saliva_network.json'
import sparccNet from '../data/network/Stool_SparCC_net.json'
import pearsonNet from '../data/network/Stool_pearson_net.json'
import spearmanNet from '../data/network/Stool_spearman_net.json'
import spieceasiNet from '../data/network/Stool_SpiecEasi_net.json'
import d3network from './D3Network'
import d3networkOverlap from './D3NetworkOverlap'
export default {
  components: { d3network, d3networkOverlap },
  mixins: [eagle.slide],
  props: {
    steps: {default: 6}
  },
  data () {
    return {
      width: 600,
      height: 600,
      nodeSize: 5
    }
  },
  methods: {
    figureData (num) {
      return [salivaNetworkData, stoolNetworkData][num]
    },
    corrData (method) {
      return {
        'sparcc': sparccNet,
        'pearson': pearsonNet,
        'spearman': spearmanNet,
        'spieceasi': spieceasiNet
      }[method]
    }
  },
  computed: {
    netList () {
      return NetworkOverlap
    }
  }
}
</script>

<style lang="scss" scoped>
.eg-slide{
  background-color: white;
}
.fig-slide{
  background-color: white;
}
.eg-slideshow{
  background-image: none;
  background-color: white;
}
.subslide{
  max-width: 100%;
  width: 100%;
}
.fig-slide {
  stroke: black;
}

#btn {
  margin: auto;
}

.quarter {
  svg {
    border: 1px dashed lightgray;
  }
}

.fig {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  align-content: center;
  margin: auto;
  svg {
    padding: 20px;
    margin: auto;
  }
}

.fig-overlap {
  display: grid;
  margin: auto;
  svg {
    margin: auto;
  }
}

.corr-head {
  margin-bottom: 0;
}

.fig-corr-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.fig-corr {
  position: relative;
  align-content: center;
  margin: auto;
  svg {
    margin: auto;
    border: 3px dashed gray;
    border-radius: 5px;
  }
  .fig-caption {
    position: absolute;
    color: lightblue;
    margin: -20% 28%;
  }
}

.fig-caption {
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  justify-content: space-around;
}
</style>
