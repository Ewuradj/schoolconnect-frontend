import React, { useState } from 'react';

const ReviewForm = () => {
  const [review, setReview] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission
    // You can send the review data to your API or handle it as per your requirements
    console.log(review);

    // Reset the form fields
    setReview({ name: '', email: '', message: '' });
  };

  return (
    <div className="review-form">
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={review.name}
            onChange={handleChange}
            required
            className="review-input"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={review.email}
            onChange={handleChange}
            required
            className="review-input"
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={review.message}
            onChange={handleChange}
            required
            className="review-textarea"
          ></textarea>
        </label>
        <br />
        <button type="submit" className="review-submit-button">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;