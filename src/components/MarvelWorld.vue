<template>
  <div class="description-container">
    <div class="title-1"> Marvel World </div>
    <div class="title-2"> Project description </div>
    <div class="description-description">
      Marvel world is a Single Page Application that fetches data from the Marvel
      public API and intuitively displays its
      content. The user can search for a hero and discover its history and in which comics they appear. Digging further,
      the user can access the comic details, such as the synopsis, price, and other heroes appearing in the comic.

      I used VueJs since it is one of the powerful frameworks to use components to create modern SPA. The most evident
      component is the card that will handle the hero's information with its name, image, and history.

      You can fork to create more features since Marvel's API has a lot of information that may be interesting to add!
    </div>
    <div class="title-2"> About this project </div>
    <div class="description-description">
      This was my first side project. I was motivated to use front-end technologies to build an exciting website.
      Connecting a website to an API is one of the best ways to start. I decided to use Marvel API because it is free
      and
      easy to use. It is also fantastic to discover new heroes, isn't it?

      I learned how to connect a front-end with a back-end using a RestFul API. Also, I used components that empower the
      front-end development workflow since less repetitive code is needed to display a list, for instance. One of my
      concerns was to create a minimum responsive layout, so I developed using a mobile device layout to check if the
      accessibility was good enough.
    </div>
  </div>
</template>

<style scoped>
.description-container {
  margin-left: 10%;
  width: 80%;
}

.title-1 {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  color: #000000;
}

.title-2 {
  font-family: 'Itim';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  color: #C4C4C4;
}
</style>