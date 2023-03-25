<template>
    <div>
        <v-app-bar app color="black" dark flat class="px-12">
            <v-toolbar-title>
                <v-btn text router to="/" height="15vh">
                    <v-avatar class="mr-7">
                        <v-img src="@/assets/logwhite.png" class="vImage"></v-img>
                    </v-avatar>
                    <span class="mr-2">BetToken</span>
                </v-btn>
            </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="scroll('news')" class="text-yellow" router-link to="/registerClient">Sign-Up</v-btn>
        <v-btn text @click="scroll('sign-up')" class="text-yellow" router-link to="/loginClient">Log-in</v-btn>
        <v-btn text @click="scroll('predict')" class="text-yellow">Predict</v-btn>
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

/* .vImage{
    height: 4vh;
} */
</style>