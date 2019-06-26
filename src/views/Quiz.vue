<template>
    <v-card class="fill-height">
        <take-quiz></take-quiz>
        <v-bottom-nav absolute shift value="bottom_nav" active.sync="bottom_nav" color="primary">
            <v-btn value="home">
                <span>Options</span>
                <v-icon>settings</v-icon>
            </v-btn>
            <v-btn>
                <span>Quiz</span>
                <v-icon>assignment</v-icon>
            </v-btn>
            <v-btn>
                <span>Scoreboard</span>
                <v-icon>assessment</v-icon>
            </v-btn>
            <v-btn>
                <span>Chat Room</span>
                <v-badge right color="secondary">
                    <v-icon>chat</v-icon>
                    <span slot="badge">12</span>
                </v-badge>
            </v-btn>
        </v-bottom-nav>
    </v-card>
</template>

<script>

import TakeQuiz from '../components/TakeQuiz';

export default {
    data() {
        return {
            bottom_nav: null
        }
    },

    components: {
        TakeQuiz
    }
}
</script>

<style>

</style>
