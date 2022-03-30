import RandomFishCard from './RandomFishCard';

export default {
  title: 'Component/RandomFishCard',
  component: RandomFishCard,
};

const Schema = args => <RandomFishCard {...args} />;

export const Default = Schema.bind({});
Default.args = {
  fish: {
    idFish: '1',
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
