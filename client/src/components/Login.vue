<template>
    <v-layout row>
        <v-flex xs6 offset-xs3>
          <panel title="LOGIN" class="p-title">
            <div class="pr-4 pl-4 pt-6 pb-2">
              <br>
            <v-form>
              <v-text-field
                class="field"
                label="E-mail"
                v-model="email"
              ></v-text-field>
              <div class="pass">
                  <v-text-field
                    class="field"
                    label="Password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </div>
            </v-form>
              <notifications group="auth" position="bottom left" classes="vue-notification"/>
              <br>
              <v-btn
             class="btn" @click="login" dark>Login</v-btn>
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
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        let response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.error = null
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser',  response.data.user)
        this.$router.push({
          name: 'songs'})
        this.$notify({
          group: 'foo',
          type: 'success',
          title: `Welcome ${this.email}!`,
          text: 'Nice to see you again!'
        })
      } catch (error) {
        this.error = error.response.data.error
        this.$notify({ group: 'auth', type: 'error', text: this.error})
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

.pass {
  display: inline;
}

.error {
  color: white;
  font-family: 'Monaco';
  background-color: #efefef;
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
    caret-color: black !important;
}

.error--text {
    color: #ff5252 !important;
}

.application--wrap {
  background-color: black !important;
}

/* /// notification style /// */
.vue-notification {
  padding: 10px;
  margin: 0 5px 5px;

  font-size: 12px;

  color: #ffffff;
  background: #44A4FC;
  border-left: 5px solid #187FE7;

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #68CD86;
    border-left-color: #B82E24;
  }

  &.success {
    background: #68CD86;
    border-left-color: #42A85F;
  }
}
/*/// //// ///*/

</style>
