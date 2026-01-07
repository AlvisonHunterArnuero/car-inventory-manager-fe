import { graphql, HttpResponse } from 'msw';

const carList = [
  {
    id: '1',
    make: 'Audi',
    model: 'Q5',
    year: 2023,
    color: 'Khaki Green',
    mobile:
      'https://images.pexels.com/photos/20220997/pexels-photo-20220997.jpeg?width=300',
    tablet:
      'https://images.pexels.com/photos/20220997/pexels-photo-20220997.jpeg?width=900',
    desktop:
      'https://images.pexels.com/photos/20220997/pexels-photo-20220997.jpeg?width=1280',
  },
  {
    id: '2',
    make: 'Audi',
    model: 'A3',
    year: 2022,
    color: 'Dark Gray',
    mobile:
      'https://images.pexels.com/photos/27810417/pexels-photo-27810417.jpeg?width=300',
    tablet:
      'https://images.pexels.com/photos/27810417/pexels-photo-27810417.jpeg?width=900',
    desktop:
      'https://images.pexels.com/photos/27810417/pexels-photo-27810417.jpeg?width=1200',
  },
  {
    id: '3',
    make: 'Audi',
    model: 'R8',
    year: 2022,
    color: 'Blue',
    mobile:
      'https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?width=300',
    tablet:
      'https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?width=900',
    desktop:
      'https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?width=1200',
  },
  {
    id: '4',
    make: 'Mercedes-Benz',
    model: 'G 550',
    year: 2015,
    color: 'Modern Blue',
    type: 'Sport',
    mobile:
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?width=300',
    tablet:
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?width=900',
    desktop:
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?width=1200',
  },
  {
    id: '5',
    make: 'Mercedes-Benz',
    model: 'AMG G 63',
    year: 2016,
    color: 'Matte Blue',
    type: 'Sport',
    mobile:
      'https://images.pexels.com/photos/16511358/pexels-photo-16511358.jpeg?width=300',
    tablet:
      'https://images.pexels.com/photos/16511358/pexels-photo-16511358.jpeg?width=900',
    desktop:
      'https://images.pexels.com/photos/16511358/pexels-photo-16511358.jpeg?width=1200',
  },
  {
    id: '6',
    make: 'Range Rover',
    model: 'Modern Evoque',
    year: 2016,
    color: 'Matte Black',
    type: 'Jeep',
    mobile:
      'https://images.pexels.com/photos/18231632/pexels-photo-18231632.jpeg?width=300',
    tablet:
      'https://images.pexels.com/photos/18231632/pexels-photo-18231632.jpeg?width=900',
    desktop:
      'https://images.pexels.com/photos/18231632/pexels-photo-18231632.jpeg?width=1200',
  },
  {
    id: '7',
    make: 'Mercedes-Benz',
    model: 'AMG GT Coupe',
    year: 2022,
    color: 'Silver',
    type: 'Sport',
    mobile:
      'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?width=300',
    tablet:
      'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?width=900',
    desktop:
      'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?width=1200',
  },
  {
    id: '8',
    make: 'Audi',
    model: 'R56',
    year: 2012,
    color: 'white',
    type: 'SUV',
    mobile:
      'https://images.pexels.com/photos/16476496/pexels-photo-16476496.jpeg?width=300',
    tablet:
      'https://images.pexels.com/photos/16476496/pexels-photo-16476496.jpeg?width=900',
    desktop:
      'https://images.pexels.com/photos/16476496/pexels-photo-16476496.jpeg?width=1200',
  },
  {
    id: '9',
    make: 'Chevrolet',
    model: 'Bel Air',
    year: 1976,
    color: 'Bright Orange',
    type: 'SUV',
    mobile:
      'https://images.pexels.com/photos/12505616/pexels-photo-12505616.jpeg?width=300',
    tablet:
      'https://images.pexels.com/photos/12505616/pexels-photo-12505616.jpeg?width=900',
    desktop:
      'https://images.pexels.com/photos/12505616/pexels-photo-12505616.jpeg?width=1200',
  },
  {
    id: '10',
    make: 'Alfa Romeo',
    model: 'C4',
    year: 2020,
    color: 'Wine Red',
    type: 'Sport',
    mobile:
      'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?width=300',
    tablet:
      'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?width=900',
    desktop:
      'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?width=1200',
  },
  {
    id: '11',
    make: 'Lamborghini',
    model: 'Aventador',
    year: 2018,
    color: 'Orange',
    type: 'Sport',
    mobile:
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?width=300',
    tablet:
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?width=900',
    desktop:
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?width=1200',
  },
  {
    id: '12',
    make: 'Land Rover',
    model: 'Defender',
    year: 2014,
    color: 'Silver',
    type: 'Sport',
    mobile:
      'https://images.pexels.com/photos/16365199/pexels-photo-16365199.jpeg?width=300',
    tablet:
      'https://images.pexels.com/photos/16365199/pexels-photo-16365199.jpeg?width=900',
    desktop:
      'https://images.pexels.com/photos/16365199/pexels-photo-16365199.jpeg?width=1200',
  },
];

export const handlers = [
  graphql.query('GetCars', () => {
    return HttpResponse.json({ data: { cars: carList } });
  }),

  graphql.mutation('CreateCar', ({ variables }) => {
    const { input } = variables;
    const newCar = { ...input, id: Math.random().toString(36).substr(2, 9) };
    return HttpResponse.json({
      data: {
        createCar: newCar,
      },
    });
  }),
];
