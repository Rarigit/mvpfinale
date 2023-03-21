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
                                <p class="pFont">Parse data in order to get current price and compare it to metrcics</p>
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
                                <p class="pFont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas explicabo modi ea neque, quibusdam atque, suscipit magni quia accusamus repellat at. Voluptate fugiat numquam obcaecati aut placeat! Illum, quaerat!</p>
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
                                <p class="pFont">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos est quaerat excepturi natus. Hic sunt iste nemo. Expedita adipisci assumenda eveniet iure exercitationem. Repellat, autem dicta qui sapiente vel nihil!</p>
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