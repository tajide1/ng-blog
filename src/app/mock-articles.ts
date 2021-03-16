import { Article } from "./article";

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'My first article',
    content: 'The iis a test for article one.',
    description: 'My forst article enjoy it.',
    key: 'my-first-article',
    date: new Date(),
    imageUrl: 'https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=326&h=183&c=7&o=5&dpr=1.5&pid=1.7'
  },
  {
    id: 2,
    title: 'My second article',
    content: 'This is a test for second article. enjoy it',
    description: 'My second article enjoy it.',
    key: 'my-second-article',
    date: new Date(),
    imageUrl: 'https://www.bing.com/th?id=OIP.ZMIkHl9meMnoVEQSbBgTBgHaEK&w=208&h=110&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
  }
]
