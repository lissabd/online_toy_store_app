import React, { useState, useEffect } from 'react';
import './styles/BrandGallery.css'; 

const BrandGallery = () => {
    const brands = [
      { id: 1, name: 'Lego',image: './online_toy_store_app/images/lego.png' },
      { id: 2, name: 'Hasbro',image: './online_toy_store_app/images/hasbro_logo_small.png' },
      { id: 3, name: 'Barbie', image: './online_toy_store_app/images/1200px_barbie_logo.svg.png' },
      { id: 4, image: './online_toy_store_app/images/hot_wheels_logos.png' },
      { id: 5, image: './online_toy_store_app/images/my-little-pony.png' },
      { id: 6, image: './online_toy_store_app/images/pop_logo.png' },
      { id: 7, image: './online_toy_store_app/images/logo_programme_rev_and_roll_2608eb_3130b2_0_1x.png' },
      { id: 8, image: './online_toy_store_app/images/spinmaster.png' },
      { id: 9, image: './online_toy_store_app/images/1.jpg' },
      { id: 10, image: './online_toy_store_app/images/mattels.png' },
      { id: 11, image: './online_toy_store_app/images/monopoly_ipad_logos.png' },
      { id: 12, image: './online_toy_store_app/images/dohvinci-logo_2.png' },
      { id: 13, image: './online_toy_store_app/images/paw_logos.png' },
      { id: 14, image: './online_toy_store_app/images/logo_goliaths.png' },
      { id: 15, image: './online_toy_store_app/images/logo.png' },
      { id: 16, image: './online_toy_store_app/images/logoplaydohs.png' },
      { id: 17, image: './online_toy_store_app/images/logo (1).png' },
      { id: 18, image: './online_toy_store_app/images/perplexus_logos.png' },
      { id: 19, image: './online_toy_store_app/images/logo (2).png' },
      { id: 20, image: './online_toy_store_app/images/markwins-beauty-collections-logo_invert.png' },
    ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = isMobile ? 10 : 10; 
  const totalPages = Math.ceil(brands.length / itemsPerPage);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleBrands = brands.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="brand-gallery-container">
      <h4>Brand Galery</h4>
      <div className={`brand-gallery ${isMobile ? 'mobile' : ''}`}>
        {visibleBrands.map((brand) => (
          <div key={brand.id} className="brand-item">
            <img src={brand.image} alt={brand.name} />
          </div>
        ))}
      </div>
      {!isMobile && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            &lt; Prev
          </button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default BrandGallery;
