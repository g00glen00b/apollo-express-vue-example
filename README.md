# Node.js + Vue GraphQL example
Code example demonstrating how to use GraphQL with both Node.js and Vue.
The application consists out of two parts:

1. A back-end module (`__server__`)
2. A frontend module (`__client__`)

## Back-end
The back-end part is a simple Node.js application using Express as a web framework, Mongoose for persistence into a MongoDB database and Apollo for GraphQL. 

To install the dependencies of the back-end application, you can use:

```npm install```

To run the back-end application, you can run:

```npm run start```

This script will run nodemon to watch file changes and Babel to transpile the JavaScript files so that the newest features can be used (stage 2 features) without them being available in Node.js.

## Frontend
Todo