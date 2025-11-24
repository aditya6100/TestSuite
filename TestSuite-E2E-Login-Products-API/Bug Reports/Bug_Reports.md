# Sample Bug Reports

**Project:** TestSuite – End-to-End Testing for Sample Login & Products API

**Version:** 1.0

**Date:** 2025-11-24

---

Here are a few examples of how bug reports can be documented.

### Bug Report 1

- **ID:** BUG-001
- **Title:** API allows creating a product with a negative price.
- **Steps to Reproduce:**
    1. Authenticate as an admin user to get a valid token.
    2. Send a `POST` request to the `/products` endpoint.
    3. In the request body, provide a `price` with a negative value (e.g., `-10`).
    ```json
    {
      "name": "Test Product",
      "price": -10,
      "description": "A product with a negative price."
    }
    ```
- **Expected Result:** The API should return a `400 Bad Request` error, and the product should not be created. The response should indicate that the price is invalid.
- **Actual Result:** The API returns a `201 Created` status, and the product is created with a negative price.
- **Severity:** High
- **Status:** Open

---

### Bug Report 2

- **ID:** BUG-002
- **Title:** Plain text error message on 500 Internal Server Error.
- **Steps to Reproduce:**
    1. Trigger a 500 error (e.g., by taking down the database or forcing an unhandled exception).
    2. Observe the API response.
- **Expected Result:** The API should return a generic JSON error message, like `{"error": "An internal server error occurred."}`. No sensitive information should be exposed.
- **Actual Result:** The API returns a plain text HTML response containing the full stack trace and server information.
- **Severity:** Critical
- **Status:** Open

---

### Bug Report 3

- **ID:** BUG-003
- **Title:** `GET /products` endpoint is slower than the defined SLA.
- **Steps to Reproduce:**
    1. Send a `GET` request to the `/products` endpoint.
    2. Measure the response time over several requests.
- **Expected Result:** The response time should be under the Service Level Agreement (SLA) of 200ms.
- **Actual Result:** The average response time is around 800ms, which exceeds the SLA.
- **Severity:** Medium
- **Status:** Open

---

### Bug Report 4

- **ID:** BUG-004
- **Title:** User enumeration possible via the `/auth/login` endpoint.
- **Steps to Reproduce:**
    1. Send a `POST` request to `/auth/login` with a valid but non-existent username and a random password.
    2. Send another `POST` request with a valid, existing username but an incorrect password.
    3. Compare the error messages.
- **Expected Result:** The API should return a generic and identical error message for both "user not found" and "incorrect password" to prevent attackers from guessing valid usernames. For example: `{"error": "Invalid credentials"}`.
- **Actual Result:** The API returns "User not found" for the first request and "Invalid password" for the second, allowing for username enumeration.
- **Severity:** Medium
- **Status:** Open
---
