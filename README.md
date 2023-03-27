
Title: Lendsqr Frontend Test

Project Description: 
This project essentially boils down to four pages, A login page, A users page, a user’s details page and a dashboard page. From a comprehensive view, this project is an app for displaying all the users subscribed to Lendsqr (the users page), and displaying individual user's details in the user's details page. Looking at the project from the individual pages,  the Login page, as the name implies is to Login and access the data from the Lendsqr users api, because this is a test project, the login page does not require a specific name or username and will navigate to the users page as long as the Email and password fields are not empty. 
  The users page draws from the Lendsqr users api and displays it in a tabular form with pagination, it also has a filtering component for filtering through the user’s. The filter component can be accessed by clicking on the top of the table. In addition to the filter component, there is also a PopUp menu that can be accessed from the items on the table by clicking the three dots at the end of each table item. This component allows the user to access the user’s details page. 
  The user’s detail page simply displays all the data from the api and offers more information for each user in the api. Finally, the dashboard component takes in the users page and user’s detail page as children as renders them with a dashboard around them.
  
  
  Steps to run the project: 
  npm install
  npm start ("The project runs on http://localhost:3000)
  npm test - for running the tests written for the app 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**



If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/)
  
