<script setup>
import ProjectPage from './ProjectPage.vue'
</script>
    
<template>
    <ProjectPage>
        <template #title>Post Your Ideas</template>
        <template #description>

        </template>
        <template #about>

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