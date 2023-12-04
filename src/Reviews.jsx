import React , { useState, useEffect} from "react";
import "./styles/Reviews.css";

const Reviews = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;  // сколько всего интервью на странице
    const startIndex = (currentPage - 1) * itemsPerPage;
    const totalPages = 2;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 600);
        };
        // Проверяем при загрузке и при изменении размера окна
        handleResize();
        window.addEventListener("resize", handleResize);
    
        // Очищаем слушатель событий при размонтировании компонента
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    // сами интервью
    const reviews = [
        {
            photo: './online_toy_store_app/images/for-reviews/img1.png',
            name: 'Sam Cromstain',
            text: ' This saves so much time! Dont know how I managed without it before. First time use recently, have now used the item several times - a great way to have instant results. Great value, easy to follow instructions.',
        },
        {
            photo: './online_toy_store_app/images/for-reviews/img2.png',
            name: 'Kerry Lorem',
            text: 'Skyline is truly the best template ever produced by the Kids team. I love its design, the number of pages inside and the fact that I can edit my site myself. Thanks.',
        },
        {
            photo: './online_toy_store_app/images/for-reviews/img3.png',
            name: 'Tanmay Shukls',
            text: 'The products of your store are the perfect combination of a real reliability and durability. All goods have a great number of advantages and it is very important for the customers. Thank your store for quick delivery.',
        },
        {
            photo: './online_toy_store_app/images/for-reviews/img4.jpg',
            name: 'Emily Sparkle',
            text: 'These toys are magical! My kids absolutely love them. The quality is fantastic, and the variety of options keeps them entertained for hours. Highly recommended',
        },
        {
            photo: './online_toy_store_app/images/for-reviews/img5jpg.jpg',
            name: 'Daniel Playwell',
            text: 'Our experience with this store has been amazing. The toys are not only fun but also educational. My children are learning and having a blast at the same time. Excellent service and fast delivery',
        },
        {
            photo: './online_toy_store_app/images/for-reviews/img6.jpg',
            name: 'Olivia Joyful',
            text: 'Im thrilled with the purchase! The toys are adorable, and the attention to detail is impressive. The website is user-friendly, making the shopping experience delightful. Will definitely shop here again',
        },
        
    ];
    const handleNextPage = () => {
        setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
      };
      const handlePrevPage = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
      };

      return (
        <>
          <div className="reviews-container">
            <div className="text">
              <h3>People Talk About Us</h3>
              <p>Made with care for your little ones, our products are perfect for every occasion. Check it out.</p>
            </div>
            {reviews.slice(startIndex, startIndex + itemsPerPage).map((review, index) => (
              <div key={index} className="review">
                <div className="review-header">
                  <img src={review.photo} alt={review.name} className="review-photo" />
                  <div className="review-info">
                    <h3 className="review-name">{review.name}</h3>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
            {!isMobile && (
              <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                  Prev
                </button>
                <span>{currentPage}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                  Next
                </button>
              </div>
            )}
          </div>
        </>
      );
}
export default Reviews;
