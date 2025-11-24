# Test Cases: Sample Login & Products API

**Project:** TestSuite – End-to-End Testing for Sample Login & Products API

**Version:** 1.0

**Date:** 2025-11-24

---

This document contains the test cases for the Sample Login & Products API.

## 1. Login API (`POST /auth/login`)

| Test Case ID | Description | Steps | Expected Result | Status |
| --- | --- | --- | --- | --- |
| **Positive** |
| LOGIN-001 | Verify login with valid credentials | 1. Send a POST request to `/auth/login` with a valid username and password. | - Status code should be 200 OK.<br>- Response body should contain an `access_token`. | Pass |
| **Negative** |
| LOGIN-002 | Verify login with invalid username | 1. Send a POST request to `/auth/login` with an invalid username and a valid password. | - Status code should be 401 Unauthorized.<br>- Response body should contain an error message like "Invalid credentials". | Pass |
| LOGIN-003 | Verify login with invalid password | 1. Send a POST request to `/auth/login` with a valid username and an invalid password. | - Status code should be 401 Unauthorized.<br>- Response body should contain an error message like "Invalid credentials". | Pass |
| LOGIN-004 | Verify login with empty credentials | 1. Send a POST request to `/auth/login` with an empty request body. | - Status code should be 400 Bad Request.<br>- Response body should contain an error message indicating missing fields. | Pass |
| LOGIN-005 | Verify login with missing username | 1. Send a POST request to `/auth/login` with only a password. | - Status code should be 400 Bad Request. | Pass |
| LOGIN-006 | Verify login with missing password | 1. Send a POST request to `/auth/login` with only a username. | - Status code should be 400 Bad Request. | Pass |

## 2. Products API (`GET /products`)

| Test Case ID | Description | Steps | Expected Result | Status |
| --- | --- | --- | --- | --- |
| **Positive** |
| PROD-001 | Verify fetching all products without authentication | 1. Send a GET request to `/products`. | - Status code should be 200 OK.<br>- Response body should be an array of products. | Pass |
| PROD-002 | Verify fetching all products with authentication | 1. Get a valid `access_token` from `/auth/login`.<br>2. Send a GET request to `/products` with the `Authorization` header. | - Status code should be 200 OK.<br>- Response body should be an array of products. | Pass |
| PROD-003 | Verify the structure of the product object | 1. Send a GET request to `/products`.<br>2. Inspect the first product object in the response. | - The product object should contain fields like `id`, `name`, `price`, and `description`. | Pass |

## 3. Add Product API (`POST /products`) - Admin Only

| Test Case ID | Description | Steps | Expected Result | Status |
| --- | --- | --- | --- | --- |
| **Positive** |
| PROD-ADD-001 | Verify adding a new product with admin privileges | 1. Get an admin `access_token`.<br>2. Send a POST request to `/products` with valid product data. | - Status code should be 201 Created.<br>- Response body should contain the newly created product. | Pass |
| **Negative** |
| PROD-ADD-002 | Verify adding a new product without authentication | 1. Send a POST request to `/products` with valid product data but no `Authorization` header. | - Status code should be 401 Unauthorized. | Pass |
| PROD-ADD-003 | Verify adding a new product with non-admin privileges | 1. Get a non-admin `access_token`.<br>2. Send a POST request to `/products` with valid product data. | - Status code should be 403 Forbidden. | Pass |
| PROD-ADD-004 | Verify adding a product with missing required fields | 1. Get an admin `access_token`.<br>2. Send a POST request to `/products` with missing `name` or `price`. | - Status code should be 400 Bad Request. | Pass |

## 4. Update Product API (`PATCH /products/:id`) - Admin Only

| Test Case ID | Description | Steps | Expected Result | Status |
| --- | --- | --- | --- | --- |
| **Positive** |
| PROD-UPD-001 | Verify updating a product with admin privileges | 1. Get an admin `access_token`.<br>2. Send a PATCH request to `/products/:id` with updated data. | - Status code should be 200 OK.<br>- Response body should contain the updated product. | Pass |
| **Negative** |
| PROD-UPD-002 | Verify updating a product without authentication | 1. Send a PATCH request to `/products/:id` with no `Authorization` header. | - Status code should be 401 Unauthorized. | Pass |
| PROD-UPD-003 | Verify updating a product with non-admin privileges | 1. Get a non-admin `access_token`.<br>2. Send a PATCH request to `/products/:id`. | - Status code should be 403 Forbidden. | Pass |
| PROD-UPD-004 | Verify updating a non-existent product | 1. Get an admin `access_token`.<br>2. Send a PATCH request to `/products/:invalid_id`. | - Status code should be 404 Not Found. | Pass |

---
