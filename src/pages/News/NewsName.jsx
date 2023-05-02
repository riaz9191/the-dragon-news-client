import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsides from "./EditorsInsides";

const NewsName = () => {
  const news = useLoaderData();
  const {_id, title, details, image_url, author, total_view, rating,category_id} = news;
  return (
   <div>
     <Card >
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}><Button  variant="primary"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
      </Card.Body>
    </Card>
    <EditorsInsides></EditorsInsides>
   </div>
  );
};

export default NewsName;
