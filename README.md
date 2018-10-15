# cgp-data-portal
Static Content for CGP Data Portal
=======
# Data Commons

## Developer Workspace

### Requirements

* `Node.js` ([https://nodejs.org/en/](https://nodejs.org/en/)), version 10.0.0. 

* We recommend using `n` ([https://github.com/tj/n](https://github.com/tj/n)) as the Node.js package manger. 

* `npm` ([https://www.npmjs.com/](https://www.npmjs.com/)) is bundled with `Node.js` and is required to manage application dependencies.

### Setup

##### Clone Repo

Clone the `commons-gatsby` repo:

	git@github.com:clevercanary/commons-gatsby.git

##### Install Gatsby Command Line Tool

The Gatsby command line tool is used to develop, build and serve (locally) the Data Commons.

    npm install --global gatsby-cli

##### Install Packages

Run the following command from the project's root directory to install the required packages: 

	npm install

### Development Server

Run the following command from the root directory:

`gatsby develop`

The development server can be viewed at:

`localhost:8000`

### Deployment

Run the following command to build the application:

`gatsby build`

#### Local Production Version

Run the following command to view a built version of the application, locally:

`gatsby serve`

The built version can be viewed at:

`localhost:9000`

### Application Dependencies

#### Material Components

Data Commons Preview uses Material Components ([https://material.io/components/web/](https://material.io/components/web/)) for its Material Design library.
