import mockjs from 'mockjs';

export default {
  '/api/home': mockjs.mock({
    'list|10': [
      {
        id: '@id()',
        img: '@image(500x500)',
        title: '@ctitle(5,10)',
        desc: '@ctitle(10,20)',
        'slide|3': [
          {
            id: '@id()',
            img: '@image(500x500)',
            title: '@ctitle(5,10)',
            price: '@integer(10, 100)',
          },
        ],
      },
    ],
  }),

  '/api/detail': mockjs.mock({
    img: '@image(500x500)',
    price: '@integer(10, 100)',
    title: '@ctitle(20,40)',
    desc: '@ctitle(50,100)',
  }),
};
