# Assessment 4 – Technical Assessment Solutions

## Overview

This repository contains solutions for three assessment rounds completed as part of the internship technical evaluation.

The project demonstrates:

* Problem-solving and algorithmic thinking
* SQL query writing
* REST API integration
* Debugging and bug fixing
* Full Stack Web Development
* Authentication using JWT
* MongoDB database integration
* Modern React frontend development

---

# Task 1 – Programming Assessment

## Description

Implemented solutions for algorithmic, SQL, and API-based problems.

### Arrays

#### Q1 – Second Largest Without Duplicates

* O(n) solution
* No sorting used
* Handles duplicate values

#### Q2 – Rotate Array K Steps

* In-place rotation
* Uses reversal algorithm
* Handles k > n

### Strings

#### Q3 – Valid Anagram Check

* Case-insensitive comparison
* Ignores spaces
* Uses frequency map

#### Q4 – Longest Substring Without Repeating Characters

* Sliding window approach
* O(n) complexity

### SQL

#### Q5 – Top Earning Employees per Department

* JOIN operations
* Aggregation using MAX()
* Handles salary ties

#### Q6 – Monthly Order Revenue Report

* Revenue aggregation
* Monthly grouping
* Date functions

### API Integration

#### Q7 – Fetch User Posts

* REST API consumption
* JSON parsing
* Error handling

#### Q8 – Weather Summary

* Open-Meteo API integration
* Weather code mapping
* Conditional logic implementation

---

# Task 2 – Full Stack Authentication System

## Description

Developed a complete authentication system using the MERN stack.

### Tech Stack

#### Frontend

* React
* Vite
* Axios
* React Router DOM
* Framer Motion
* React Icons

#### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs

---

## Features

### Registration Module

Users can:

* Create an account
* Store credentials securely
* Passwords are hashed using bcrypt

### Login Module

Users can:

* Authenticate using email and password
* Receive JWT token
* Access protected routes

### Dashboard

Implemented:

* Protected Dashboard
* User Profile Information
* Dynamic Greeting
* Avatar Generation
* Activity Feed
* Statistics Cards
* Logout Functionality

### UI Enhancements

* Glassmorphism Design
* Responsive Layout
* Smooth Animations
* Framer Motion Interactions
* Modern Gradient Background
* Mobile Friendly Interface

---

## Backend Structure

```text
backend/
├── config/
│   └── db.js
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── server.js
└── .env
```

---

## Frontend Structure

```text
frontend/
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
```

---

## Authentication Flow

```text
Register
   ↓
MongoDB Storage
   ↓
Login
   ↓
JWT Generation
   ↓
Protected Route
   ↓
Dashboard Access
```

---

# Task 3 – Debugging Challenge

## Description

Analyzed and fixed multiple bugs across different application modules of an Employee Attendance Tracker system.

### Modules Covered

#### api_client.py

Fixed:

* Missing Authorization Header
* Improper 404 Handling

#### db_queries.py

Fixed:

* Incorrect JOIN Type
* Missing Employee Filter

#### attendance.py

Fixed:

* Incorrect Time Calculation
* Late Attendance Boundary Condition

#### report.py

Fixed:

* Index Out of Bounds Error
* Division by Zero Error
* Incorrect Attendance Policy Logic
* Late Check-In Threshold Issue

---

## Total Bugs Fixed

| Module        | Bugs Fixed |
| ------------- | ---------- |
| api_client.py | 2          |
| db_queries.py | 2          |
| attendance.py | 2          |
| report.py     | 4          |
| **Total**     | **10**     |

---

# Learning Outcomes

Through these assessments, the following concepts were demonstrated:

* Data Structures and Algorithms
* SQL Query Optimization
* REST API Consumption
* Error Handling
* Authentication and Authorization
* JWT Security
* MongoDB Integration
* React State Management
* Route Protection
* Debugging and Troubleshooting
* Modern UI/UX Design
* Responsive Web Development

---

# Author

**Rishi**

Skills demonstrated:

* Full Stack Development
* MongoDB
* Express.js
* React.js
* Node.js
* SQL
* REST APIs
* Authentication Systems
* Debugging and Problem Solving
