import React, { useState, useEffect } from 'react'

// article data
import articleContent from './article-content';
// components
import ArticleList from '../components/ArticleList';
import CommentsList from '../components/CommentsList';
import UpvoteSection from '../components/UpvoteSection';
import AddCommentForm from '../components/AddCommentForm';
// pages
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  const [articleInfo, setArticleInfo] = useState ({ upvotes: 0, comments : [] });

  // The following will only execute useEffect when it loads
  // useEffect(() => { setSomething }, [] )

  // execute useEffect when [name] changes
  useEffect(() => {
    // fetch current data function
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    }
    fetchData();
  }, [name] );

  if(!article) { return <NotFoundPage /> };

  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <>
    {/* <> equal to <React.fragment> to bundle all elements to export */}
      <h1>{article.title}</h1>
      <UpvoteSection
        articleName={name}
        upvotes={articleInfo.upvote}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph,key) => (
        <p key={key}>{paragraph}</p>
      )) }
      { articleInfo.comments &&
        <CommentsList comments={articleInfo.comments} />
      }
      <AddCommentForm
        articleName={name}
        upvotes={articleInfo.upvote}
        setArticleInfo={setArticleInfo}
      />
      <h3>Related Articles:</h3>
      <ArticleList articles={otherArticles} />
    </>
  )
}

export default ArticlePage;
