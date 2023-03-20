<template>
    <div class="container">
    <v-app v-if="isLoading">
        <v-img
            src="@/assets/logohigh.png"
            alt="Animation"
            width="100%"
            height="auto"
            class="animated-logo"
        />
        <v-progress-circular v-if="isLoading" :rotate="360" :size="100" :model-value="value" :width="10" color="blue" indeterminate class="progress"> {{ value }} </v-progress-circular>
    </v-app>
    <!-- <v-app v-else>
        <slot />
    </v-app> -->
    </div>
</template>

<script>
    export default {
        name: "OpeningMain",
        data() {
            return {
                isLoading: true,
            }
        },
        mounted () {
            setTimeout(() => {
                this.isLoading = false;
        }, 3000);
        },
    }
</script>

<style scoped>

.container{
    position: relative;
    overflow: hidden;
}

.animated-logo {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    animation: fadeIn 3s ease-in-out, rotate 2s linear;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    } 
}


</style>