import React from 'react'

import Section from '../Section'
import articles from '../../../data/articles.json'
import ArticleListItem from './ArticleListItem'

const ArticlesSection = ({ anchor }) => (
  <Section title="Articles I've written" id={anchor}>
    {articles.map((article) => (
      <ArticleListItem article={article} />
    ))}
  </Section>
)

export default ArticlesSection
