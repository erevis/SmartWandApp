# Smart Wand App

The smart wand app is an iOS/Android app made in react native that works in tandem with the torchtech smart wand apparatus.
It exists to make pelic floor dysfunction therapy more accessible and affordable. It tracks the progress that a patient goes through,
encourages them to continue therapy, make it easier to understand, and ultimately make therapy be self-administered with clinician guidance.

## Getting started

Use the Node.js package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install JS dependencies.

```bash
npm i expo
```

```bash
npm i react-native
```

```bash
npm i -g expo-cli
```

All dependencies found in package.json

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install python requirements.

```bash
pip install -r requirements.txt
```

To start a local development environment:

```bash
expo init my-app
```

```bash
cd my-app
```

```bash
expo start
```

Instructions as of 11/15/21

## Testing

```bash
npm i --save-dev jest
```

Run tests:

```bash
npm test
```

## Deployment

Deployed on Heroku. Contact TorchTech to access account. The deployed version of the app tracks the main branch of this repo with continuous deployment. Heroku uses a python buildpack with ClearDB MySQL addon for database storage.

## Technologies Used

Django is used to handle the backend for the mobile app. It lives in the directory smartwandapp folder. Within the settings.py of that folder is a connection to a MySQL database. The whole client side utilizes react-native.

## Contributing

See the [project website](https://smartwandsite.herokuapp.com/) for trello. Contact TorchTech for access to any systems where signin is required.

## Authors

Noah Willen: Django Backend, App Navigation, Forum

Evan Revis: Signin

Javier Serrato Rojas: Client Manager, Progress
