# The Predix Mobile Sample App

## Background
This is the sample app for Predix Mobile.  

*"If you think about it like a sample of a sandwich, it contains everything in that sandwich, but it's not the whole sandwich.  You wouldn't sell it to someone, but it's a taste of everything."* - Matt Hoffman, Predix Mobile Developer (feat. Jon Henderson, Predix Mobile Developer)

Currently our sandwich is pretty bland, we only use the PMAPI to access test data.  In the future, the sample app will be more of a [Dagwood sandwich](https://en.wikipedia.org/wiki/Dagwood_sandwich) which includes a taste of all of the components that you may want in a Predix Mobile application.

**About the app**

The sample app is geared towards a field service engineer who is assigned a list of issues.  There is a dashboard for viewing the number of issues with differing levels of severity.  Tapping on one of the severities shows you a list of issues with that severity.  Tapping on one of the issues shows you details about that issue.  The sample app currently teaches you how to use the Predix Mobile API in the context of a web application built on top of our app contiainer.  

**Tech Stack**

The sample app's tech stack is based on Foundation for Apps, which uses HTML5, Javascript, CSS3, AngularJS, and Sass.  If you are writing your web application with Foundation for Apps, or at least AngularJS, then this code will help you with app navigation and the architecture for building mobile web apps.  Foundation for Apps, AngularJS, or Sass are not required to write apps on Predix Mobile.

## Running the Predix Mobile Sample App

View the [getting started documentation](https://www.predix.io/docs#lVCblJRH) for running the sample app.

###Before You Begin:

If you haven't already set up the Predix Mobile development environment, see:

1. [Access and Software Requirements](https://www.predix.io/docs/?r=148719#G8fMvuP4)
2. [Creating a Predix Mobile Up Service Instance](https://www.predix.io/docs/?r=148718#wGWeWH2T)

NOTE: You will be using the variables that you stored in your parameters text file from the above "Before You Begin" steps in the steps below.

###Steps:

1. Get the Predix Mobile Up Service URL.

  a. Execute the following command: 
  
  `$ cf env <your_app_name>`
  
  b. The command above returns details for the app, including information on the Predix Mobile Service. The property, `api_gateway_short_route` has the URL for the Predix Mobile Up Service. Record this URL in your parameters text file beside *predix_mobile_up_service_url*

2. Execute the following command:
  
  `$ pm api <predix_mobile_up_service_url>`

3. Clone this repo on to your local machine.

  `$ git clone https://github.com/PredixDev/MobileExample-WebApp-Sample.git`

4. Log into the pm tool with the command below using the *developer_username* that you created with the `pm-add-developer.sh` script in [Creating a Predix Mobile Up Service Instance](https://www.predix.io/docs/?r=148718#wGWeWH2T).
  
  `$ pm auth developer_username developer_password`

5. Build and Publish the Sample App web app (NOTE: `$ pm publish` publishes the sample app, and this command is called inside the npm build script that we are running)
    ```
    $ cd <MobileExample-WebApp-Sample directory>/webapps/sample-webapp
    $ npm run publish
    ```

6. Define the Sample App.
    ```
    $ cd <MobileExample-WebApp-Sample directory>/pm-apps/sample-app
    $ pm define ./app.json
    ```
7. Load the Sample App data.
    ```
    $ cd <MobileExample-WebApp-Sample directory>
    $ pm import --data ./test/data/data.json --app ./pm-apps/sample-app/app.json
    ```

8. Grant user access to the Sample App
  NOTE: The current user is automatically granted access to the app they define; to grant access to additional users, use the following command:
  `$ pm grant --user=<username>`


9. Build the Predix Mobile App Container

  a. Download the `PredixMobileReferenceApp.zip` file from [here](https://github.com/predixdev/PredixMobileReferenceApp/releases/latest)
  
  b. Unzip the PredixMobileReferenceApp.zip file (a good spot to put this may be in `<MobileExample-WebApp-Sample directory>`, but it does not matter.)
  
  c. Launch the Predix Mobile App container by double-clicking the `PredixMobileReferenceApp.xcodeproj` file (it will open in Xcode).
    OPTIONAL: To change the Xcode default simulator choose a new simulator from the device dropdown.
  
  d. Run `$ ./set-pm-host.sh` to set the Predix Mobile service endpoint in the app container.
  
10. Start the Sample app in Xcode by clicking the run (looks like play) button.  Use the developer username and password that you saved in your parameters text file.
    





