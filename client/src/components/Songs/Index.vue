<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <songs-search-panel class="search" />
      <songs-panel class="mt-4"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongService'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'

export default {
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // request to the backend
    this.songs = (await SongService.index()).data
    console.log('songs', this.songs)
  },
  components: {
    SongsPanel,
    SongsSearchPanel
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.panel {
  height: auto;
}

.items {
  font-family: 'Courier';
}

.btn {
  font-family: Courier;
}

.toolbar {
  font-family: 'Kalam';
}

a {
  text-decoration: none;
  color: white;
}

/*<-- song styles */
.song {
  padding: 15px;
  height: 0px auto;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0px auto;
  margin-top: 7px;
  margin-bottom: 7px;
}
/*/ songs -->*/

.this {
  margin-top: 15px;
  margin-bottom: 10px;
}

.purple {
  margin-top: 15px;
  font-family: 'Montserrat thin'
}

.search {
}
</style>
