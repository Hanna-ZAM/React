export type ProductType = {
  id: string;
  title: string;
  author: string;
  likes: number;
  views: number;
  checked: boolean;
  category: string;
  image:string ;
};
type ProductsListType = {
  products: Array<ProductType>;
  total: number;
};

const productsList: ProductsListType = {
  products: [
    {
      id: 'card1',
      title: 'Lady in coat',
      author: 'Richard Stachmann',
      likes: 549,
      views: 1296,
      checked: false,
      category: 'people',
      image: 'https://source.unsplash.com/1600x900/?lady,coat',
    },
    {
      id: 'card2',
      title: 'Lady in black',
      author: 'Omid Armin',
      likes: 59,
      views: 126,
      checked: false,
      category: 'people',
      image: 'https://source.unsplash.com/1600x900/?lady,black',
    },
    {
      id: 'card3',
      title: 'Red bench',
      author: 'zero take',
      likes: 49,
      views: 296,
      checked: false,
      category: 'city',
      image: 'https://source.unsplash.com/1600x900/?bench,red',
    },
    {
      id: 'card4',
      title: 'Wheels',
      author: 'zero take',
      likes: 159,
      views: 4126,
      checked: false,
      category: 'city',
      image: 'https://source.unsplash.com/1600x900/?wheels',
    },
    {
      id: 'card5',
      title: 'Lavanda in photo',
      author: 'Brian Breeden',
      likes: 549,
      views: 1296,
      checked: false,
      category: 'nature',
      image: 'https://source.unsplash.com/1600x900/?lavanda,flowers',
    },
    {
      id: 'card6',
      title: 'Road and people',
      author: 'Katie Drazdauskaite',
      likes: 59,
      views: 126,
      checked: false,
      category: 'people',
      image: 'https://source.unsplash.com/1600x900/?road,people',
    },
    {
      id: 'card7',
      title: 'Blue bench',
      author: 'Hoyoung Choi',
      likes: 49,
      views: 296,
      checked: false,
      category: 'nature',
      image: 'https://source.unsplash.com/1600x900/?blue,bench',
    },
    {
      id: 'card8',
      title: 'Biutifull flowers',
      author: 'Hoyoung Choi',
      likes: 159,
      views: 4126,
      checked: false,
      category: 'nature',
      image: 'https://source.unsplash.com/1600x900/?flowers',
    },
    {
      id: 'card9',
      title: 'Bridge',
      author: 'Joshua Earle',
      likes: 159,
      views: 4126,
      checked: false,
      category: 'city',
      image: 'https://source.unsplash.com/1600x900/?bridge',
    },
   
  ],
  total: 9,
};
export default productsList;
