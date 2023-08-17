import React from 'react';
import './review.css'

const ReviewList = () => {
  const reviews = [
    {
      id: 1,
      author: 'John Doe',
      content: 'Excellent product! I am really impressed with the quality and features.',
      rating:'5.0'    
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'This has been a game-changer for me. Highly recommended!',
      rating:'5.0'
    },
    {
      id: 3,
      author: 'Sam Johnson',
      content: 'I can\'t imagine my life without this product now. So glad I found it!',
      rating:'5.0'
    },
    {
        id: 4,
        author: 'Sam Johnson',
        content: 'I can\'t imagine my life without this product now. So glad I found it!',
        rating:'5.0'
    },
      {
        id: 5,
        author: 'Sam Johnson',
        content: 'I can\'t imagine my life without this product now. So glad I found it!',
        rating:'5.0'
    },
  ];
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className='review-container'>
    <h1 className='plan-heading'> Clients' Review </h1>
    <div className="review-list ">
      {duplicatedReviews.map((review) => (
        <div className="review-card" key={review.id}>
        <h1 className="review-author">{review.author}</h1>
        <div className="review-content">{review.content}</div>
        <div className="review-rating">Rating: {review.rating}</div>
      </div>
      ))}
    </div>
    </div>
  );
};

export default ReviewList;
