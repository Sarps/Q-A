<template>
  <v-app>
    
    <NavigationDrawer/>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import NavigationDrawer from "./components/NavigationDrawer";

export default {
  name: 'App',
  components: {
    HelloWorld, NavigationDrawer
  },
  data () {
    return {
      //
    }
  }
}
</script>
