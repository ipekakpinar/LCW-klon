# 🛍️ LC Waikiki E-Commerce Website Clone

This is a modern e-commerce website clone project built using **React** and **Tailwind CSS**. It allows users to browse products, add items to their cart, and perform login/registration actions.

---

## 👩‍💻 Contributors
- **İpek Akpınar** – 170423822  
- **Arda Kurt** – 170422048

---

## 🧩 Technologies Used

### 🎨 Frontend
- **React** – For building a component-based user interface.
- **Tailwind CSS** – For utility-first styling and responsive design.
- **React Router** – For routing and navigation between pages.
- **Context API + Hooks** – For managing global application state.

### 💻 Backend
- **Node.js & Express** – To handle login requests and token management.
- **JSON File** – Used as a temporary user database for authentication.

---

## ⚙️ Getting Started

To run this project locally, follow these steps in your terminal:

```bash
# 1. Clone the repository
git clone https://github.com/ipekakpinar/e-ticaret-sitesi-klon-.git

# 2. Navigate to the main project folder
cd forever-eCommerce-website-

# 3. Install frontend dependencies
npm install

# 4. Start the development server
npm run dev

# 5. If you're also running the backend server:
cd backend
npm install
node index.js

🔐 Authentication
The backend uses JWT (JSON Web Token) for secure user login. User credentials are checked against a local users.json file. Upon successful login, a token is issued.

📁 Project Structure
/src: Contains React components, pages, and context.

/backend: Contains the Express server and mock authentication logic.

/assets: Contains image and icon assets used in the frontend.
