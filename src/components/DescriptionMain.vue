<template>
    <v-card>
        <v-card align="center" justify="center" color="#029aff" class="rounded-lg" flat height="65vh">
        <v-row>
            <v-col cols="12" sm="4">
                <v-card align="center" justify="center" color="transparent" class="rounded-lg mx-2" flat>
                    <v-app-bar align="center" justify="center" flat color="white" class="mt-7" height="500vh" width="20vw">
                        <v-list-item class="mb-12">
                            <v-list-item-content>
                                <h1 class="black--text mx-auto">Parse</h1>
                                <v-text-field class="mb-2" large prepend-icon="mdi-file-document"></v-text-field>
                                <p class="pFont">Parse real-time data in order to get current price. Compare it to different metrics and optimize your trading strategy</p>
                            </v-list-item-content>
                        </v-list-item>
                    </v-app-bar>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4">
                <v-card color="transparent" class="rounded-lg mx-2" flat>
                    <v-app-bar flat color="white" class="mt-7" height="500vh" width="20vw">
                        <v-list-item class="mb-12">
                            <v-list-item-content>
                                <h1 class="black--text mx-auto">Predict</h1>
                                <v-text-field class="mb-2" large prepend-icon="mdi-chart-line"></v-text-field>
                                <p class="pFont">Estimate the price of an asset for the next 24 hours using technical and fundamental analysis</p>
                            </v-list-item-content>
                        </v-list-item>
                    </v-app-bar>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4">
                <v-card color="transparent" class="rounded-lg mx-2" flat>
                    <v-app-bar flat color="white" class="mt-7" height="500vh" width="20vw">
                        <v-list-item class="mb-12">
                            <v-list-item-content>
                                <h1 class="black--text mx-auto">Profit</h1>
                                <v-text-field class="mb-2" large prepend-icon="mdi-cash"></v-text-field>
                                <p class="pFont">Develop a strategy and log your trades so that you can win big in the market</p>
                            </v-list-item-content>
                        </v-list-item>
                    </v-app-bar>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
    </v-card>
</template>

<script>
    export default {
        name: "DescriptionMain"
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
.pFont {
    font-family: 'Lato', sans-serif;
}

</style>