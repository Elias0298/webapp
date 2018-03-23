<template>
  <div class="white elevation-12">
    <v-toolbar flat dense class="black" dark>
      <v-toolbar-title class="title">{{title}}</v-toolbar-title>
      <v-spacer></v-spacer><v-icon >face</v-icon>
    </v-toolbar>
    <div class="pr-4 pl-4 pt-6 pb-2">
    	<slot></slot>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
	props: [
		'title'
	]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>