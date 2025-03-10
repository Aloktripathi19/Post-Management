# Post Management Application

Welcome to the Post Management Application! This is a web application built using the **MERN stack** (MongoDB, Express.js, React, Node.js) to manage posts efficiently. The app leverages Mongoose for MongoDB interactions and allows users to create, view, and manage posts with various attributes such as title, description, category, username, date, likes, and status.

## Features
- Create and store posts with fields like title, description, category, username, date, comments, likes, and status.
- Default status set to "pending" for new posts.
- Utilizes Mongoose for MongoDB schema and model management.
- Reactive front-end built with React for a seamless user experience.
- Modular backend with Express.js for API routes and middleware.
- Scalable and maintainable code structure.

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local or remote instance)

### **Installation**  
Clone the repository and install dependencies:  

```bash
git clone https://github.com/Aloktripathi19/Post-Management.git
cd ECOM
npm install
cd front
npm install
cd ../back
npm install 


## Run the Application  

### Start the backend server:  
cd back
npm start

### Start the frontend:  
cd front
npm start
```

## Technologies Used
- **MongoDB**: NoSQL database for storing post data.
- **Express.js**: Backend framework for building RESTful APIs.
- **React**: Front-end library for building dynamic user interfaces.
- **Node.js**: JavaScript runtime for server-side logic.
- **Mongoose**: ODM for MongoDB and Node.js.
- **JavaScript/CSS**: For custom logic and styling.

## Usage
- Open your browser and navigate to `http://localhost:3000` (or the port specified in your configuration).
- Use the application to create and manage posts. The React-based interface will guide you through the process.
- The backend API will handle data persistence and retrieval from MongoDB.

## Project Structure

postmgmt/
├── back/                    # Backend directory
│   ├── models/
│   │   └── js_pmodel.js     # Mongoose schema and model for posts
│   ├── routes/              # API routes (if applicable)
│   ├── public/
│   ├── src/
│   └── Comp/
├── front/                   # Frontend directory (if separated)
│   ├── src/
│   └── public/
├── JS_Admin.js              # Admin-related JavaScript
├── JS_All.js                # General JavaScript
├── JS_Bjs.js                # Business logic JavaScript
├── JS_Ctjs.js               # Category-related JavaScript
├── JS_Edits.js              # Edit-related JavaScript
├── JS_Education.js          # Education-related JavaScript
├── JS_Health.js             # Health-related JavaScript
├── JS_Home.js               # Homepage JavaScript
├── JS_Logins.js             # Login-related JavaScript
├── JS_Logouts.js            # Logout-related JavaScript
├── JS_Nav.js                # Navigation JavaScript
├── JS_Pm.js                 # Post management JavaScript
├── JS_Politics.js           # Politics-related JavaScript
├── JS_Regist.js             # Registration JavaScript
├── JS_Sport.js              # Sports-related JavaScript
├── JS_Weth.js               # Weather-related JavaScript
├── #_App.css                # Main CSS file for the app
├── App.js                   # Main application JavaScript (likely React component)
├── #_AppTest.js             # Test file for the app
└── index.css                # Global CSS styles

## Contact
For any questions or suggestions, feel free to reach out:
- Email: tripathialok1919@gmail.com
- GitHub:https://github.com/Aloktripathi19