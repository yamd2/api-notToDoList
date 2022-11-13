# RESTFULL API for not to do list

This api is create for react not to do frontend application, here is the repo for frontend
`...`

## How to run

1. Open your terminal at your developement folder>
2. Run `git clone ....`
3. Run `cd ....`
4. Run `npm install`
5. Run `npm start`

Now, your server is running at `http://localhost:8000`

## API details

This server applies the REST full principle to provide API.
All the api will follow `<rooturl>/v1/<resources end point>`

### Task API

All the task related transaction of api will be request through `<rooturl>/v1/task/`

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION                                                   |
| --- | ---- | ------ | ---------- | ------------------------------------------------------------- |
| 1.  | `/`  | GET    | No         | This endpoint will return all the task from database          |
| 2.  | `/`  | POST   | No         | Receives an object from the client and stores in the database |
| 3.  | `/`  | PUT    | No         | Receives `_id` of specific object and the data to update      |
| 4.  | `/`  | DELETE | No         | Receives `_id` and deletes it from database                   |
