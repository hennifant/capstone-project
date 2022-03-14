import NavigationBar from './NavigationBar.js';

export default {
  title: 'Component/NavigationBar',
  component: NavigationBar,
};

const Template = args => <NavigationBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
