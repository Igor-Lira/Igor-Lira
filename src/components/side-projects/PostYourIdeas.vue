<script setup>
import ProjectPage from "../ProjectPage.vue";
</script>

<template>
  <ProjectPage>
    <template #title>POST YOUR IDEAS</template>
    <template #description>
      <p>
        This full-stack project allows users to post texts with images to share
        their thoughts (similar to Twitter). The user may log in to create, edit
        and delete posts. All posts are available for the community to see.
      </p>
      <p>
        The client-side consists of three main views: the login page, the post's
        timeline, and the formulary for creating and editing posts.
      </p>
      <p>
        The server handles CRUD requests for users and posts supported by a
        NoSQL database.
      </p>
    </template>
    <template #link="{ open }">
      <img
        @click="open('https://github.com/Igor-Lira/post-your-ideas')"
        alt="GitHub forks"
        src="https://img.shields.io/github/forks/Igor-Lira/post-your-ideas?label=post-your-ideas&style=social"
      />
    </template>
    <template #about>
      <p></p>
      I developed this project when I took a full-stack
      <a
        href="https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide/"
        >Udemy course</a
      >.

      <p>
        The server is set up with NodeJs, Express and MongoDB to store users and
        post information. I created the database schemas with Mongoose because
        it includes built-in type casting, validation and query building. The
        server interacts with the database with CRUD (Create, Read, Update and
        Delete) commands for User and Post models. I learned more about some
        core concepts of web development: Authentication, authorization, and
        pagination. Authentication to create tokens to check if a user is logged
        in and is enabled to create posts. Authorization to check if the
        logged-in user has permission to edit or delete a post. Pagination
        avoids loading too many posts of a large dataset by adding limit and
        offset in requests.
      </p>
      <p>
        On the client side, I created the core components and views with
        Angular, and to increase productivity, I used the Angular material
        design. Also, I implemented the logic to display the buttons (Create,
        Edit, Delete) and Pages (Login, Log Out) according to the user
        authorization and authentication.
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
