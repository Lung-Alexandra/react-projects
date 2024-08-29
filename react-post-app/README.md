# Simple Post App


`Add Posts`: Users can add a new post by filling out a simple form with two fields: one for the post content and another for the post author.

`View Posts`: All posts added by users are displayed in a list, with each item in the list showing the post's author and content.


This project actually contains two projects:
- A React.js application (i.e., the frontend SPA)
- A dummy backend API to which the React app can "talk" (to send + fetch data)

You must run "npm install" in both project folders.

Thereafter, you can start the dummy backend API server via "npm start" (inside the "backend-api" folder).
The React app dev server is then also started via "npm start" (though inside the "react-frontend" folder).

You MUST have both servers (backend + frontend) up and running for the projects to work.

The dummy backend API does not use any external database - instead the dummy data is saved to a "posts.json" file inside the project folder.
