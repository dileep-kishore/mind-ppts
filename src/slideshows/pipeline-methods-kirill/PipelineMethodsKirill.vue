<template lang="pug">
#PipelineMethods.eg-theme-agrume
  .eg-slideshow

    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 Methods in 16S data-analysis
        h4 Dileep Kishore

    slide(:steps=3, enter='bounceInRight' leave='bounceOutLeft')
      h3 Introduction
      ul
        li(v-show="step >= 2").
          Operational Taxonomic Units: Clusters of micro-organisms grouped by DNA sequence similarity usually in the 16S region
        li(v-show="step >= 3").
          Co-occurence Networks: Networks obtained from correlation matrices of 16S rDNA samples from various environments

    slide(:steps=5)
      h3 Goals - Database
      .img-slide(v-if="step == 1")
        img(src='./images/logo.svg')
      ul(v-if="step == 2")
        li Collect 16S rDNA sequence data from publication and databases
        li Data collected so far: Human Microbiome Project, Human Oral Microbiome, RISK cohort, American Gut
        li Focus on longitudinal, also time-series
      ul(v-if="step == 3")
        li Provide access to a pipeline for 16S data analysis
        li Metrics like: Abundance, Diversity, Co-occurrence networks
      ul(v-if="step == 4")
        li Provide access to a database of microbial interactions from various databases
        li Data is processed using a standardized pipeline and parameters
        li Users can compare and contrast:
          ul
            li Disease vs. Healthy microbiome
            li Identify core or differential microbiota
            li Query microbial interactions by taxa level or based on environment or across
      ul(v-if="step == 5")
        p Visualize the interactions
        iframe(src="http://128.197.39.131:3000/" height="500" width="750")

    slide(:steps=6)
      h3 Issues
        .img-exp(v-if="step == 2")
          p Sequencing method
          img(src='./images/2_samples.svg', height="80%", width="80%")
        .img-exp(v-if="step == 3")
          p Clustering methods
          img(src='./images/3_clusteringOTUs.svg', height="50%", width="50%")
        .img-exp(v-if="step == 4")
          p Alignment to databases
          img(src='./images/4_alignmenttodatabases.svg', height="30%", width="30%")
        .img-exp(v-if="step == 5")
          p Calculation of correlations
          img(src='./images/7_pairwisecorrelation.svg', height="50%", width="50%", v-if="step == 5")
        .img-exp(v-if="step == 6")
          eg-transition(enter='fadeIn', leave='fadeOut')
            .corr-tools
              .quarter(v-if="step >= 6")
                p Pearson
              .quarter(v-if="step >= 6")
                p Spearman
              .quarter(v-if="step >= 6")
                p SparCC
              .quarter(v-if="step >= 6")
                p SpiecEasi

    slide
      h3 Goals - Pipeline Paper
      ul
        li Develop a standard pipeline for the whole process
        li Study how different parameters affect the various steps in the pipeline

    networks-slide(enter='fadeIn', leave='fadeOut')

    slide
      h3 What metrics do we use to gauge this?
      ul
        li Diversity
        li Abundances
        li Motifs in the network
        li Degree distributions
        li Connected components
        li Metabolic modeling

    slide
      .center.frontpage
        h1 Thank you!

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Pipeline Methods Paper Proposal',
    description: 'Presentation about various methods in 16S data analysis and a proposal for a methods paper',
    date: '[10-03-2017]',
    path: 'pipeline-methods-kirill'
  },
  components: {
    'networks-slide': require('./components/NetworksSlide')
  },
  data () {
    return {
      title: ''
    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/eagle.js/src/themes/agrume/agrume';
@font-face {
  font-family: 'Delicious';
  src: url('./assets/fonts/Delicious-Roman.otf');
}
.eg-slide{
  background-color: white;
}
.eg-theme-agrume .eg-slideshow{
  background-image: none;
  background-color: white;
}
.eg-slideshow{
  background-color: white;
  background-image: none;
}
.subslide{
  max-width: 100%;
}
#PipelineMethods {
  h3 {
    font-weight: bolder;
  }
  .img-slide {
    margin-left: 20px;
    padding: 10px;
  }
  li {
    font-family: 'Delicious';
  }
  .frontpage {
    h4 {
      color: gray;
    }
  }
}
</style>

