import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


export const Post = ({ post }) => {
  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: <Link to={`/users/${post.userProfileId}`}>{post.userProfile.name}</Link></p>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
        <p>
          <Link to={`/posts/${post.id}`}>
          <strong>{post.title}</strong>
          </Link>
        </p>
        <p>{post.caption}</p>
      </CardBody>
      <h3>Comments</h3>
        {post.comments && post.comments.length > 0 ? 
        (post.comments.map((comment) => 
          (<div key={comment.id} className="comment"
              style={{textAlign: 'left'}}>
            <p>• {comment.message}</p>
          </div>))
        ) : (
          <p>No comments for this post.</p>
        )}
    </Card>
  );
};