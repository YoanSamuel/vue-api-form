<script>
import {useRoute} from "vue-router";
export default {
  name: 'Login-com',

  data() {
    return {
      Login: '',
    }
  },
  mounted() {
    const route = useRoute();
    console.table(route.params.name);
    this.Login = route.params.name;
  },
}
</script>

<template>
<h1>Login Page</h1>
  <h2>NAME : {{Login}}</h2>
</template>

<style scoped>

</style>