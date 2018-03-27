<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Simple and Progressive Music Web Application</p>
    <br>
    <br>
    <v-btn class="purple">GitHub</v-btn>
    <v-btn outline class="white">About us</v-btn>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Obsidian'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  font-size: 14em;
  margin-top: 0em;
}

p {
  font-family: 'Roboto';
  color: white;
  text-align: center;
  display: inline;
  font-size: 1.5em;
  font-weight: lighter;
  line-height: 0.1px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* ######### edit ######### */

.application--wrap {
  background-color: cyan;
}

.hello {
  font-family: 'Lobster 1.4';
}

.dark {
}

.purple {
  font-family: 'Montserrat Thin';
  color: white;
}

.white {
  font-family: 'Montserrat Thin';
  color: white;
}
</style>
