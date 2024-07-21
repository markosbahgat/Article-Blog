import ArticleCard from 'components/ArticleCard/ArticleCard';
import {IArticle} from 'models/articles';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {articlesState, setShowedArticle} from 'slices';
import {useAppDispatch, useAppSelector} from 'store/hooks';

const Home: React.FC = () => {
  const {articles} = useAppSelector(articlesState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const navigateToArticle = (article: IArticle) => {
    dispatch(setShowedArticle(article));
    navigate(`/article/${article.id}`);
  };
  return (
    <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 " id="home">
      <div className="relative mt-8">
        <div className="relative -mb-6 w-full overflow-x-auto pb-6">
          <ul
            role="list"
            className="mx-4 flex flex-row flex-wrap items-start justify-center space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0">
            {articles.map(article => (
              <li
                key={article.id}
                className="inline-flex w-64 flex-col text-center lg:w-auto my-6">
                <ArticleCard
                  article={article}
                  navigateToArticle={navigateToArticle}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;
