<script setup>
import ProjectPage from "../ProjectPage.vue";
</script>

<template>
  <ProjectPage>
    <template #title>POST YOUR IDEAS</template>
    <template #description>
      <p>
        Single Page Application similar to Twitter, users may create posts with
        images to share thoughts. The user may log in to be able to create, edit
        and delete posts while they can see other users' posts.
      </p>
      <p>
        The client-side consists of three main views: the login page, the post's
        timeline, and the formulary for creating and editing posts.
      </p>
      <p>
        The server handles CRUD requests for users and posts models with a NoSQL
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
        The technologies used for building the application were
        <b> Angular </b> in the front end, and <b>NodeJs</b> in the backend,
        using <b>MongoDB</b> as a database to store user and post information.
        Mongoose is an easy way to create database schemas for MongoDB and apply
        some queries for CRUD requisitions.
      </p>

      <p>
        I learned some core web development concepts, such as the
        <b>authentication</b> of clients to check if they are logged in or not
        and <b>authorization</b> to check if a user has the permission to edit
        or delete a post. Moreover, pagination is an elegant way to avoid
        loading too many posts on a large dataset.
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
