<template lang='pug'>
.frontpage
  .content
    h1 Microbiome Interaction Database
    .eagle-intro
      h3
        span.logo
        span Eagle
        span.grey .js

    .thumbnails
      .box-card(v-for='slideshow in slideshows')
        router-link(:to='slideshow.infos.path' @click.native="click")
          .embedded-slideshow-container
            component(:is="slideshow", :embedded='true',
                      :keyboardNavigation='false',
                      :mouseNavigation='false')
        .caption
          h3 {{slideshow.infos.title}}
          p.thumbnail-description {{slideshow.infos.description}}
          p.thubnail-description {{slideshow.infos.date}}
</template>

<script>
import slideshows from 'slideshows/slideshows'

export default {
  data: function () {
    return {
      slideshows: slideshows.list
    }
  },
  mounted: function () {
    console.log(this.slideshows)
    document.currentSlide = {}
  },
  methods: {
    click: function (evt) {
      evt.stopPropagation()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "node_modules/eagle.js/src/themes/frontpage/frontpage";

.frontpage {
  height: 100%;
}

.eagle-intro {
  text-align: center;
  h4 {
    margin-top: -30px;
    color: gray;
  }
  margin-bottom: 100px;
}

.logo {
  display: inline-block;
  width: 90px;
  height: 45px;
  margin-right: 0.1em;
  background-image: url(./logo.svg);
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
}

.box-card {
  display: flex;
  border: 2px dashed lightgray;
  padding: 10px;
}

</style>
