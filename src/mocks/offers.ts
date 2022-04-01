import { Cities } from '../types/offers';

export const offers :Cities = [
  {
    city: 'Amsterdam',
    offers: [
      {
        id: 1,
        name: 'Beautiful & luxurious apartment at great location',
        price: 120,
        rating: 4.8,
        isPremium: true,
        coords: [234, 234],
        host: {
          name: 'Angelina',
          status: 'Pro',
          photo: 'img/avatar-angelina.jpg',
        },
        description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
        photos: [
          'img/room.jpg',
          'img/apartment-01.jpg',
          'img/apartment-02.jpg',
          'img/apartment-03.jpg',
          'img/studio-01.jpg',
        ],
        details: {
          type: 'Apartament',
          bedrooms: 3,
          maxAdults: 4,
        },
        facilities: [
          'Wi-Fi',
          'Washing machine',
          'Towels',
          'Heating',
          'Coffee machine',
          'Baby seat',
          'Kitchen',
          'Dishwasher',
          'Cabel TV',
          'Fridge',
        ],
      },
      {
        id: 2,
        name: 'Wood and stone place',
        price: 80,
        rating: 3,
        isPremium: false,
        coords: [234, 234],
        host: {
          name: 'John',
          status: 'Basic',
          photo: 'img/avatar-angelina.jpg',
        },
        description: 'Красивая квартира с видомна мканалы и булдочнубю.' ,
        photos: [
          'img/apartment-03.jpg',
          'img/room.jpg',
          'img/studio-01.jpg',
          'img/apartment-01.jpg',
        ],
        details: {
          type: 'Apartament',
          bedrooms: 2,
          maxAdults: 3,
        },
        facilities: [
          'Baby seat',
          'Kitchen',
          'Dishwasher',
          'Wi-Fi',
        ],
      },

    ],
  },
  {
    city: 'Cologne',
    offers: [
      {
        id: 3,
        name: 'Nice, cozy, warm big bed apartment',
        price: 180,
        rating: 4.8,
        isPremium: true,
        coords: [234, 234],
        host: {
          name: 'Sasha',
          status: 'Pro',
          photo: 'img/avatar-angelina.jpg',
        },
        description: 'Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
        photos: [
          'img/apartment-02.jpg',
          'img/apartment-01.jpg',
          'img/apartment-01.jpg',
          'img/apartment-03.jpg',
          'img/studio-01.jpg',
        ],
        details: {
          type: 'Apartament',
          bedrooms: 3,
          maxAdults: 4,
        },
        facilities: [
          'Wi-Fi',
          'Kitchen',
          'Cabel TV',
          'Fridge',
          'Heating',
          'Coffee machine',
        ],
      },
    ],
  },
  {
    city: 'Paris',
    offers: [  {
      id: 4,
      name: 'Canal View Prinsengracht',
      price: 132,
      rating: 4,
      isPremium: false,
      coords: [234, 234],
      host: {
        name: 'Oleg',
        status: 'Pro',
        photo: 'img/avatar-angelina.jpg',
      },
      description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      photos: [
        'img/apartment-01.jpg',
        'img/studio-01.jpg',
        'img/room.jpg',
      ],
      details: {
        type: 'Apartaments',
        bedrooms: 1,
        maxAdults: 3,
      },
      facilities: [
        'Wi-Fi',
        'Washing machine',
        'Fridge',
      ],
    }],
  },
];

