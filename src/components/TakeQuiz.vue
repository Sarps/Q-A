<template>
    <v-stepper value="1" v-model="quiz_number" non-linear vertical>
        
        <v-stepper-items>
            <v-stepper-content v-for="i in count" :key="i" :step="i" class="fill-height">
                <v-card class="mb-1" color="grey lighten-1" height="200px"></v-card>
                <v-radio-group v-model="value">
                    <v-radio color="primary" label="Invalid prop: type check failed for prop ripple. Expected Boolean, Object, got String." ripple="true" value="value"></v-radio>
                    <v-radio color="primary" label="Invalid prop: type check failed for prop ripple." ripple="true" value="value"></v-radio>
                    <v-radio color="primary" label="Invalid prop: type check failed for prop ripple." ripple="true" value="value"></v-radio>
                    <v-radio color="primary" label="Invalid prop: type check failed for prop ripple." ripple="true" value="value"></v-radio>
                </v-radio-group>
            </v-stepper-content>
            <v-layout row wrap>
                <v-btn color="primary" @click="previous" :disabled="disablePrevious">Previous</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="next" :disabled="disableContinue">next</v-btn>
            </v-layout>
        </v-stepper-items>
    </v-stepper>
</template>

<script>
    export default {

        data() {
            return {
                quiz_number: 1,
                count: 3
            }
        },

        computed: {
            disableContinue() {
                return this.quiz_number >= this.count;
            },

            disablePrevious() {
                return this.quiz_number <= 1;
            }
        },

        methods: {
            next() {
                this.quiz_number++;
            },

            previous() {
                this.quiz_number--
            }
        }
        
    }
</script>

<style>

</style>