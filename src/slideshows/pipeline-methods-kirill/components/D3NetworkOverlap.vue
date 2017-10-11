<template lang="pug">
  svg(:id='id', :width='width', :height='height')
</template>

<script>
import * as d3 from 'd3'
import { flatten, difference } from 'lodash'
export default {
  props: {
    id: {default: () => Math.random().toString(36).substr(2, 10)},
    width: {default: 500},
    height: {default: 500},
    data: {default: () => ({})},
    options: {default: () => ({})},
    strength: {default: -300},
    size: {default: 10},
    pval_cutoff: {default: 0.05}
  },
  data () {
    return {
      d3network: null
    }
  },
  methods: {
    calcLinks () {
      const allLinks = flatten(Object.entries(this.data).map(([k, v], i) => {
        return v.links.map(edge => ({'source': edge.source, 'target': edge.target, 'weight': edge.weight, color (x) { return '#ccc' }, width (x) { return 1 }}))
      }))
      console.log('alllinks', allLinks)
      let uniqueLinkIds = {source: [], target: []}
      let uniqueLinks = []
      allLinks.forEach((el) => {
        let s = el.source
        let t = el.target
        if (!(uniqueLinkIds.source.includes(s) && uniqueLinkIds.target.includes(t)) || !(uniqueLinkIds.source.includes(t) && uniqueLinkIds.target.includes(s))) {
          uniqueLinkIds.source.push(s)
          uniqueLinkIds.target.push(t)
          uniqueLinks.push(el)
        }
      })
      const commonLinks = difference(allLinks, uniqueLinks)
        .map(el => (Object.assign({}, el, {color (x) { return (x < 0 ? 'red' : 'green') }, width (x) { return Math.abs(x) * 5 }})))
      let commonLinkIds = {source: [], target: []}
      commonLinks.map(el => {
        commonLinkIds.source.push(el.source)
        commonLinkIds.target.push(el.target)
      })
      let uncommonLinks = []
      uniqueLinks.forEach(el => {
        let s = el.source
        let t = el.target
        if (!(commonLinkIds.source.includes(s) && commonLinkIds.target.includes(t)) || !(commonLinkIds.source.includes(t) && commonLinkIds.target.includes(s))) {
          uncommonLinks.push(el)
        }
      })
      return {'common': commonLinks, 'uncommon': uncommonLinks}
    },
    calcNodes () {
      const allNodes = flatten(Object.entries(this.data).map(([k, v], i) => v.nodes))
      let uniqueNodes = []
      let uniqueNodeIds = []
      allNodes.forEach((el) => {
        if (!uniqueNodeIds.includes(el.id)) {
          uniqueNodeIds.push(el.id)
          uniqueNodes.push(el)
        }
      })
      return uniqueNodes
    }

  },
  mounted () {
    // const getFam = function (d) {
    //   let lineageArray = d.lineage.split('-')
    //   let dlen = lineageArray.length
    //   return lineageArray[dlen - 2]
    // }
    // const dataNodes = this.
    d3.forceSimulation()
    console.log(this.calcNodes())
    console.log(this.calcLinks())
  }
}
</script>
