import React,{useState} from "react";
import Navbar from "../Navbar";
import { Star } from "./Star";

function Review() {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
    console.log("Selected rating:", rating);
  };
  return (
    <>
    <Navbar/>
    <div className="max-w-lg mx-auto p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-4">
  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Submit a Review</h2>
  
  <form>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="review">
        Your Review
      </label>
      <textarea
        id="review"
        rows="3" /* Reduced height */
        className="w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
        placeholder="Write your review here..."
      ></textarea>
    </div>
    <Star onRatingSelect={handleRatingSelect}/>
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Upload Images
      </label>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-48 md:h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </div>

    <button
      type="submit"
      className="w-full px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Submit Review
    </button>
  </form>
</div>


    </>
  );
}

export default Review;
