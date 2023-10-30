# Bookie: A Book Review Application

## Overview
Bookie is a book review application that allows users to share their thoughts and opinions on different books. Users can create an account, log in, and start reviewing books or read reviews from other users. This application is designed to foster a community of book lovers who can connect and engage over shared interests in literature.

A live deployed version of this application can be found here: https://bookie-bookreviews-d64cfc07dac8.herokuapp.com/

## Features
- **User Authentication**: Users can sign up, log in, and log out of the application.
- **Book Reviews**: Users can write reviews for books, providing their insights, thoughts, and ratings.
- **Search Functionality**: Users can search for books and view existing reviews.
- **Real-Time Updates**: Users can see new reviews and comments in real-time, enhancing the interactive experience.
- **Profile Management**: Users can create and manage their profiles, showcasing their reviews and favorite books.

## Frontend Technology Stack
- **React**: A JavaScript library for building user interfaces.
- **Socket.io-client**: Enables real-time, bidirectional, and event-based communication between web clients and servers.

## Backend Technology Stack
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for storing application data.
- **Mongoose**: An ODM (Object Document Mapper) library for MongoDB and Node.js.
- **Socket.io**: Enables real-time, bidirectional, and event-based communication between web clients and servers.
- **JWT (JSON Web Tokens)**: Used for securely transmitting information between parties as a JSON object.
- **Bcrypt**: A library for hashing passwords before storing them in the database.

## User Stories and Acceptance Criteria

### User Story 1: User Registration
**As a new user,**  
**I want to** be able to register for an account,  
**So that I can** access personalized features of the application.

**Acceptance Criteria:**
- Given I am on the registration page, when I enter my username, email, and password, and click the "Register" button, then my account should be created, and I should be redirected to the login page.
- Given I am on the registration page, when I enter an already taken username, and click the "Register" button, then I should see an error message indicating that the username is already taken.
- Given I am on the registration page, when I enter an invalid email address, and click the "Register" button, then I should see an error message indicating that the email is invalid.

### User Story 2: User Login
**As a registered user,**  
**I want to** be able to log in,  
**So that I can** access my personalized settings and content.

**Acceptance Criteria:**
- Given I am on the login page, when I enter my username and password, and click the "Login" button, then I should be logged in, and redirected to my dashboard.
- Given I am on the login page, when I enter an incorrect password, and click the "Login" button, then I should see an error message indicating that the password is incorrect.
- Given I am on the login page, when I enter a username that does not exist, and click the "Login" button, then I should see an error message indicating that the username does not exist.

### User Story 3: Managing Books
**As a registered user,**  
**I want to** add, update, and delete books that I have added,  
**So that I can** manage the content I contribute to the application.

**Acceptance Criteria:**
- Given I am a registered user, when I navigate to the "My Books" section, then I should see a list of books that I have added.
- Given I am in the "My Books" section, when I click on the "Add Book" button, then I should be presented with a form to add a new book.
- Given I have filled out the "Add Book" form, when I submit the form, then the new book should be added to the list, and I should see a confirmation message.
- Given I am in the "My Books" section, when I click on the "Edit" button next to a book, then I should be presented with a form to update the book’s information.
- Given I have updated the book’s information, when I submit the form, then the changes should be saved, and I should see a confirmation message.
- Given I am in the "My Books" section, when I click on the "Delete" button next to a book, then the book should be removed from the list, and I should see a confirmation message.



### User Story 4: Adding a Book Review
**As a registered user,**  
**I want to** be able to add reviews for books,  
**So that I can** share my opinions and experiences with other users.

**Acceptance Criteria:**
- Given I am a registered user, when I navigate to a book’s detail page, then I should see an option to add a review.
- Given I am on the book’s detail page, when I click on the option to add a review, then I should be presented with a form to submit my review.
- Given I have filled out the review form, when I submit the form, then my review should be added to the book’s list of reviews, and I should see a confirmation message.
- Given I am a registered user, when I add a review, then my user profile should show the review in my activity/history.
- Given I have submitted a review, when I view the book’s reviews again, then I should see my review listed with my username and the date of submission.

### User Story 5: Donating via Stripe
**As a user,**  
**I want to** make a donation to support the application,  
**So that I can** contribute to its development and maintenance.

**Acceptance Criteria:**
- Given I am on the "Donate" page, when I enter a donation amount and click the "Donate" button, then I should be redirected to Stripe to complete the payment.
- Given I have completed the payment on Stripe, when I return to the application, then I should see a thank you message and a confirmation of my donation.
- Given I am on the "Donate" page, when I try to donate without entering an amount, then I should see an error message prompting me to enter a donation amount.

## Getting Started
To run the application locally, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies:
   npm install
4. Start the application:
   npm start
5. Open your browser and visit http://localhost:3000.

## Future Development
### 1. Enhanced Review Features
- **Reply to Reviews**: Allow users to reply to reviews to create a discussion around a book. This can help in generating a community feeling and provide more depth to the reviews.
- **Review Likes/Dislikes**: Implement a system where users can like or dislike reviews. This helps in highlighting the most helpful reviews.
- **Review Sorting and Filtering**: Add options to sort and filter reviews based on different criteria like date, helpfulness, or rating.
- **User Preferences**: Allow users to set their preferences for book genres, authors, etc., and use this data to provide tailored recommendations.

### 2. Social Integration
- **Social Media Sharing**: Add options for users to share their reviews or favorite books on social media platforms.
- **Friend System**: Implement a system where users can add others as friends and see their reviews and book lists.

### 3. Accessibility and Internationalization
- **Improve Accessibility**: Ensure that the application is accessible to users with disabilities.
- **Support Multiple Languages**: Add support for multiple languages to cater to a global audience.

### 4. Performance Optimization
- **Optimize Load Times**: Work on optimizing the load times of the application, ensuring that pages load quickly even with a large number of reviews.
- **Caching Strategies**: Implement caching strategies to reduce server load and improve performance.


## Contributing 

We welcome contributions to Bookie! If you have suggestions, bug reports, or want to contribute code, please feel free to open an issue or submit a pull request on our GitHub repository.

### License
This project is licensed under the MIT License 
