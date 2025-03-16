# Task-management

A simple task management app built with React for the frontend and Node.js (Express) for the backend. This app allows users to manage their tasks by adding, viewing, and deleting tasks. It also includes user authentication with login and registration functionality.

Features
User Authentication:

Login and Register functionality using JWT authentication.

User's task list is stored in the database and can be accessed after logging in.

Task Management:

Add new tasks.

View existing tasks.

Delete tasks from the list.

Dashboard:

Displays tasks for authenticated users.

Allows users to log out and redirect to the login page.

Technologies Used
Frontend:

React.js

Axios for HTTP requests

React Router for routing and navigation

CSS for styling

Backend:

Node.js

Express.js

MongoDB for task storage

JWT for authentication

Mongoose for database interaction

Installation
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/task-management-app.git
2. Install dependencies
Backend
Navigate to the backend directory and install the dependencies:

bash
Copy
Edit
cd backend
npm install
Frontend
Navigate to the frontend directory and install the dependencies:

bash
Copy
Edit
cd frontend
npm install
3. Environment Variables
Make sure to set up the following environment variables:

Backend:
MONGO_URI: MongoDB connection URI for your database.

JWT_SECRET: Secret key for JWT token signing.

Frontend:
REACT_APP_API_URL: Base URL for the backend API (e.g., http://localhost:5000).

4. Running the Application
Start the backend server:
bash
Copy
Edit
cd backend
npm start
Start the frontend server:
bash
Copy
Edit
cd frontend
npm start
The app should now be running on http://localhost:3000 (frontend) and http://localhost:5000 (backend).

Usage
Login/SignUp:

Navigate to the login or register page to authenticate the user.

Use valid credentials to log in.

Dashboard:

Once logged in, you'll be redirected to the dashboard where you can view, add, and delete tasks.

Task Operations:

Add tasks via the task input field.

Click on any task to delete it.

Logout:

Click on the "Logout" button on the dashboard to log out and return to the login page.

Project Structure
pgsql
Copy
Edit
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   ├── public/
│   └── package.json
├── .gitignore
├── README.md
└── package.json
Contributing
If you want to contribute to the project, feel free to fork the repository and create a pull request with your changes. Be sure to follow the coding style used in the project.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Thanks to React and Node.js for their excellent frameworks.

Express.js for fast API routing.

MongoDB for database management.

This README should provide a solid overview of your app, from installation to usage, and guide others on how to contribute. Let me know if you want to add or change anything!
