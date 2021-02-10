import HomePage from './HomePage'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
}

const exampleCards = [
  {
    question: 'This could be your question',
    answer: 'This could be your answer',
  },
  {
    question: 'This could be your question',
    answer: 'This could be your answer',
  },
]

export const base = () => HomePage(exampleCards).el
