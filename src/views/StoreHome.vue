<template>
<v-layout row wrap>
    <v-flex xs12>
        <v-card v-for="i in 3" :key="i" class="my-2 elevation-6">
            <v-subheader>Most Downloaded</v-subheader>
            <v-container grid-list-md>
                <v-layout class="courses">
                    <v-flex v-for="n in 5" :key="n">
                        <div style="width: 100px;height: 100px" class=" grey lighten-1"></div>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-divider></v-divider>
        </v-card>
    </v-flex>
</v-layout>
</template>

<script>
export default {};
</script>

<style>
    .courses {
        overflow-x: auto;
    }

    .v-card {
        border-radius: 0;
    }
</style>
