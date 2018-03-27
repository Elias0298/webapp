<template>
  <v-layout>
    <v-flex xs4>
      <panel-music title="Song Metadata" class="mt-2">
        <v-text-field
        label="Title"
        v-model="song.title"
        :rules="[required]"
        ></v-text-field>

        <v-text-field
        label="Artist"
        v-model="song.artist"
        :rules="[required]"
        ></v-text-field>

        <v-text-field
        label="Genre"
        v-model="song.genre"
        :rules="[required]"
        ></v-text-field>

        <v-text-field
        label="Album"
        v-model="song.album"
        :rules="[required]"
        ></v-text-field>

        <v-text-field
        label="Album Image Url"
        v-model="song.albumImageUrl"
        :rules="[required]"
        ></v-text-field>

        <v-text-field
        label="YoutubeID"
        v-model="song.youtubeId"
        :rules="[required]"
        ></v-text-field>
      </panel-music>
    </v-flex>
    <v-flex xs8>
      <panel-music title="Song Structure" class="mt-2 ml-4">
        <v-text-field
        label="Lyrics"
        multi-line
        v-model="song.lyrics"
        :rules="[required]"
        ></v-text-field>

        <v-text-field
        label="Tab"
        multi-line
        v-model="song.tab"
        :rules="[required]"
        ></v-text-field>
      </panel-music>
      <notifications group="foo" position="top right"/>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
        <v-btn class="btn" @click="save" dark>Edit Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>

import SongService from '@/services/SongService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      let areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      let songId = this.$store.state.route.params.songId
      try {
        await SongService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
        this.$notify({
          group: 'foo',
          type: 'success',
          text: `<strong>${this.song.title}</strong> has been successfully edited.`
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      let songId = this.$store.state.route.params.songId
      this.song = (await SongService.show(songId)).data
    } catch (err) {
      console.log(err)
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

.btn {
  font-family: 'Montserrat Thin';
}

</style>
