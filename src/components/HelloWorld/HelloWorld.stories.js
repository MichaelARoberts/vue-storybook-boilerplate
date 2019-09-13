import { storiesOf } from "@storybook/vue";
import HelloWorld from "./HelloWorld.vue";

storiesOf("HelloWorld", module).add("default", () => {
  return {
    components: { HelloWorld },
    template: "<HelloWorld :msg='\"NEVER ENDING STORY\"'></HelloWorld>",
    data: () => ({ msg: "NEVER ENDING STORY" })
  };
});
