<template>
    <v-layout row>
        <v-flex xs6 offset-xs3>
          <panel title="Register">
            <div class="pr-4 pl-4 pt-6 pb-2">
              <br>
            <v-form v-model="valid">
              <v-text-field
                class="field"
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field
                class="field"
                label="Password"
                type="password"
                v-model="password"
                :rules="passwordRules"
                required
              ></v-text-field>
              <v-text-field
                class="field"
                label="Confirm Password"
                type="password"
                v-model="confirmpassword"
                :rules="confirmpasswordRules"
                required
              ></v-text-field>
            </v-form>
              <notifications group="auth" position="bottom left"/>
              <br>
              <v-btn slot class="btn" @click="register" dark>Register</v-btn>
            </div>
          </panel>
        </v-flex>
    </v-layout>
</template>

<script>
/* eslint-disable */
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      confirmpassword: '',
      confirmpasswordRules: [
        v => !!v || 'Please confirm password',
      ],
      error: null
    }
  },
  methods: {
    async register () {
      try {
        let response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        let user_register = this.email
        this.$notify({
          group: 'foo',
          type: 'success',
          title: `Hi, ${user_register}.`,
          text: 'Welcome to the family!'
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'})
      } catch (error) {
        let fail = this.error = error.response.data.error
        this.$notify({ group: 'auth', type: 'error', text: fail})
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
  color: white;
  font-family: 'Monaco';
}

.title, .btn {
  color: white;
}

.btn {
  font-family: 'Courier';
}

.title {
  font-family: 'Courier';
}

.error--text input, .error--text textarea {
    caret-color: #ff5252 !important;
}

.error--text {
    color: #ff5252 !important;
}

.application--wrap {
  background-color: red !important;
}

</style>
