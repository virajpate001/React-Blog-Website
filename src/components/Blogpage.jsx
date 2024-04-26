import React, { useState } from "react";
import BlogPagnation from "./BlogPagnation";
import BlogCard from "./BlogCard";
import BlogCategory from "./BlogCategory";
import Sidebar from "./Sidebar";
import Test from "./Test";

const Blogpage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const pageSize = 12; //blog per page
  const [selectCategory, setSelectcategory] = useState(null);
  const [activeCategory, setActvecategory] = useState(null);

  useState(() => {
    async function fetchBlog() {
      let url = `https://dummyjson.com/products?page=${currentPage}&limit=${pageSize}`;

      // filter by category

      if (selectCategory) {
        url += `&category${selectCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      setProducts(data.products);
    }

    fetchBlog();
  }, [currentPage, pageSize, selectCategory]);

  // Page Chnagng btn
  const handlePagechange = (pageNumber) => {
    setCurrentpage(pageNumber);
  };

  //category change btn
  const handleCategoryChange = (category) => {
    setSelectcategory(category);
    setCurrentpage(1);
    setActvecategory(category);
  };

  return (
    <>
      {/* Blog Category Section */}
      <div>
        <BlogCategory
          OnSelectCategory={handleCategoryChange}
          selectCategory={selectCategory}
          activeCategory={activeCategory}
        />
      </div>
      {/* Blog card sec */}
      <div className="flex flex-col lg:flex-row gap-12">
        <BlogCard products={products} />

        <Sidebar />
      </div>

      {/* Blog Pagination sec */}
      <div>
        <BlogPagnation
          onPageChange={handlePagechange}
          currentPage={currentPage}
          products={products}
          pageSize={pageSize}
        />
      </div>
    </>
  );
};

export default Blogpage;
