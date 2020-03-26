import React, { Component } from 'react';
import BlogHeader from './../components/BlogHeader';
import BlogArtikel from './../components/BlogArtikel';

class Blog extends Component {
  render() {
    return (
      <div className="hakita-body">
        <BlogHeader />
        <BlogArtikel />
      </div>
    )
  }
}

export default Blog;
