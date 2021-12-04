import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import BlogAuthor from "../blog-author";
import { Link } from "react-router-dom";
import "./styles.css";
// export default class BlogItem extends Component {
const BlogItem = (props) => { 

  const deleteBlog = async (blogID) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/blogPosts/${blogID}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("Delete");
        // const resp = await response.json()
      } else {
        alert("somethin wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  // render() {
    // const { title, cover, author, _id } = this.props;
    const { title, cover, author, _id } = props;
    return (
      <>
      <Link to={`/blog/${_id}`} className="blog-link">
        <Card className="blog-card">
          <Card.Img variant="top" src={cover} className="blog-cover" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <BlogAuthor {...author} />
          </Card.Footer>
        </Card>
      </Link>
      <Button className="delete" onClick={()=> deleteBlog(_id)}>Delete</Button>
      </>
    );
  // }
}
export default BlogItem