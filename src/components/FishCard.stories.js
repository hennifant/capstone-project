import FishCard from './FishCard';

export default {
  title: 'Component/FishCard',
  component: FishCard,
};

const Schema = args => <FishCard {...args} />;

export const Default = Schema.bind({});
Default.args = {
  fish: {
    strFishLatin: 'Betta splendens',
    strFishGerman: 'Siamesischer Kampffisch',
    strCharacteristics: '5 - 7 cm',
    strFood: 'Lebend- und Frostfutter, Trockenfutter',
    strHusbandry: 'Einzelhaltung',
    strTanksize: '50 Liter',
    strAge: '3 Jahre',
    strTemperature: '24 - 30 Grad',
    strPh: '6,0 - 7,5',
    strDifficulty: 'Einfach',
    Image:
      'https://www.aquarium-guide.de/siamesischer_kampffisch_halfmoon2.gif',
  },
};
