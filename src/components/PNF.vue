<script>
export default {
  name:"home-com",
  data() {
    return {
      items: [
            {
              name: 'first',
              src: './src/components/icons/PNF.png',
              subtitle: 'Anubis'
            }
      ]
    }
  }
}
</script>

<template>
<h2>404 page not founded
  <img src="./icons/PNF.jpg" alt="not found picture">
</h2>
</template>

<style scoped>
h2 {
  color: red;
  width: 100%;
  height: 70vh;
  text-align: center;
  align-content: center;
}
img {
  width: 100%;
  height: 50vh;
}
</style>