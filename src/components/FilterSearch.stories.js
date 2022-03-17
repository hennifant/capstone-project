import FilterSearch from './FilterSearch.js';

export default {
  title: 'Component/FilterSearch',
  component: FilterSearch,
};

const Template = args => <FilterSearch {...args} />;

export const Default = Template.bind({});
Default.args = {
  newFilter: 'complete',
};
