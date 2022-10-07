<script setup>
import ProjectPage from "../ProjectPage.vue";
</script>

<template>
  <ProjectPage>
    <template #title>POST YOUR IDEAS</template>
    <template #description>
      <p>
        A Full-stack project that allows users to post texts with images to
        share their thoughts (similar to Twitter). In order to create, edit and
        delete posts, the user may log in. All posts are avaible to the network
        see.
      </p>
      <p>
        The client-side consists of three main views: the login page, the post's
        timeline, and the formulary for creating and editing posts.
      </p>
      <p>
        The server handles CRUD requests for users and posts by using a NoSQL
        database.
      </p>
    </template>
    <template #about>
      <p></p>
      I developed this project along with a full-stack
      <a
        href="https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide/"
        >Udemy course</a
      >.

      <p>
        The server is setup with NodeJs, Express and MongoDB as a NoSQL database
        to store user and posts information. I created the database schemas with
        Mongoose, because it includes built-in type casting, validation and
        query building. The server interacts with the database with CRUD
        (Create, Read, Update and Delete) commands for User and Post models. I
        learned more about some core concepts of web development:
        authentication, authorization, and pagination. The authentication to
        create tokens to check if user is logged in and is enabled to create
        posts. The authorization to check if the logged in user has the
        permissions to edit or delete a post. Pagination to avoid loading too
        many posts of a large dataset by adding limit and offset in requests
        query filters.
      </p>
      <p>
        On the client-side, I created the core components and views to the
        application with Angular. In order to increase the productivity, I used
        the Angular material design. Also, I implemented the logic to display
        the buttons (Create, Edit, Delete) and Pages (Log In, Log Out) according
        to the user authorization and authentication.
      </p>
    </template>
    <template #video>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Tfnzh2fxGw8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </template>
  </ProjectPage>
</template>
