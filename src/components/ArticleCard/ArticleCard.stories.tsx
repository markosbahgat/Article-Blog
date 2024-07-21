// src/components/ArticleCard.stories.tsx

import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import ArticleCard from './ArticleCard';
import {IArticle} from 'models/articles';

export default {
  title: 'Components/ArticleCard',
  component: ArticleCard,
} as Meta;

const Template: StoryFn<{
  article: IArticle;
  navigateToArticle: (article: IArticle) => void;
}> = args => <ArticleCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  article: {
    title: 'Sample Article',
    nytdsection: 'world',
    published_date: '2023-07-21',
    media: [
      {
        'media-metadata': [
          {url: 'https://example.com/image1.jpg'},
          {url: 'https://example.com/image2.jpg'},
          {url: 'https://example.com/image3.jpg'},
        ],
        caption: 'Sample Image',
      },
    ],
  },
  navigateToArticle: (article: IArticle) => {
    alert(`Navigating to article: ${article.title}`);
  },
};

export const NoMedia = Template.bind({});
NoMedia.args = {
  article: {
    title: 'Article Without Media',
    nytdsection: 'technology',
    published_date: '2023-07-22',
    media: [],
  },
  navigateToArticle: (article: IArticle) => {
    alert(`Navigating to article: ${article.title}`);
  },
};
