# SYRACS
Symptom recognition and classification system is a small web appication that can be used as a archive for wide variety of viruses. The actual symptom recognition and classification mechanisms, although visually presented on the frontend, were not implemented on the backend.
There are three types of users:
- Member/Registered user
- Admin
- Guest

All of the user-types can see all viruses in the archive.
Members also have access to the Symptom Recognition page. Admin can add a new virus or user to the database.

Components that were used on the frontend can be found at: https://material.angular.io/components/categories

# USAGE
## Client
Inside the Client folder is an Angular app. To start the app, follow this [set of instructions](https://angular.io/guide/setup-local).
## Server
To start the server.js (inside the Server folder), download and install [node&npm](https://nodejs.org/en/), open cmd and do the following:
```
npm install
node server
```
## Database
If you want to use the database inside database folder, download [mongoDB](https://www.mongodb.com/try/download/enterprise), and use [mongorestore](https://docs.mongodb.com/manual/reference/program/mongorestore/) command inside the cmd.
