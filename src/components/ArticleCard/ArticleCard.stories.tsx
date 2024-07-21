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
    uri: 'nyt://article/fb6dd3db-5b01-55e2-9bae-054b3ede8539',
    url: 'https://www.nytimes.com/2024/07/14/us/politics/trump-gunman-thomas-crooks.html',
    id: 100000009570437,
    asset_id: 100000009570437,
    source: 'New York Times',
    published_date: '2024-07-14',
    updated: '2024-07-15 14:00:11',
    section: 'U.S.',
    subsection: 'Politics',
    nytdsection: 'u.s.',
    adx_keywords:
      'Assassinations and Attempted Assassinations;United States Politics and Government;Presidential Election of 2024;Trump, Donald J;Crooks, Thomas Matthew (2003-24);Butler (Pa)',
    column: '',
    byline:
      'By Campbell Robertson, Jack Healy, Nicholas Bogel-Burroughs and Glenn Thrush',
    type: 'Article',
    title:
      'Here’s What Is Known About the Suspect Who Tried to Assassinate Trump',
    abstract:
      'Authorities identified the gunman as a 20-year-old man from Bethel Park, Pa., a town about an hour’s drive from the site of the shooting.',
    des_facet: [
      'Assassinations and Attempted Assassinations',
      'United States Politics and Government',
      'Presidential Election of 2024',
    ],
    org_facet: [],
    per_facet: ['Trump, Donald J', 'Crooks, Thomas Matthew (2003-24)'],
    geo_facet: ['Butler (Pa)'],
    media: [
      {
        type: 'image',
        subtype: 'photo',
        caption: 'Bethel Park, Pa., a suburb south of Pittsburgh.',
        copyright: 'Kristian Thacker for The New York Times',
        approved_for_syndication: 1,
        'media-metadata': [
          {
            url: 'https://static01.nyt.com/images/2024/07/14/multimedia/14election-live-gunman-profile-wtqg/14election-live-gunman-profile-wtqg-thumbStandard.jpg',
            format: 'Standard Thumbnail',
            height: 75,
            width: 75,
          },
          {
            url: 'https://static01.nyt.com/images/2024/07/14/multimedia/14election-live-gunman-profile-wtqg/14election-live-gunman-profile-wtqg-mediumThreeByTwo210.jpg',
            format: 'mediumThreeByTwo210',
            height: 140,
            width: 210,
          },
          {
            url: 'https://static01.nyt.com/images/2024/07/14/multimedia/14election-live-gunman-profile-wtqg/14election-live-gunman-profile-wtqg-mediumThreeByTwo440.jpg',
            format: 'mediumThreeByTwo440',
            height: 293,
            width: 440,
          },
        ],
      },
    ],
    eta_id: 0,
  },
  navigateToArticle: (article: IArticle) => {
    alert(`Navigating to article: ${article.title}`);
  },
};

export const NoMedia = Template.bind({});
NoMedia.args = {
  article: {
    uri: 'nyt://article/fb6dd3db-5b01-55e2-9bae-054b3ede8539',
    url: 'https://www.nytimes.com/2024/07/14/us/politics/trump-gunman-thomas-crooks.html',
    id: 100000009570437,
    asset_id: 100000009570437,
    source: 'New York Times',
    published_date: '2024-07-14',
    updated: '2024-07-15 14:00:11',
    section: 'U.S.',
    subsection: 'Politics',
    nytdsection: 'u.s.',
    adx_keywords:
      'Assassinations and Attempted Assassinations;United States Politics and Government;Presidential Election of 2024;Trump, Donald J;Crooks, Thomas Matthew (2003-24);Butler (Pa)',
    column: '',
    byline:
      'By Campbell Robertson, Jack Healy, Nicholas Bogel-Burroughs and Glenn Thrush',
    type: 'Article',
    title:
      'Here’s What Is Known About the Suspect Who Tried to Assassinate Trump',
    abstract:
      'Authorities identified the gunman as a 20-year-old man from Bethel Park, Pa., a town about an hour’s drive from the site of the shooting.',
    des_facet: [
      'Assassinations and Attempted Assassinations',
      'United States Politics and Government',
      'Presidential Election of 2024',
    ],
    org_facet: [],
    per_facet: ['Trump, Donald J', 'Crooks, Thomas Matthew (2003-24)'],
    geo_facet: ['Butler (Pa)'],
    media: [
      {
        type: 'image',
        subtype: 'photo',
        caption: 'Bethel Park, Pa., a suburb south of Pittsburgh.',
        copyright: 'Kristian Thacker for The New York Times',
        approved_for_syndication: 1,
        'media-metadata': [
          {
            url: 'https://static01.nyt.com/images/2024/07/14/multimedia/14election-live-gunman-profile-wtqg/14election-live-gunman-profile-wtqg-thumbStandard.jpg',
            format: 'Standard Thumbnail',
            height: 75,
            width: 75,
          },
          {
            url: 'https://static01.nyt.com/images/2024/07/14/multimedia/14election-live-gunman-profile-wtqg/14election-live-gunman-profile-wtqg-mediumThreeByTwo210.jpg',
            format: 'mediumThreeByTwo210',
            height: 140,
            width: 210,
          },
          {
            url: 'https://static01.nyt.com/images/2024/07/14/multimedia/14election-live-gunman-profile-wtqg/14election-live-gunman-profile-wtqg-mediumThreeByTwo440.jpg',
            format: 'mediumThreeByTwo440',
            height: 293,
            width: 440,
          },
        ],
      },
    ],
    eta_id: 0,
  },
  navigateToArticle: (article: IArticle) => {
    alert(`Navigating to article: ${article.title}`);
  },
};
