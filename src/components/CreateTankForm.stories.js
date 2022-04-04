import CreateTankForm from './CreateTankForm.js';
export default {
  title: 'components/CreateTankForm',
  component: CreateTankForm,
};

const Template = args => <CreateTankForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '',
  title: '',
  fish: '',
  plants: '',
  text: '',
};
