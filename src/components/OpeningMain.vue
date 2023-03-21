<template>
    <transition name="opening-animation">
    <v-app class="container">
        <div class="opening-animation"></div>
            <div class="backImage">
                <img src="@/assets/logohigh.png"/>
                    <!-- <v-row justify="center">
                        <v-col cols="16" md="6">
                            <v-slide-x-transition>
                                <v-card v-if="showCard">
                                    <div class="cardContent mx-auto">
                                        WHEN CARD SER!
                                    </div>
                                </v-card>
                            </v-slide-x-transition>
                            <v-row class="mx-auto">
                                <v-btn color="black--text blue" @click="dropCard">Drop Card</v-btn>
                            </v-row>
                        </v-col>
                    </v-row> -->
            </div>
            <div class="loaderWrapper" v-if="isLoading">
                <span class="loader"><span class="loader-inner"></span></span>
            </div>
    </v-app>
    </transition>
</template>

<script>
    export default {
        name: "OpeningMain",
        data() {
            return {
                isLoading: true,
                showCard: false,
            }
        },
        methods: {
            dropCard() {
                this.showCard = true
            }
        },
        mounted () {
            setTimeout(() => {
                this.isLoading = false;
                document.querySelector('.opening-animation').classList.add('opening-animation-end');
                this.dropCard();
            }, 3000);
            window.addEventListener("beforeunload", function() {
            const loaderWrapper = document.querySelector(".loaderWrapper");
            loaderWrapper.style.opacity = 0;
            loaderWrapper.style.transition = 'opacity 2s ease-out';
            });
        }
    }
</script>

<style scoped>

/* .cardContent {
    padding: 1px;
    font: blue;
    justify-content: center;
    display: flex;
    justify-self: center;
    align-items: center;
    background-color: #029aff;
    height: 40vh;
    width: 100%;
} */

.opening-animation {
    transform: scaleX(0);
    transform-origin: left;
    opacity: 0;
    transition: opacity 2s ease-out;
}
.opening-animation-end {
    transform: scaleX(1);
    opacity: 1;
    transition-delay: 2s;
}

.backImage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /* background-image: url(@/assets/logohigh.png); */
}

.loader{
    display: inline-block;
    width: 70px;
    height: 70px;
    position: relative;
    border: 4px solid white;
    animation: loader 2s infinite ease;
}

.loaderWrapper{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: opacity 2s ease-out;
    transition-delay: 2s;
}

.loader-inner {
    vertical-align: top;
    display: inline-block;
    width: 100%;
    background-color: rgb(15, 147, 255);
    animation: loader-inner 2s infinite ease-in;
}

@keyframes loader {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes loader-inner {
    0% {
        height: 0%;
    }
    25% {
        height: 0%;
    }
    50% {
        height: 100%;
    }
}

</style>