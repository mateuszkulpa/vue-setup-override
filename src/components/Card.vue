<template>
  <div
    @click="handleClick"
    style="padding: 2rem; border: 1px solid rgba(0, 0, 0, 0.2); margin: 1rem;"
  >
    <slot name="before">
        default before slot
    </slot>

    CARD TEMPLATE {{ counter }}
    <slot name="after">
         default after slot
    </slot>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const counter = ref(0);
    const handleClick = () => {
      alert("handle click from base card");
    };
    return {
      counter,
      handleClick,
    };
  },
});
</script>
