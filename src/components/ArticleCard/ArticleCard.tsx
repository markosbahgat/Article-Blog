import {IArticle} from 'models/articles';
import React from 'react';

type Props = {
  article: IArticle;
  navigateToArticle: (article: IArticle) => void;
};

const ArticleCard: React.FC<Props> = ({article, navigateToArticle}) => {
  return (
    <div className="group relative" id="article-card">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
        <img
          alt={article.media[0]?.caption}
          src={article.media[0]?.['media-metadata']?.[2]?.url}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-6">
        <p className="text-sm text-gray-500 capitalize" id="article-abstract">
          {article.nytdsection}
        </p>
        <h3 className="mt-1 font-semibold text-[color:var(--background)]">
          <button onClick={() => navigateToArticle(article)} id="article-h2">
            {article.title}
          </button>
        </h3>
        <p className="mt-1 text-[color:var(--background)]">
          {article.published_date}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
