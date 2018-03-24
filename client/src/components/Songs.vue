<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <PanelMusic title="Songs">
        <v-btn v-if="!$store.state.isUserLoggedIn"slot="action" ligth fab medium absolute middle right router to="songs/create">
          <v-icon>add</v-icon>
        </v-btn>
        <div class="song" v-for="song in songs" :key="song.id">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div>              
            </v-flex>
            <v-btn class="cyan" top router to="/songId">View</v-btn>
            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl"/>
            </v-flex>
          </v-layout>
        </div>
      </PanelMusic>
    </v-flex>
  </v-layout>
</template>

<script>

import SongService from '@/services/SongService'
import PanelMusic from '@/components/PanelMusic'

export default {
  components: {
    PanelMusic
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // request to the backend
    this.songs = (await SongService.index()).data
    console.log('songs', this.songs)
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

.song {
  padding: 20px;
  height: 330px;
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
}

.btn {
  font-family: Courier;
}
</style>
