import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/CartSlice';

/* ---------- Plant Data with UNIQUE IDs ---------- */

const plantsData = [
  {
    category: '🌿 Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', price: 15, image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_640.jpg' },
      { id: 2, name: 'Spider Plant', price: 12, image: 'https://cdn.pixabay.com/photo/2015/07/29/00/10/spider-plant-865364_640.jpg' },
      { id: 3, name: 'Peace Lily', price: 18, image: 'https://cdn.pixabay.com/photo/2016/11/29/10/09/peace-lily-1868691_640.jpg' },
      { id: 4, name: 'Boston Fern', price: 20, image: 'https://cdn.pixabay.com/photo/2014/03/03/16/15/fern-279004_640.jpg' },
      { id: 5, name: 'Rubber Plant', price: 22, image: 'https://cdn.pixabay.com/photo/2020/03/27/13/07/rubber-tree-plant-4973573_640.jpg' },
      { id: 6, name: 'Aloe Vera', price: 14, image: 'https://cdn.pixabay.com/photo/2018/09/08/11/46/aloe-3662440_640.jpg' },
    ],
  },
  {
    category: '🌸 Tropical Plants',
    plants: [
      { id: 7, name: 'Monstera Deliciosa', price: 30, image: 'https://cdn.pixabay.com/photo/2019/11/14/11/03/monstera-4626596_640.jpg' },
      { id: 8, name: 'Bird of Paradise', price: 35, image: 'https://cdn.pixabay.com/photo/2016/05/09/14/22/bird-of-paradise-flower-1381475_640.jpg' },
      { id: 9, name: 'Calathea', price: 25, image: 'https://cdn.pixabay.com/photo/2022/06/03/20/25/calathea-7241136_640.jpg' },
      { id: 10, name: 'Fiddle Leaf Fig', price: 28, image: 'https://cdn.pixabay.com/photo/2022/12/20/04/51/fiddle-leaf-fig-7667379_640.jpg' },
      { id: 11, name: 'Pothos', price: 10, image: 'https://cdn.pixabay.com/photo/2018/12/01/17/32/pothos-3849509_640.jpg' },
      { id: 12, name: 'Philodendron', price: 18, image: 'https://cdn.pixabay.com/photo/2020/06/23/04/18/philodendron-5331055_640.jpg' },
    ],
  },
  {
    category: '🌵 Succulents & Cacti',
    plants: [
      { id: 13, name: 'Echeveria', price: 8, image: 'https://cdn.pixabay.com/photo/2021/12/07/02/50/succulent-6851788_640.jpg' },
      { id: 14, name: 'Jade Plant', price: 12, image: 'https://cdn.pixabay.com/photo/2017/09/06/22/45/jade-plant-2723467_640.jpg' },
      { id: 15, name: 'Barrel Cactus', price: 16, image: 'https://cdn.pixabay.com/photo/2015/03/26/22/16/cactus-693890_640.jpg' },
      { id: 16, name: 'Haworthia', price: 10, image: 'https://cdn.pixabay.com/photo/2020/02/23/14/39/haworthia-4874024_640.jpg' },
      { id: 17, name: 'String of Pearls', price: 14, image: 'https://cdn.pixabay.com/photo/2022/04/24/13/30/succulent-7153561_640.jpg' },
      { id: 18, name: 'Zebra Plant', price: 11, image: 'https://cdn.pixabay.com/photo/2014/03/05/22/45/haworthia-280543_640.jpg' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Check if item already exists using ID (correct way)
  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  // Add item
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Our Plants Collection</h1>
      <p className="product-list-subtitle">
        Explore our handpicked selection of beautiful houseplants
      </p>

      {plantsData.map((category, index) => (
        <div key={index} className="category-section">
          <h2 className="category-title">{category.category}</h2>

          <div className="plants-grid">
            {category.plants.map((plant) => {
              const inCart = isInCart(plant.id);

              return (
                <div key={plant.id} className="plant-card">
                  <div className="plant-image-wrapper">
                    <img src={plant.image} alt={plant.name} className="plant-image" />
                  </div>

                  <div className="plant-info">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-price">${plant.price}</p>

                    <button
                      className={`add-to-cart-btn ${inCart ? 'added' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={inCart}
                    >
                      {inCart ? '✓ Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
