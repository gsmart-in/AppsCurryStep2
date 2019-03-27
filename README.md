# Using npm modules in Google Apps Script
An example project where we bundle npm modules and use ES6 code in [Google Apps Script](https://en.wikipedia.org/wiki/Google_Apps_Script)

See the [full article here](http://blog.gsmart.in/es6-and-npm-modules-in-google-apps-script/)

## Usage

Install clasp command line tool 

```bash
npm install @google/clasp -g
```

Then login to your Google account

```bash
clasp login
```

Open terminal and clone this project.

You have to create an Apps Script project to run this code.

```bash
clasp create --type standalone --title "Apps Script with Webpack and babel"
```

Now build the project and upload to your newly created Apps Script project

```bash
npm install
npm run deploy
```

## Why use npm in Apps Script?
Google Apps Script is quite powerful since it can access other Google services like Google Sheets, Gmail and Google docs. You can take automation to the next level using Google Aps Script. 

Being able to use npm modules will make creating and sharing re-usable modules quite easy. This will make it easy to create wrappers for popular services and use those services in your Apps Script project.

In this example project, we are using [momentjs](https://momentjs.com/) and [lodash](https://lodash.com/) in the Apps Script project.

## How is it done?
See the server/lib.js file. It imports the npm module and exports functions that use the imported packages.
The api.js has a global function doGet() which gets called by Apps Script to show the web page.
If you see the webpack.config.js file, notice that the bundle exposes a global variable AppLib where you can get the functions exported in the bundle.

Follow the [complete article here](http://blog.gsmart.in/es6-and-npm-modules-in-google-apps-script/)

#### Disclaimers
The author does not represent nor associated with Google in any way. This is project is only for learning purposes.




