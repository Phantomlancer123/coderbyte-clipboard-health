# Restaurant Finder App

## Problem Description

The employees at Cogent Labs in Roppongi need help in finding nearby restaurants for lunch. They also want to be able to search for restaurants by keywords and view restaurant details such as menu, pictures, and reviews. The goal of this project is to create a web application that will help employees find restaurants in the area and provide them with enough information to make an informed decision.

## Solution

The Restaurant Finder App is a web application built using React. It utilizes the Foursquare Places API to provide restaurant data. The application allows users to randomly select a restaurant within 1km of the Cogent Labs office, search for restaurants by keyword, view a map with restaurant locations, and view restaurant details such as menu, pictures, and reviews.

## Technical Choices

React: The application is built using React for its ease of use and reusability. React components are easy to test and can be easily modified to meet changing requirements.

React Router: React Router is used for routing within the application. It helps in rendering the appropriate components based on the current URL.

Foursquare Places API: The application utilizes the Foursquare Places API to provide restaurant data. Foursquare is a reliable source for restaurant data and provides a wide range of information.

React Leaflet: React Leaflet is used for displaying a map with restaurant locations. It is a widely used library for integrating maps with React applications.

Styled Components: Styled Components are used for styling the application. It helps in writing modular and maintainable CSS.

## Trade-offs

Responsive Design: The application is currently optimized for desktop devices. Additional effort would be required to make it responsive for mobile devices.

Testing: Although the application has been tested, additional testing could be done to ensure the application is robust and error-free.

Data Persistence: The application does not currently support data persistence. If the user refreshes the page, they will lose their search results.

## Future Improvements

Authentication: Implementing user authentication would allow users to save their favorite restaurants and preferences.

Recommendations: Implementing a recommendation engine would provide personalized restaurant recommendations based on user preferences and history.

Mobile Support: Optimizing the application for mobile devices would make it more accessible and user-friendly.

## Conclusion

The Restaurant Finder App is a React-based web application that allows users to find nearby restaurants and view detailed information about them. The application utilizes the Foursquare Places API to provide accurate and up-to-date restaurant data. With further improvements, the application can be a valuable tool for employees at Cogent Labs in Roppongi to find and discover new restaurants in the area.
