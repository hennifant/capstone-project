import TankCard from './TankCard.js';

export default {
  title: 'components/TankCard',
  component: TankCard,
};

const Template = args => <TankCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: '24.03.2022',
  title: 'title',
  text: 'text',
};
