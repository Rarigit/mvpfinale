<template>
    <div>
        <v-footer color="#029aff">
        <v-row justify="center" no-gutters>
        <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            variant="text"
            class="mx-2"
            rounded="xl"
        >
            {{ link }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Rari Design LLC.</strong>
        </v-col>
        </v-row>
    </v-footer>
    </div>
</template>

<script>
    export default {
        name: "FooterMvp",
        data: () => ({
            links: [
                'Log-In',
                'Sign-up',
                'Predict',
            ],
        }),
    }
</script>

<style scoped>
    v-footer{
        position: fixed;
    }
</style>