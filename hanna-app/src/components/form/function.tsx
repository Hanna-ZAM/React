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
    result.title = false;
  }
  if (
    !card.author ||
    card.author.length < 3 ||
    card.author[0].toLocaleLowerCase() === card.author[0]
  ) {
    result.author = false;
  }
  if (!(card.date.split('-').length === 3) || new Date(Date.now()) < new Date(card.date)) {
    result.date = false;
  }
  if (!card.isAgree) {
    result.isAgree = false;
  }
  if (!card.genderCheck) {
    result.gender = false;
  }
  if (!card.file) {
    result.file = false;
  }
  return result;
}
