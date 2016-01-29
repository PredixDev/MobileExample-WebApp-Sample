# The Predix Mobile Sample App
##app.json
App Name: Sample1

Version: 1.0

##webapp.json
Web-App Name: sample-webapp

Version: 0.0.1

## Background
This is the sample app for Predix Mobile.  

*"If you think about it like a sample of a sandwich, it contains everything in that sandwich, but it's not the whole sandwich.  You wouldn't sell it to someone, but it's a taste of everything."* - Matt Hoffman, Predix Mobile Developer (feat. Jon Henderson, Predix Mobile Developer)

Currently our sandwich is pretty bland, we only use the PMAPI to access test data.  In the future, the sample app will be more of a [Dagwood sandwich](https://en.wikipedia.org/wiki/Dagwood_sandwich) which includes a taste of all of the components that you may want in a Predix Mobile application.

**About the app**

The sample app is geared towards a field service engineer who is assigned a list of issues.  There is a dashboard for viewing the number of issues with differing levels of severity.  Tapping on one of the severities shows you a list of issues with that severity.  Tapping on one of the issues shows you details about that issue.  The sample app currently teaches you how to use the Predix Mobile API in the context of a web application built on top of our app contiainer.  

**Tech Stack**

The sample app's tech stack is based on Foundation for Apps, which uses HTML5, Javascript, CSS3, AngularJS, and Sass.  If you are writing your web application with Foundation for Apps, or at least AngularJS, then this code will help you with app navigation and the architecture for building mobile web apps.  Foundation for Apps, AngularJS, or Sass are not required to write apps on Predix Mobile.

## Running the Predix Mobile Sample App

###Before You Begin:
This is the general setup for all Mobile WebApp Examples.
If you have NOT worked through the [getting started documentation](https://www.predix.io/docs#lVCblJRH), please use those docs for running the sample app.

###Setup
This is the general setup for all Mobile WebApp Examples, but is HIGHLY recommended that you follow the [getting started documentation](https://www.predix.io/docs#lVCblJRH) when installing this app.

1. Clone the repo into your desired workspace.

2. Install the app's dependencies
    ```
    $ cd <your_workspace>/MobileExample-WebApp-Sample/webapps/sample-webapp
    $ npm install
    ```

3. Log into the PM Tool
    ```
    $ pm auth <your_username> <your_password>
    ```

4. Build and Publish the Sample App
    ```
    $ cd <your_workspace>/MobileExample-WebApp-Sample/webapps/sample-webapp
    $ npm run publish
    ```
    
5. Load the sample data
    ```
    $ cd <your_workspace>/MobileExample-WebApp-Sample
    $ pm import --data ./test/data/data.json --app ./pm-apps/sample-app/app.json
    ```
    
6. Define the Sample App
    ```
    $ cd <your_workspace>/MobileExample-WebApp-Sample/pm-apps/sample-app/
    $ pm define
    ```
    
7. Update the info.plist for the Mobile App Container in Xcode to match the app name in the app.json and run.
