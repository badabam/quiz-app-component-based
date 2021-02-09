import HomePage from './HomePage'

export default {
  title: 'HomePage',
  component: HomePage,
}

export const base = () =>
  HomePage([
    {
      question: 'This could be your question',
      answer: 'This could be your answer',
    },
  ]).el
