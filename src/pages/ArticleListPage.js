import React from 'react'

// article data
import articleContent from './article-content';
import ArticleList from '../components/ArticleList';

const ArticleListPage = () => {

  return (
    <>
    {/* <> equal to <React.fragment> to bundle all elements to export */}
      <h1>Articles</h1>
        <ArticleList articles={articleContent} />
    </>
  )
}

export default ArticleListPage;
