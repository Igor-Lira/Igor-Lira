<script setup>
import ProjectPage from "../ProjectPage.vue";
</script>

<template>
  <ProjectPage>
    <template #title> FIND YOUR DUO </template>
    <template #description>
      <p>
        A full-stack application that helps gamers to find other people to play
        together according to their preferences, such as which game they play,
        when they usually are online, and if they use voice chat. The user can
        also create an announcement and wait for others to connect.
      </p>
      <p>
        Both mobile and web versions have three main pages: a game list, an
        announcement list and a formulary to create an announcement.
      </p>
    </template>

    <template #link="{ open }">
      <img
        @click="open('https://github.com/Igor-Lira/find-your-duo')"
        alt="GitHub forks"
        src="https://img.shields.io/github/forks/Igor-Lira/find-your-duo?label=find-your-duo&style=social"
      />
    </template>
    <template #about>
      <p>
        Developed along with the NLW course by
        <a href="https://lp.rocketseat.com.br/nlw"> Rockseat</a> e-sport
        edition.
      </p>
      <p>
        On the server side, NodeJs with Express is used to create a server and
        perform Create and Read commands for Game and Announcement models. I
        used Prisma TypeScript ORM, since it facilitates data modelling,
        migrations with safety typing and auto-completion. Not only that, but
        Prisma has an interface that helps to interact with the current stored
        data. I defined the schemas based on my needs: 1 game have
        <i>n</i> announcements, and 1 announcement is related with 1 game.
      </p>

      <p>
        On the client side, I used React to build components such as the Game
        Card and the Announcement Card, and React Native to create the mobile
        version. Aditionally, Tailwind CSS was used for styling the website.
      </p>
    </template>
    <template #video>
      <div class="video-item">
        <iframe
          width="473"
          height="315"
          src="https://www.youtube.com/embed/gfqAo8Os1XI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-item">
        <iframe
          width="473"
          height="840"
          src="https://www.youtube.com/embed/W48FVi21Sdw"
          title="Side Project - Find Your Duo - mobile"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </template>
  </ProjectPage>
</template>

<style scoped>
.video-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
</style>
