# Bookie

## **Book Review Platform - MVP Requirements**

### **User Authentication:**

**User Stories:**
- As a new user, I want to register on the platform.
- As a registered user, I want to log in to the platform.
- As a user, I want to manage my profile.

**Acceptance Criteria:**
- The registration form captures username, email, and password.
- Users receive a confirmation message upon successful registration.
- Passwords are stored securely using hashing.
- Users can log in using their email and password.
- A JWT token is generated and sent to the client upon successful login.
- Users can view and edit their profile details.
- Users can change their password.

### **Book CRUD:**

**User Stories:**
- As a user, I want to add books to the platform.
- As a user, I want to view the list of all available books.
- As an admin, I want to manage book details.

**Acceptance Criteria:**
- Users can add books with details like title, author, and cover image.
- A confirmation message is displayed upon successful addition.
- A list of all books is displayed with essential details.
- Admins can edit and delete any book details.
- A confirmation message is displayed upon successful edit or delete.

### **Review and Rating CRUD:**

**User Stories:**
- As a user, I want to write reviews for books.
- As a user, I want to rate books.
- As a user, I want to manage my reviews and ratings.

**Acceptance Criteria:**
- Users can write and submit reviews for books.
- Reviews are displayed under the respective book details.
- Users can rate books on a predefined scale.
- The average rating of a book is displayed on its details page.
- Users can edit or delete their reviews and ratings.
- A confirmation message is displayed upon successful edit or delete.

### **Responsive and Polished UI:**

**User Stories:**
- As a user, I want a clean and intuitive interface.

**Acceptance Criteria:**
- The UI is mobile-friendly and adapts to different screen sizes.
- The platform uses a component library or CSS-in-JS for styling.

### **Backend Server and Database:**

**User Stories:**
- As a developer, I want a GraphQL, Node.js, and Express.js server.
- As a developer, I want a MongoDB and Mongoose ODM database.

**Acceptance Criteria:**
- The backend supports GraphQL queries and mutations.
- The server uses Node.js and Express.js.
- The database stores user, book, and review data.
- Mongoose ODM is used for data modeling and operations.

### **Deployment:**

**User Stories:**
- As a developer, I want to deploy the application on Heroku.

**Acceptance Criteria:**
- The application is live on Heroku with all its data.
- The repository has a high-quality README.

### **Interactivity:**

**User Stories:**
- As a user, I want an interactive application.

**Acceptance Criteria:**
- The application responds efficiently to user input.
- There's minimal lag or delay in interactions.

---

