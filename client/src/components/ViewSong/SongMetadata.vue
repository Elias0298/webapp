<template>
  <panel-music title="Song Metadata" class="song-mt">
    <v-layout>
        <v-flex xs6>
          <div class="song">
            <div class="song-title">
              {{song.title}}
            </div>
            <div class="song-artist">
              {{song.artist}}
            </div>
            <div class="song-genre">
              {{song.genre}}
            </div>
            <v-btn v-if="$store.state.isUserLoggedIn" class="purple" dark :to="{
              name: 'song-edit',
              params () {
                return {
                  songId: song.id
                }
              }
            }" >
              Edit
            </v-btn>
          </div>
        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl"/>
        </v-flex>
      </v-layout>
  </panel-music>
</template>

<script>

export default {
  props: [
    'song'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*<-- song styles */

.song-mt {
}

.song {
  padding: 15px;
  height: 230px;
  overflow: hidden;
  margin-top: 0px;
}

.song-title {
  font-size: 2.15em;
}

.song-artist {
  font-size: 1.75em;
}

.song-genre {
  font-size: 1.3em;
}

.album-image {
  width: 80%;
  margin: 1em auto;
  margin-top: 28px;
}
/*/ songs -->*/

.purple {
  margin-top: 15px;
  font-family: 'Futura';
  font-weight: lighter;
}

</style>
