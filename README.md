# Patient Details

This app functions as a patient directory. Now with weight whisker plot! This app was created with `create-react-app`.

## Running Locally

To run the app locally, simply navigate to the app directory in a Terminal and run the command `npm start`. This will launch a development server with the app running. The app should automatically launch in a new browser tab, but if not, the URL your app can be accessed at is in your terminal window.

## Testing the App

To test the app, run the command `npm test` in a Terminal at the app's directory. This will launch Jest (our test runner) in watch mode. It will print out additional instructions for usage, but to run all tests press 'a'.

## Deploying the App

To deploy the app, run the command `npm run build` in a Terminal at the app's directory. This will create a production build of the app in a directory called `build`.

### Unfortunate Descisions

Due to this being an example project, some suboptimal decisions have been made, almost all for the sake of speed. These desicions could all be refactored or improved upon if this were a long-running project. They are as follows:

- Used an HTML `<table>`, which isn't super responsive/extensible
- Used CSS instead of SASS for no reason other that SASS isn't part of create-react-app
- JSON file import is hard-coded
- Edge cases/extensibility in utility functions not considered
- Using mrn in URL is potentially insecure
- Design was an afterthought
- Rebased features to single commits, but I would normally have slightly more granular commits