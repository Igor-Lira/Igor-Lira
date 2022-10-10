<script setup>
import ProjectPage from "../ProjectPage.vue";
</script>

<template>
  <ProjectPage>
    <template #title> MARVEL UNIVERSE </template>
    <template #description>
      <p>
        A website provides users with information about Marvel characters to
        discover their history and which comics, stories and series they appear
        in. Digging further, the user can find more about the comics, such as
        the synopsis, price and which other superheroes fight together.
      </p>
    </template>
    <template #link="{ open }">
      <img
        @click="open('https://github.com/Igor-Lira/marvel-world')"
        alt="GitHub forks"
        src="https://img.shields.io/github/forks/Igor-Lira/marvel-world?label=marvel-world&style=social"
      />
    </template>
    <template #about>
      <p>
        This project is a Single Page Application built with VueJs. The
        front-end routing enables the navigation between the views (List of
        superheroes, Character Info, and Comic Info) without refreshing the
        page.
      </p>
      <p>
        I choose Vue3 because it is one of the most powerful frameworks to use
        components to create modern SPA. The most evident component is the card
        that will handle the hero's information (name, image and description).
      </p>
      <p>
        The content is fetched from the
        <a href="https://developer.marvel.com/"> Marvel public API</a>. I
        learned how to make an integration of a client application with an
        external RestFul API. Also, I explored the documentation to find out
        which routes would be helpful for my needs. Additionally, I searched for
        filter queries that go with the requests. For instance, if the user
        searches for a specific character, the request must be filtered with
        "name starts with".
      </p>
      <p>
        One of my concerns was to create a responsive layout, so I navigated in
        a mobile layout to check if accessibility was good enough. I made good
        use of flexbox and media queries to reach this goal.
      </p>
    </template>
    <template #video>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Iiw6rwMKbRM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </template>
  </ProjectPage>
</template>

<style scoped>
.github-repository {
  height: 20px;
}
.github-repository > img {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
