<template>
<!--     <v-flex xs6 offset-xs3> -->
  <panel-music title="Songs" class="panel">
    <v-btn v-if="$store.state.isUserLoggedIn" slot="action" class="cyan" light fab medium absolute middle right router to="/songs/create">
      <v-icon>add</v-icon>
    </v-btn>
    <div class="song" v-for="song in songs" :key="song.id">
      <v-layout class="this">
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
        <v-btn class="purple" dark top :to="{
            name: 'song',
            params: {
            songId: song.id
          }
    }">View</v-btn>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl"/>
        </v-flex>
      </v-layout>
    </div>
  </panel-music>
</template>

<script>
import SongService from '@/services/SongService'

export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongService.index(value)).data
      }
    }
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
</style>
