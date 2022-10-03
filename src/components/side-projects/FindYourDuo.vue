<script setup>
import ProjectPage from "../ProjectPage.vue";
</script>

<template>
  <ProjectPage>
    <template #title> FIND YOUR DUO </template>
    <template #description>
      <p>
        A full-stack application helps gamers find other people to play together
        according to their preferences, such as which game they play, when they
        usually are online, and if they use voice chat. The user can also create
        an announcement and wait for others to connect.
      </p>
      <p>
        Both mobile and web versions have three main pages: a game list, an
        announcement list and a formulary to create an announcement.
      </p>
    </template>
    <template #about>
      <p>
        Developed along with the NLW course by
        <a href="https://lp.rocketseat.com.br/nlw"> Rockseat</a> e-sport
        edition.
      </p>

      <p>
        On the server side, <b>NodeJs</b> with <b>Express</b> is used to create
        a server and retrieve GET and POST requests for users and announcements
        models. <b>Prisma</b> TypeScript ORM facilitates data modelling,
        migrations, type-safety and auto-completion.
      </p>

      <p>
        On the client side, <b>React</b> use components such as the Game Card
        and the Announcement Card. <b>React Native</b> with <b>Expo</b> is used
        to create the mobile version. Tailwind CSS is used for styling the
        website.
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
