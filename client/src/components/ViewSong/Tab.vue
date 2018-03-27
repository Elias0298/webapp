<template>
  <panel-music title="Tabs" class="mt-4">
    <textarea readonly v-model="song.tab">
    </textarea>
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

textarea {
  width: 100%;
  font-family: monospace;
  border-color: transparent;
  border-style: none;
  height: 300px;
  border: none;
  overflow: auto;
  padding: 40px;
}

</style>
