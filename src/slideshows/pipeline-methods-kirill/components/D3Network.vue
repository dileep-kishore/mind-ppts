<template lang="pug">
svg(:id='id', :width='width', :height='height')
</template>

<script>
import * as d3 from 'd3'
export default {
  props: {
    id: {default: () => Math.random().toString(36).substr(2, 10)},
    width: {default: 500},
    height: {default: 500},
    data: {default: () => ({})},
    options: {default: () => ({})},
    strength: {default: -300},
    size: {default: 5},
    pval_cutoff: {default: 0.05}
  },
  data () {
    return {
      d3network: null
    }
  },
  methods: {
  },
  computed: {
    dataUpdate () {
      function getFam (d) {
        let lineageArray = d.lineage.split('-')
        let dlen = lineageArray.length
        return lineageArray[dlen - 2]
      }
      let graph = this.data
      let dataNodes = graph.nodes.sort((a, b) => d3.ascending(getFam(a), getFam(b)))
      let dataLinks = graph.links.filter(l => l.pvalue < this.pval_cutoff)
      return [dataNodes, dataLinks]
    }
  },
  mounted () {
    function getFam (d) {
      let lineageArray = d.lineage.split('-')
      let dlen = lineageArray.length
      return lineageArray[dlen - 2]
    }
    let dataNodes = this.dataUpdate[0]
    let dataLinks = this.dataUpdate[1]
    var d3network = d3.select(this.$el)
    var color = d3.scaleOrdinal(d3.schemeCategory20)
    var radius = parseFloat(this.size)
    var width = parseFloat(this.width)
    var height = parseFloat(this.height)
    var simulation = d3.forceSimulation()
        .force('link', d3.forceLink().id(d => d.id))
        .force('charge', d3.forceManyBody().strength(this.strength))
        .force('center', d3.forceCenter(this.width / 2, this.height / 2))
    var link = d3network.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(dataLinks)
        .enter().append('line')
          .attr('stroke', d => d.weight < 0 ? 'red' : 'green')
          .attr('stroke-width', d => Math.abs(d.weight) * 5)
    var node = d3network.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(dataNodes)
      .enter().append('circle')
        .attr('r', this.size)
        .attr('fill', d => color(getFam(d)))
        .call(d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended))
    node.append('title')
      .attr('class', 'node-title')
      .text(d => 'Genus: ' + d.name + '\nLineage: ' + d.lineage)
    simulation
      .nodes(dataNodes)
    simulation.force('link')
      .links(dataLinks)
    simulation
      .on('tick', ticked)
    function ticked () {
      node
        .attr('cx', d => {
          d.x = Math.max(radius, Math.min(width - radius, d.x))
          return d.x
        })
        .attr('cy', d => {
          d.y = Math.max(radius, Math.min(height - radius, d.y))
          return d.y
        })
        // .attr('cx', d => d.x)
        // .attr('cy', d => d.y)
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
    }
    function dragstarted (d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart()
      d.fx = d.x
      d.fy = d.y
    }
    function dragged (d) {
      d.fx = d3.event.x
      d.fy = d3.event.y
    }
    function dragended (d) {
      if (!d3.event.active) simulation.alphaTarget(0)
      d.fx = null
      d.fy = null
    }
  }
}
</script>

<style lang="scss" scoped>
.eg-slide{
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
