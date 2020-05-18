import React from 'react'

// article data
import articleContent from './article-content';
// components
import ArticleList from '../components/ArticleList';
// pages
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  if(!article) { return <NotFoundPage /> };

  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <>
    {/* <> equal to <React.fragment> to bundle all elements to export */}
      <h1>{article.title}</h1>
      {article.content.map((paragraph,key) => (
        <p key={key}>{paragraph}</p>
      )) }
      <h3>Related Articles:</h3>
      <ArticleList articles={otherArticles} />

    </>
  )
}

export default ArticlePage;
