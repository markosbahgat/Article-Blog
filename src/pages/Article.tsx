import {PencilIcon} from '@heroicons/react/20/solid';
import {articlesState} from 'slices';
import {useAppSelector} from 'store/hooks';
import React from 'react';

const Article: React.FC = () => {
  const {showedArticle} = useAppSelector(articlesState);
  return (
    <div
      className="relative isolate overflow-hidden bg-[color:var(--title)] px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="article-page">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                {showedArticle?.section}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[color:var(--background)] sm:text-4xl">
                {showedArticle?.title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-[color:var(--text-subtitle)]">
                {showedArticle?.abstract}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={showedArticle?.media[0]['media-metadata'][2].url}
            className="w-[48rem] max-w-none rounded-xl bg-[color:var(--background)] shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-[color:var(--text-subtitle)] lg:max-w-lg">
              <ul className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                {showedArticle?.adx_keywords.split(';').map(item => (
                  <li key={item} className="text-gray-500 list-disc">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-xl font-bold tracking-tight text-[color:var(--background)] flex gap-3">
                <PencilIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                {showedArticle?.byline}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Article;
