<template>
    <v-layout row>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-6">
          <v-toolbar flat dense class="black">
            <v-toolbar-title class="title">Register</v-toolbar-title>
          </v-toolbar>
          <div class="pr-4 pl-4 pt-2 pb-2">
            <br>
              <v-text-field
                name="email"
                label="email"
                id="email"
              >email</v-text-field>
            <br>
            <br>
            <v-text-field
                name="password"
                label="password"
                id="password"
              >password</v-text-field>
            <br>
            <br>
            <div class="error" v-html="error"></div>
            <br>
            <v-btn slot color="black" class="btn" @click="register" dark>Register</v-btn>
        </div>
        </div>
      </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

.error {
  color: red;
  font-family: 'Monaco';
  background-color: #efefef;
}

.title, .btn {
  font-family: 'Courier';
  color: white;
}

</style>
