import React, { useState } from "react";
import { useEffect } from "react";
import { BsStarFill } from "react-icons/bs";

const AddCourse = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const [form, setForm] = useState({
    title: "",
    author: "",
    rating: "",
    basicPrice: "",
    thumbnail: "",
    videoLink: "",
    categoryId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", form);
  };

  return (
    <div>
      <h3 className="text-3xl">Add Course</h3>

      <div className=" mt-5">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                className="w-full input input-bordered"
                name="title"
                value={form.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="author">Author:</label>
              <input
                type="text"
                id="author"
                className="w-full input input-bordered"
                name="author"
                value={form.author}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="rating"
                className="flex items-center justify-between"
              >
                Rating:{" "}
                <p className="flex items-center font-bold">
                  {form.rating} <BsStarFill className="text-yellow-500" />
                </p>
              </label>
              <input
                type="range"
                id="rating"
                className="w-full mt-2"
                name="rating"
                value={form.rating}
                onChange={handleChange}
                min="0"
                max="5"
              />
            </div>
            <div>
              <label htmlFor="basicPrice">Price:</label>
              <input
                type="number"
                id="basicPrice"
                className="w-full input input-bordered"
                name="basicPrice"
                value={form.basicPrice}
                onChange={handleChange}
                step="0.01"
              />
            </div>
            <div>
              <label htmlFor="thumbnail">Thumbnail URL:</label>
              <input
                type="url"
                id="thumbnail"
                className="w-full input input-bordered"
                name="thumbnail"
                value={form.thumbnail}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="videoLink">Video Link:</label>
              <input
                type="url"
                id="videoLink"
                className="w-full input input-bordered"
                name="videoLink"
                value={form.videoLink}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="categoryId">Category</label>
              <select
                id="categoryId"
                className="w-full input input-bordered"
                name="categoryId"
                value={form.categoryId}
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <option value={category.id}>{category?.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <button
              className="btn bg-sky-600 text-white mt-5 w-full"
              type="submit"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
