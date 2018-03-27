<template>
  <panel-music title="YouTube Video" class="ml-2">
    <youtube
      :video-id="youtubeId"
      :player-width="370"
      :player-height="220" class="vid"></youtube>
  </panel-music>
</template>

<script>

export default {
  props: [
    'youtubeId'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ml-2 {
  height: 285px;
}
.vid {
  padding: 0.5em;
}
</style>
