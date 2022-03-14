import SearchBar from './SearchBar';

export default {
  title: 'Component/SearchBar',
  component: SearchBar,
};

const Schema = args => <SearchBar {...args} />;

export const Default = Schema.bind({});
Default.args = {};
