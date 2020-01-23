import React, { FunctionComponent } from 'react';
import { Asset } from 'contentful';

export interface BlogPostObject {
  title: string;
  image: Asset;
}

const BlogPost: FunctionComponent<BlogPostObject> = ({ title, image }: BlogPostObject) => (
  <div>
    <h4>{title}</h4>
  </div>
);

export default BlogPost;
