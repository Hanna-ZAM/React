import './form.css';

export type CardType = {
  title: string;
  author: string;
  date: string;
  isAgree: boolean;
  gender: string;
  genderCheck?: boolean;
  category: string;
  file: string;
};
type ResultType = {
  title: boolean;
  author: boolean;
  date: boolean;
  isAgree: boolean;
  gender: boolean;
  category: boolean;
  file: boolean;
};

export function validation(card: CardType) {
  const result: ResultType = {
    title: true,
    author: true,
    date: true,
    isAgree: true,
    gender: true,
    category: true,
    file: true,
  };
  if (!card.title || card.title.length < 3) {
    console.log('wrong title');
    result.title = false;
  }
  if (
    !card.author ||
    card.author.length < 3 ||
    card.author[0].toLocaleLowerCase() === card.author[0]
  ) {
    console.log('wrong author');
    result.author = false;
  }
  if (!(card.date.split('-').length === 3) || new Date(Date.now()) < new Date(card.date)) {
    console.log('wrong date');
    result.date = false;
  }
  if (!card.isAgree) {
    console.log(card.isAgree);
    result.isAgree = false;
  }
  if (!card.genderCheck) {
    console.log('wrong file');
    result.gender = false;
  }
  if (!card.file) {
    console.log('wrong file');
    result.file = false;
  }
  return result;
}
