<template>
  <OverridenCardSetup>
    <template #before>overrriden before..</template>
  </OverridenCardSetup>
</template>

<script>
import { defineComponent, ref } from "vue";
import Card from "./Card.vue";

const OverridenCardSetup = defineComponent({
  extends: Card,
  setup(props, context) {
    const base = Card.setup(props, context);

    return { ...base, counter: ref(50) };
  },
});

export default defineComponent({
  components: { OverridenCardSetup },
});
</script>
