import React from 'react';

const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    }

  return (
    <div id="upvote-section">
      <button onClick={() => upvoteArticle()}>Upvote</button>
      <p> This article has been upvoted { upvotes } times</p>
    </div>
  );
}

export default UpvoteSection;
