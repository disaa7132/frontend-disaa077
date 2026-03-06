// Lab_04/task2/ArticleManager.jsx
import React, { useState } from 'react';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';

export default function ArticleManager() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeSummary = (e) => setSummary(e.target.value);

  const onClickAdd = () => {
    if (!title.trim() || !summary.trim()) return;
    const newArticle = {
      id: Date.now().toString(),
      title,
      summary
    };
    setArticles([...articles, newArticle]);
    setTitle('');
    setSummary('');
  };

  const onClickRemove = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  return (
    <div>
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={onChangeTitle}
        onChangeSummary={onChangeSummary}
        onClickAdd={onClickAdd}
      />
      <ArticleList
        articles={articles}
        onClickRemove={onClickRemove}
      />
    </div>
  );
}