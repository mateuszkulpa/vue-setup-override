<script>
import { defineComponent, ref } from "vue";
import Card from "./Card.vue";

export default defineComponent({
  extends: Card,
  setup(props, context) {
    const base = Card.setup(props, context);
    return {
      ...base,
      counter: ref(10),
      handleClick: () => {
        alert("click from overriden card");
      },
    };
  },
});
</script>
