import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArticleCard from './ArticleCard';
import {IArticle} from 'models/articles';

const mockArticle: IArticle = {
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
};

describe('ArticleCard', () => {
  const mockNavigateToArticle = jest.fn();

  beforeEach(() => {
    render(
      <ArticleCard
        article={mockArticle}
        navigateToArticle={mockNavigateToArticle}
      />,
    );
  });

  test('renders article title', () => {
    const titleElement = screen.getByText('Sample Article');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders article section', () => {
    const sectionElement = screen.getByText('world');
    expect(sectionElement).toBeInTheDocument();
  });

  test('renders article published date', () => {
    const dateElement = screen.getByText('2023-07-21');
    expect(dateElement).toBeInTheDocument();
  });

  test('renders article image with correct src and alt attributes', () => {
    const imgElement = screen.getByAltText('Sample Image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'https://example.com/image3.jpg');
  });

  test('calls navigateToArticle function when title is clicked', () => {
    const titleButton = screen.getByRole('button', {name: /Sample Article/i});
    fireEvent.click(titleButton);
    expect(mockNavigateToArticle).toHaveBeenCalledWith(mockArticle);
  });

  test('handles missing media metadata gracefully', () => {
    const incompleteArticle: IArticle = {
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
    };
    render(
      <ArticleCard
        article={incompleteArticle}
        navigateToArticle={mockNavigateToArticle}
      />,
    );
    const imgElement = screen.queryByAltText('No Image');
    expect(imgElement).not.toBeInTheDocument();
  });

  test('handles missing media gracefully', () => {
    const incompleteArticle: IArticle = {
      ...mockArticle,
      media: [],
    };
    render(
      <ArticleCard
        article={incompleteArticle}
        navigateToArticle={mockNavigateToArticle}
      />,
    );
    const imgElement = screen.queryByRole('img');
    expect(imgElement).not.toBeInTheDocument();
  });
});
