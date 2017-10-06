<template lang="pug">
svg(:id='id', :width='width', :height='height', class='net-svg')
  g.links
    line(v-for="link in links"
      :x1='link.source.x'
      :y1='link.source.y'
      :x2='link.target.x'
      :y2='link.target.y'
      :stroke-width="calcStrokeWidth(link)"
      :stroke="calcStrokeColor(link)")
  g.nodes
    circle(v-for="node in nodes"
      :r="getNodeSize(node)"
      :cx="node.x"
      :cy="node.y"
      :fill="getNodeColor(node)")
        title {{ node.name }}
  //- g.labels
  //-   text.node-label(v-for="node in nodes"
  //-     :x='node.x'
  //-     :y='node.y') {{ node.name }}
</template>

<script>
import * as d3 from 'd3'
export default {
  props: {
    id: {default: () => Math.random().toString(36).substr(2, 10)},
    width: {default: 500},
    height: {default: 500},
    data: {default: () => ({})},
    options: {default: () => ({})}
  },
  data () {
    return {
      d3NetObj: null,
      netSim: null,
      dataNodes: [],
      dataLinks: []
    }
  },
  methods: {
    colorScheme (n) {
      return d3.ScaleOrdinal(d3.schemeCategory20)
    },
    calcStrokeWidth (l) {
      return Math.abs(l.weight) * 5
    },
    calcStrokeColor (l) {
      return l < 0 ? 'red' : 'green'
    },
    getNodeSize (n) {
      return 10
    },
    getFam (d) {
      let lineageArray = d.lineage.split('-')
      let dlen = lineageArray.length
      return lineageArray[dlen - 2]
    },
    getNodeColor (n) {
      var color = d3.scaleOrdinal(d3.schemeCategory20)
      return color(this.getFam(n))
    },
    ticked () {
      this.link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
      this.node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
    }
  },
  mounted () {
    this.d3NetObj = d3.select(this.$el)
    this.simulation = d3.forceSimulation()
                      .force('link', d3.forceLink().id(d => d.id))
                      .force('charge', d3.forceManyBody().strength(-400))
                      .force('center', d3.forceCenter(this.width / 2, this.height / 2))
    this.simulation
      .nodes(this.links)
      .on('tick', this.ticked)
    this.simulation.force('link')
      .links(this.nodes)
  },
  computed: {
    links () {
      this.dataLinks = this.data.links.filter(l => l.pvalue < l.pval_cutoff)
      return this.dataLinks
    },
    nodes () {
      this.dataNodes = this.data.nodes.sort((a, b) => d3.ascending(this.getFam(a), this.getFam(b)))
      return this.dataNodes
    },
    link () {
      return this.d3NetObj.selectAll('line')
    },
    node () {
      return this.d3NetObj.selectAll('circle')
    }
  }
}
</script>

<style lang="scss" scoped>
  .links line {
    stroke: #999;
    stroke-opacity: 0.6;
  }

  .nodes {
    circle {
    stroke: black;
    stroke-width: 1.5px;
    }
  }
</style>
