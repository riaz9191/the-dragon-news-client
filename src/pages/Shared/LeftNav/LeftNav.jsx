import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditorForHome from "../../News/EditorForHome";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);
  return (
   <div>
     <div>
      <h4>All Category</h4>
      <div className="ps-4 pt-2">
        {categories.map((categorie) => (
          <p key={categorie.id}>
            <Link to={`/category/${categorie.id}`} className="text-decoration-none text-secondary ">{categorie.name}</Link>
          </p>
        ))}
      </div>
    </div>
    <div>
      <EditorForHome></EditorForHome>
    </div>
   </div>
    
  );
};

export default LeftNav;
