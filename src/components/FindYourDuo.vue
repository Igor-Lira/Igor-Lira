<script setup>
import ProjectPage from './ProjectPage.vue'
</script>
    
<template>
    <ProjectPage>
        <template #title>Find Your Duo</template>
        <template #description>
            <p>
                Find your duo is a full-stack application that assists gamers in finding other people to play together
                based
                on their preferences, such as which game they play, when they usually are online, and if they use voice
                chat.
                The
                user can also create an announcement and wait for others to connect. There is a mobile and a web
                version.
            </p>

        </template>
        <template #about>
            <p>
                This project was developed in the NLW course by Rockseat, which consists of creating a React/React
                Native
                client with NodeJs in backend.
            </p>

            <p>
                On the server side, express is used to create a server and retrieve GET and POST requests for
                <b> users </b> and <b> announcements</b> models. Prisma TypeScript ORM facilitates data
                modelling, migrations,
                type-safety and auto-completion.
            </p>

            <p>
                On the client side, react uses components such as the Game Card that repeats in a list. React
                Native
                with expo is used to create the mobile version. Tailwindcss is used to add styling to the website.
            </p>
        </template>
        <template #video>
            <div class="video-item">
                <iframe width="473" height="315" src="https://www.youtube.com/embed/gfqAo8Os1XI"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <div class="video-item">
                <iframe width="473" height="840" src="https://www.youtube.com/embed/W48FVi21Sdw"
                    title="Side Project - Find Your Duo - mobile" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
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