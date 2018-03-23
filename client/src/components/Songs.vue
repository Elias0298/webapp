<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <PanelMusic title="Songs">

      </PanelMusic>
    </v-flex>
  </v-layout>
</template>

<script>

import PanelMusic from '@/components/PanelMusic'

export default {
  components: {
    PanelMusic
  },
  data () {
    return {
      songs: null
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.items {
  font-family: 'Courier';
}

.toolbar {
  font-family: 'Kalam';
}

a {
  text-decoration: none;
  color: white;
}
</style>
