#**Backend API**

##**Project Structure**

```bash

backend-api/

├── controllers/

│ ├── rideController.js

│ └── userController.js

├── models/

│ ├── Ride.js

│ └── User.js

├── routes/

│ ├── ridesRoutes.js

│ └── userRoutes.js

├── app.js

├── package.json

├── README.md

└── .gitignore
```

**Objective**

This project evaluates your ability to create APIs and handle data effectively. The project consists of a simple API with the following functionalities:

- **User Registration**: Accepts a username and password and returns a success message.
- **List Rides**: Returns mock ride data (e.g., ride ID, distance, and fare).
- **Ride Details**: Accepts a ride ID and returns detailed mock data for that ride.

**Technologies Used**

- **Node.js**: JavaScript runtime used to build the backend.
- **Express**: Web framework for Node.js to handle routes and requests.
- **MongoDB (optional)**: A NoSQL database for storing user and ride data (you can also use mock data).
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Body-Parser**: Middleware for parsing incoming request bodies in JSON format.

**Setup Instructions**

**Prerequisites**

Before running the project, make sure you have the following installed:

- **Node.js**
- **MongoDB** (if you choose to use a real database)

**Installation**

1. **Clone the repository:**



git clone <https://github.com/your-username/backend-api.git>

cd backend-api

1. **Install dependencies:**




npm install

1. **Start the server:**




node app.js

The server will run on port 5000 by default.

**API Documentation**

**1\. Register User**

- **Endpoint**: /register
- **Method**: POST
- **Description**: This endpoint registers a new user by accepting a username and password.

**Request Body:**

json


{

"username": "john_doe",

"password": "password123"

}

**Response:**



{

"message": "User registered successfully"

}

**Example cURL Command:**


curl -X POST <http://localhost:5000/register> -H "Content-Type: application/json" -d '{"username": "john_doe", "password": "password123"}'

**2\. List Rides**

- **Endpoint**: /api/rides
- **Method**: GET
- **Description**: This endpoint returns a list of mock rides, including rideId, distance, and fare.

**Example Response:**

json


\[

{

"rideId": "1",

"distance": "15 km",

"fare": "$25.00"

},

{

"rideId": "2",

"distance": "10 km",

"fare": "$15.00"

}

\]

**Example cURL Command:**



curl -X GET <http://localhost:5000/api/rides>

**3\. Ride Details**

- **Endpoint**: /api/rides/:id
- **Method**: GET
- **Description**: This endpoint returns detailed data for a specific ride using the rideId parameter.

**Example Request:**

bash


GET <http://localhost:5000/api/rides/1>

**Example Response:**

json


{

"rideId": "1",

"distance": "15 km",

"fare": "$25.00",

"driver": "Jane Smith",

"carModel": "Toyota Prius",

"rideTime": "30 minutes"

}

**Example cURL Command:**



curl -X GET <http://localhost:5000/api/rides/1>

**Environment Variables**

The project doesn't require any environment variables by default, but if you wish to configure your MongoDB connection string or other settings, you can create a .env file in the root directory.

**Example .env file:**

makefile


MONGO_URI=mongodb://127.0.0.1:27017/backend-api

PORT=5000

**Troubleshooting**

**MongoDB Connection Error**

If you are receiving a MongooseServerSelectionError: connect ECONNREFUSED, ensure that your MongoDB server is running on localhost:27017. You can either start MongoDB locally or use a cloud-based database like MongoDB Atlas.

To start MongoDB locally (assuming it's installed), run:



mongod

Then, restart your server.

**Conclusion**

This project demonstrates the creation of a simple RESTful API using Node.js and Express, with functionality to register users and manage rides. You can expand it further by integrating MongoDB for user and ride data persistence, adding more features like authentication, and improving error handling.


**Images**
1)
![image](https://github.com/user-attachments/assets/570d23a1-134e-4ee4-8c28-2a581acbe129)

2)
![image](https://github.com/user-attachments/assets/ac52aeff-cf9b-43f1-87fa-a2f60d434490)

3)
![image](https://github.com/user-attachments/assets/bc5c8e17-bb42-41bb-934c-5e4f05b6f119)
