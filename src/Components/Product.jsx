import React, { useState } from 'react';

function Product() {
  // State to manage the cart count and button text
  const [cartUseCxt, setCartUseCxt] = useState(0);
  const [buttonText, setButtonText] = useState('Add to Cart');

  const handleClick = () => {
    if (buttonText === 'Add to Cart') {
      // Increment cart count and change button text
      setCartUseCxt(cartUseCxt + 1);
      setButtonText('Remove from Cart');
    } else {
      // Decrement cart count and change button text
      setCartUseCxt(cartUseCxt - 1);
      setButtonText('Add to Cart');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default Product;
