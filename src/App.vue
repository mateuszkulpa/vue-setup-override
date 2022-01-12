<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Card />
  <OverridenCard />
  <OverridenCardWithTemplate />
  <SetupAndTemplate />
</template>

<script>
import Card from "./components/Card.vue";
import OverridenCard from "./components/OverridenCard.vue";
import OverridenCardWithTemplate from "./components/OverridenCardWithTemplate.vue";
import SetupAndTemplate from "./components/SetupAndTemplate.vue";

export default {
  name: "App",
  components: {
    Card,
    OverridenCard,
    OverridenCardWithTemplate,
    SetupAndTemplate
},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
