<template>
    <v-navigation-drawer temporary app v-model="value" clipped>
        <v-toolbar flat color="primary">
            <v-btn icon color="secondary" @click="value = !value">
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        Hobby Up
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-card>
            <v-img height="200px" src="/logo.png">
                <v-container fill-height fluid pa-2>
                    <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <span class="headline white--text">card title</span>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-img>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>share</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-divider></v-divider>
        <v-list>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>dashboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>My Purchases</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-action><v-icon>bookmark</v-icon></v-list-tile-action>
                <v-list-tile-content><v-list-tile-title>My Wishlist</v-list-tile-title></v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-action><v-icon>style</v-icon></v-list-tile-action>
                <v-list-tile-content><v-list-tile-title>My Progress</v-list-tile-title></v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-action><v-icon>notifications</v-icon></v-list-tile-action>
                <v-list-tile-content><v-list-tile-title>Notification</v-list-tile-title></v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile>
                <v-list-tile-action><v-icon>verified_user</v-icon></v-list-tile-action>
                <v-list-tile-content><v-list-tile-title>Account</v-list-tile-title></v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-action><v-icon>payment</v-icon></v-list-tile-action>
                <v-list-tile-content><v-list-tile-title>Payment Method</v-list-tile-title></v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data() {
            return {

            }
        },

        props: ["value"]
    }
</script>

<style>

</style>