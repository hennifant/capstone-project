import BrateCard from './BrateCard';

export default {
  title: 'Component/BrateCard',
  component: BrateCard,
};

const Schema = args => <BrateCard {...args} />;

export const Default = Schema.bind({});
Default.args = {
  Brate: {
    BrateLatin: 'Atyoida pilipes',
    BrateGerman: 'Sulawesi Fächergarnele',
    Characteristics: '5 - 6 cm',
    Food: 'Algen, Kleinstorganismen, Flockenfutter',
    Husbandry: 'Einzelhaltung',
    Tanksize: '80 Liter',
    Temperature: '20 - 28 Grad',
    Ph: '6,0 - 8,0',
    Difficulty: 'normal',
    Image: 'https://www.aquarium-guide.de/sulawesi-faechergarnele2.gif',
    Region: 'mitte',
  },
};
