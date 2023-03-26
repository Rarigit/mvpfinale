<template>
    <transition name="opening-animation">
    <v-app class="container">
        <div class="opening-animation"></div>
            <div class="backImage">
                <img src="@/assets/logohigh.png"/>
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
/*Watched a tutorial on animations to get most of this CSS, couldn't figure out how to get the animation before page load. 
Managed to get opening animation cover at least 50%.*/
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
    background-color: rgb(255, 255, 255);
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