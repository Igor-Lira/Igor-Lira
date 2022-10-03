<script setup>
import ProjectPage from './ProjectPage.vue'
</script>

<template>
  <ProjectPage>
    <template #title> MARVEL WORLD </template>
    <template #description>
      <p>
        A Single Page Application that fetches data from the <a href="https://developer.marvel.com/"> Marvel public
          API</a> and intuitively displays its contents.
        The user can search for a hero and discover its history and in which comics they appear. Digging further,
        the user can access the comic details, such as the the synopsis, price, and other heroes appearing in the comic.
      </p>

    </template>
    <template #about>
      <p>
        I used <b>VueJs</b> since it is one of the powerful frameworks to use components to create modern SPA. The most
        evident
        component is the card that will handle the hero's information (name, image and description).
      </p>
      <p>
        This was my first side project. I was motivated to use front-end technologies to build an exciting website.
        Connecting a website to an API is one of the best ways to start. I decided to use Marvel API because it is free
        and
        easy to use. It is also fantastic to discover new heroes, isn't it?
      </p>

      <p>
        One of my
        concerns was to create a minimum <b>responsive layout</b>, so I developed using a mobile device layout to check
        the
        accessibility.
      </p>

    </template>
    <template #video>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Qua8Ec9aSlE" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
    </template>
  </ProjectPage>
</template>