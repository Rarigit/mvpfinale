<template>
    <v-app>
    <nav>
        <TopPortBar/>
        <v-navigation-drawer v-model="drawer" dark app mini-variant mini-variant-width="150" class="black">
            <div class="portLogo">
                <v-avatar class="d-block text-center mx-auto mt-4 my-10" size="40">
                    <v-img src="@/assets/logwhite.png" class="vImage"></v-img>
                </v-avatar>
            </div>
            <v-list>
                <v-list-item class="mb-12" router to="/">
                    <v-list-item-content>
                        <v-text-field class="mb-2" large prepend-icon="mdi-home" label="Home"></v-text-field>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list>
            <v-list-item router to="/portProfile">
                <v-list-item-content>
                    <v-text-field class="mb-2" large prepend-icon="mdi-account" label="Profile"></v-text-field>
                </v-list-item-content>
            </v-list-item>
            </v-list>
            <v-list-item router to="/loginClient" style="position: absolute; bottom:0" class="ml-3" flat>
                <v-list-item-content>
                    <v-text-field class="mb-2" large prepend-icon="mdi-logout" label="Sign Out"></v-text-field>
                </v-list-item-content>
            </v-list-item>
        </v-navigation-drawer>
    </nav>
    <PortBalance/>
    </v-app>
</template>

<script>
import TopPortBar from "@/components/TopPortBar.vue"
import PortBalance from "@/components/PortBalance.vue";

    export default {
        name: "PortfolioMain",
        components: {
            TopPortBar,
            PortBalance
        },
    }
</script>

<style scoped>

.portLogo{
    display: flex;
    justify-content: center;
}

.vImage{
    height: 5vh;
    width: 5vw;
}

</style>