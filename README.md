# 🌿 Paradise Nursery

A **React-based e-commerce web application** for selling houseplants. Browse a curated collection of beautiful indoor plants organized by category, add them to your cart, and manage your shopping experience.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Redux](https://img.shields.io/badge/Redux_Toolkit-1.9-purple?logo=redux)
![Router](https://img.shields.io/badge/React_Router-6-red?logo=reactrouter)

---

## ✨ Features

### 🏠 Landing Page
- Beautiful hero section with background image
- Animated title and call-to-action button
- Glassmorphism navigation bar

### 🌱 Product Listing
- **3 categories** of plants: Air Purifying, Tropical, Succulents & Cacti
- **6 plants per category** (18 plants total)
- Each plant shows image, name, and price
- "Add to Cart" button that disables after adding
- Dynamic cart count in the navbar

### 🛒 Shopping Cart
- View all added items with images and details
- Increase/decrease quantity per item
- Remove items from cart
- Real-time total price calculation
- "Checkout" button (Coming Soon)
- "Continue Shopping" button to return to products

### ℹ️ About Page
- Company story, mission, offerings, and values

### 🎨 Design
- Dark green premium theme
- Responsive layout for all screen sizes
- Smooth hover animations and transitions
- Modern typography (Inter + Playfair Display)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI components (functional) |
| **React Router v6** | Client-side routing |
| **Redux Toolkit** | State management (cart) |
| **CSS3** | Styling & animations |

---

## 📁 Folder Structure

```
paradise-nursery/
├── public/
│   ├── index.html
│   └── background.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── ProductList.jsx
│   │   └── CartItem.jsx
│   ├── store/
│   │   ├── CartSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

---

## 🚀 Setup Instructions

### Prerequisites
- **Node.js** (v14 or later)
- **npm** (v6 or later)

### Installation

1. **Clone / download the project**

2. **Navigate to the project folder**
   ```bash
   cd paradise-nursery
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser** and go to `http://localhost:3000`

---

## 📄 Routes

| Route | Component | Description |
|---|---|---|
| `/` | Home | Landing page with hero section |
| `/plants` | ProductList | Browse all plants by category |
| `/cart` | CartItem | View and manage cart items |
| `/about` | AboutUs | Company information |

---

## 🧪 Redux Store Structure

```javascript
{
  cart: {
    items: [],         // Array of cart item objects
    totalQuantity: 0,  // Total number of items
    totalAmount: 0     // Total price
  }
}
```

### Actions
- `addToCart(item)` — Add a plant to the cart
- `removeFromCart(name)` — Delete an item entirely
- `increaseQuantity(name)` — Increase item quantity by 1
- `decreaseQuantity(name)` — Decrease item quantity by 1

---

## 📝 License

This project is for educational purposes.
