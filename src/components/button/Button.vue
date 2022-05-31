<template>
  <button :class="classes" @click="$emit('click')">
    {{ text }}
  </button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Button",
    },
    primary: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  data() {
    return {
      color: {
        primary: "#3360ff",
        primaryContrast: "#ffffff",
        fg: "#1d1d1b",
        fg80: "#D2D2D1",
      },
    };
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        btn: true,
        "btn-primary": props.primary,
      })),
    };
  },
};
</script>

<style scoped>
.btn {
  border: none;
  border-radius: 0;
  outline: none;
  padding: 14px 18px;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Inter";
  background-color: white;
  color: v-bind("color.primary");
  border: 1px solid v-bind("color.fg80");
  cursor: pointer;
}

.btn-primary {
  background-color: v-bind("color.primary");
  color: v-bind("color.primaryContrast");
  border-color: v-bind("color.primary");
}
</style>