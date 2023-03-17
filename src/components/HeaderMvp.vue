<template>
    <div>
        <v-app-bar app color="black" dark flat class="px-12">
            <h1>
                <v-icon color="yellow" left class="mr-2"></v-icon>BetToken
            </h1>
        <v-spacer></v-spacer>
        <v-btn text @click="scroll('news')" class="text-yellow">News</v-btn>
        <v-btn text @click="scroll('sign-up')" class="text-yellow">Sign-Up</v-btn>
        <v-btn text @click="scroll('predict')" class="text-yellow">Predict</v-btn>
        <v-btn text @click="scroll('watch-list')" class="text-yellow" router-link to="/watch-list">Watch-list</v-btn>
    </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "HeaderMvp",
        methods: {
            scroll(refName) {
                const element = document.getElementById(refName);
                element.scrollIntoView({behavior: "smooth"}); 
            }
        },

    }
</script>

<style scoped>
.dark-blue {
    background-color: #029aff;
}

</style>