<script setup>
import ProjectPage from "../ProjectPage.vue";
</script>

<template>
  <ProjectPage>
    <template #title> MARVEL UNIVERSE </template>
    <template #description>
      <p>
        A website that provides users with acess to information about different
        Marvel characters, to discover their history and the comics they are
        included in. Digging further, the user can find out Marvel comics'
        details, such as their synopsis, price and which superheroes appear.
      </p>
    </template>
    <template #about>
      <p>
        This project is a Single Page Application built with VueJs with a
        front-end routing to navigate between the views: Heroes List, Hero Info,
        and Comic Info.
      </p>
      <p>
        I choose Vue3 because it is one of the powerful frameworks to use
        components to create modern SPA. The most evident component is the card
        that will handle the hero's information (name, image and description).
      </p>
      <p>
        The content is fetched from the
        <a href="https://developer.marvel.com/"> Marvel public API</a>. In that
        way, I implemented an integration with an external API with a RestFul
        architecture. I could retrieve the important data for my application by
        reading the documentation and spotting which routes were useful for me.
        Aditionally, I checked which queries I could use in the requests. For
        instance, if the user searches for a specific character, the request
        must be filtered with nameStartsWith.
      </p>
      <p>
        One of my concerns was to create a responsive layout, so I navigated in
        a mobile layout to check if accessibility was good enough. I made good
        use of flexboxs and media queries CSS tricks to reach this goal.
      </p>
    </template>
    <template #video>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Qua8Ec9aSlE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </template>
  </ProjectPage>
</template>
