import { ShowDetailsButton, SubmitButton, DetailsButton } from './Button.js';
import Button from '../components/Button.js';
export default {
  title: 'Component/Button',
  component: Button,
  subcomponents: { ShowDetailsButton, SubmitButton, DetailsButton },
};

export const Empty = args => <Button {...args} />;

export const ShowDetails = args => (
  <ShowDetailsButton {...args}></ShowDetailsButton>
);

export const Submit = args => <SubmitButton {...args}></SubmitButton>;

export const Detail = args => <DetailsButton {...args}></DetailsButton>;
