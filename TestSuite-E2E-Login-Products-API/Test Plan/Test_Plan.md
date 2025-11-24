# Test Plan: End-to-End Testing for Sample Login & Products API

**Project:** TestSuite – End-to-End Testing for Sample Login & Products API

**Version:** 1.0

**Date:** 2025-11-24

---

## 1. Introduction

This document outlines the test plan for the "Sample Login & Products API". The plan covers the scope of testing, objectives, features to be tested, testing strategies, and required resources. This API provides functionalities for user authentication and product management.

### 1.1. Scope

- **In Scope:**
    - API endpoint testing for `POST /auth/login`, `GET /products`, `POST /products`, and `PATCH /products/:id`.
    - Both positive and negative test scenarios.
    - Performance and security testing are NOT in the initial scope but can be added later.
    - Contract testing (schema validation).

- **Out of Scope:**
    - Frontend UI testing.
    - Database integrity testing.
    - Third-party integration testing.
    - Load and stress testing.

## 2. Test Objectives

- To ensure the API endpoints are functioning as per the requirements.
- To validate the API responses for correctness and completeness.
- To identify and report any bugs or issues.
- To ensure the API is secure from common vulnerabilities (basic checks).
- To create a reusable test suite for regression testing.

## 3. Features to be Tested

- **Authentication:**
    - User login with valid credentials.
    - User login with invalid credentials.
- **Products:**
    - Fetching a list of all products.
    - Fetching products with authentication.
    - Adding a new product (Admin only).
    - Updating an existing product (Admin only).
    - Attempting to add/update a product without admin privileges.

## 4. Test Strategy/Methodology

- **Manual Testing:**
    - Using Postman for initial exploratory testing and for executing manually designed test cases.
- **Automated Testing:**
    - Developing API test scripts using Jest and Supertest to automate the test cases.
    - The automated tests will be used for regression testing.
- **Testing Levels:**
    - **API/Service Level Testing:** Testing will be focused on the API endpoints.
    - **Integration Testing:** Testing the interaction between different API endpoints (e.g., using a token from `/login` to access `/products`).

## 5. Test Environment & Tools

- **Test Environment:** Local machine / Staging server.
- **Tools:**
    - **Postman:** For manual API testing and creating the initial collection.
    - **Node.js:** As the runtime for the automation script.
    - **Jest & Supertest:** For API test automation.
    - **Git & GitHub:** For version control of the test suite.
    - **Jira / Trello (optional):** For bug tracking. For this project, a Markdown file will be used.

## 6. Deliverables

- **Test Plan:** This document.
- **Test Cases:** A detailed document with test cases for each feature.
- **Bug Reports:** Sample bug reports.
- **Postman Collection:** A JSON file that can be imported into Postman.
- **Automation Scripts:** Jest-based test scripts.
- **Summary Report:** A final report summarizing the testing activities and results.

## 7. Risks and Mitigation

| Risk | Mitigation |
| --- | --- |
| Lack of clear API documentation. | Collaborate with the development team to get the required information. |
| Test environment instability. | Coordinate with the DevOps team to ensure a stable environment. |
| Limited access to admin privileges for testing. | Request temporary admin access for testing purposes. |

---
