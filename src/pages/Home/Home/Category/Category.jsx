import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCart from "../NewsCart";

const Category = () => {
  const { id } = useParams();
  const cataNews = useLoaderData();
  return (
    <div>
      {id && <h4> This category have {cataNews.length} news</h4>}
      {cataNews.map((news) => (
        <NewsCart key={news._id} news={news}></NewsCart>
      ))}
    </div>
  );
};

export default Category;
