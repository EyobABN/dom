# Employee Manager

## Introduction
This is an employee management web application for Dom dental clinic. It is capable of handling records of the clinic departments and the medical staff. Departments and employees can be created and users can be assigned to a department. It uses MongoDB for data storage, Express.js as the REST API server, Mongoose for database schema definition, and React.js for building the user interface, and Docker for containerization.

## Demo
[![Watch demo](assets/Dom-demo.gif)](https://youtu.be/3vN5n-XvmmM)

## Installation and Usage
**Clone this repository (or download the ZIP file)**
```bash
git clone https://github.com/eyobabn/dom.git
```
**Navigate to the project's root directory**
```bash
cd dom
```
**Build and run the application containers**
```bash
docker compose up
```
**Access the user interface**
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