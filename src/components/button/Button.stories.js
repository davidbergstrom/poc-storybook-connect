import MyButton from './Button.vue';

export default {
  title: 'Components/Button',
  component: MyButton,
  argTypes: {
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary button',
};