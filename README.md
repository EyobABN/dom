# Employee Manager

## Introduction
This is an employee management web application for Dom dental clinic. It is capable of handling records of the clinic departments and the medical staff. Departments and employees can be created and users can be assigned to departments. The app uses MongoDB for data storage, Express.js as the REST API server, Mongoose for database schema definition, React.js for building the user interface, and Docker for containerization.

## Demo
[![Watch demo](assets/Dom-demo.gif)](https://youtu.be/3vN5n-XvmmM)

## Installation and Usage
1. **Clone this repository (or download the ZIP file)**
```bash
git clone https://github.com/eyobabn/dom.git
```
2. **Navigate to the project's root directory**
```bash
cd dom
```
3. **Build and run the application containers**
```bash
docker compose up
```
4. **Access the user interface**
* Navigate to http://localhost:3000 on your browser

## API Endpoints

| Endpoint| Method | Purpose |
|---------|--------|---------|
| /departments | GET | Returns a list of departments |
| /departments | POST | Creates a new department |
| /departments/:id | GET | Returns a single department matching the id |
| /departments/:id | PUT | Fully updates the department with the matching id |
| /departments/:id | PATCH | Partially updates the department with the matching id |
| /departments/:id | DELETE | Deletes the department with the matching id |
| /employees | GET | Returns a list of employees |
| /employees | POST | Creates a new employee |
| /employees/:id | GET | Returns a single employee matching the id |
| /employees/:id | PUT | Fully updates the employee with the matching id |
| /employees/:id | PATCH | Partially updates the employee with the matching id |
| /employees/:id | DELETE | Deletes the employee with the matching id |

## UI Endpoints
| Endpoint| Purpose |
|---------|---------|
| / | Homepage |
| /departments | Displays the list of departments |
| /departments/add | Displays a department creation form |
| /departments/edit/:id | Displays a department editing form |
| /employees | Displays the list of employees |
| /departments/edit/:id | Displays an employee creation form |
| /departments/edit/:id | Displays an employee editing form |

## Technologies Used
### Frontend
* **[React.js](https://react.dev/)**: JavaScript library for building interactive user interfaces.
* **[React Router](https://reactrouter.com/)**: Standard library for navigation in React applications.
* **[React Bootstrap](https://react-bootstrap.github.io/)**: React-based Bootstrap framework for UI components.
* **[Axios](https://axios-http.com/)**: Promise-based HTTP client for making asynchronous requests.
### Backend
* **[Node.js](https://nodejs.org/en)**: Runtime environment for server-side JavaScript execution.
* **[Express.js](http://expressjs.com/)**: Web application framework for building scalable backend services.
* **[MongoDB](https://www.mongodb.com/)**: NoSQL database system for flexible and scalable data storage.
* **[Mongoose](https://www.mongoose.com/)**: ODM library for MongoDB and Node.js, simplifying data interactions.
### Additional Libraries
* Other Dependencies: Various npm packages and dependencies to enhance functionality. Refer to package.json for details.
