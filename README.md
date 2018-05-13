# Node.js + Vue GraphQL example
Code example demonstrating how to use GraphQL with both Node.js and Vue.
The application consists out of two parts:

1. A back-end module ([`graphql-qa-clone-api`](./graphql-qa-clone-api))
2. A frontend module ([`graphql-qa-clone-vue`](./graphql-qa-clone-vue))

## Back-end
The back-end part is a simple Node.js application using Express as a web framework, Mongoose for persistence into a MongoDB database and Apollo for GraphQL. 

To install the dependencies of the back-end application, you can use:

```npm install```

To run the back-end application, you can run:

```npm run start```

This script will run nodemon to watch file changes and Babel to transpile the JavaScript files so that the newest features can be used (stage 2 features) without them being available in Node.js.

## Frontend
Todo

## GraphQL
The application uses GraphQL to transfer data from the backend to the frontend.
The schema used by the application can be found in [schema/index.js](graphql-qa-clone-api/src/schema/index.js).

A few query examples:

```
query AllQuestions($query: Pagination!) {
  questionCount
  questions(query: $query) {
    _id
    title
    firstPost {
      _id
      voteCount
      createdAt
    }
  }
}
```

```
query AllUsers($query: Pagination!) {
  userCount
  users(query: $query) {
    _id
    username
    postCount
  }
}
```

```
mutation CreateUser($input: UserInput!) {
  createUser(input: $input) {
    _id
    username
    postCount
  }
}
```

```
mutation CreateQuestion($input: QuestionInput!) {
  createQuestion(input: $input) {
    _id
    title
    firstPost {
      _id
      content
      voteCount
      createdAt
      author {
        _id
        username
        postCount
      }
    }
    answers {
      _id
      content
      voteCount
      createdAt
      author {
        _id
        username
        postCount
      }
    }
  }
}
```


```
mutation CreateQuestion($input: QuestionInput!) {
  createQuestion(input: $input) {
    _id
    title
    firstPost {
      _id
      content
      voteCount
      createdAt
      author {
        _id
        username
        postCount
      }
    }
    answers {
      _id
      content
      voteCount
      createdAt
      author {
        _id
        username
        postCount
      }
    }
  }
}
```