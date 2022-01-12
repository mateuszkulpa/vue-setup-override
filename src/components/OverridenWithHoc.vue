<template>
    <OverridenComponent>
        <template #before>
            with hoc
        </template>
    </OverridenComponent>
</template>

<script>
import Card from "@/components/Card.vue";
import { defineComponent, ref } from "vue";
import withOverridenSetup from "../withOverridenSetup";

const OverridenComponent = withOverridenSetup(Card, (base) => {
  console.log(base);
  return {
    counter: ref(100),
  };
});

export default defineComponent({
  components: { OverridenComponent },
});
</script>
