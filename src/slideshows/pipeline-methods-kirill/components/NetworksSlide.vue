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
    .subslide(v-if='step >= 2')
      h3 Correlations
      .quarter(v-if='step >= 2')
        .fig
          d3network(:data="corrData('pearson')", :width='400', :height='400', :strength="-100")
          .fig-caption
            span Pearson
      .quarter(v-if='step >= 3')
        .fig
          d3network(:data="corrData('spearman')", :width='400', :height='400', :strength="-100")
          .fig-caption
            span Spearman
      .quarter(v-if='step >= 4')
        .fig
          d3network(:data="corrData('sparcc')", :width='400', :height='400', :strength="-100")
          .fig-caption
            span SparCC
      .quarter(v-if='step >= 5')
        .fig
          d3network(:data="corrData('spieceasi')", :width='400', :height='400', :strength="-100", :pval_cutoff="10")
          .fig-caption
            span SpiecEasi
</template>

<script>
import eagle from 'eagle.js'
import salivaNetworkData from '../data/network/saliva_network.json'
import stoolNetworkData from '../data/network/stool_network.json'
import sparccNet from '../data/network/Stool_SparCC_net.json'
import pearsonNet from '../data/network/Stool_pearson_net.json'
import spearmanNet from '../data/network/Stool_spearman_net.json'
import spieceasiNet from '../data/network/Stool_SpiecEasi_net.json'
import d3network from './D3Network'
export default {
  components: { d3network },
  mixins: [eagle.slide],
  props: {
    steps: {default: 5}
  },
  data () {
    return {
      width: 600,
      height: 600
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

.quarter {
  svg {
    border: 1px dashed lightgray;
  }
}

.fig {
  // margin-left: 20%;
  // margin-right: 20%;
  // background-color: white;
  display: flex;
  // flex-flow: row wrap;
  margin: auto;
  justify-content: space-around;
}
.fig-caption {
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  justify-content: space-around;
}
</style>
