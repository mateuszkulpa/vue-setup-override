import { defineComponent } from "vue";

export default function withOverridenSetup(baseComponent, transformFunction) {
  return defineComponent({
    extends: baseComponent,
    setup(props, context) {
      const base = baseComponent.setup(props, context);

      return { ...base, ...transformFunction(base) };
    },
  });
}
