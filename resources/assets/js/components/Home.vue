<template>

</template>

<script>

    const HomeModel = {
        name: "Andres Zapata",
        email: "andfelzapatacano@gmail.com",
        skype: "andfelzapata"
    }

    export default {
        ready() {
            console.log('Component ready.')
        },

        data() {
            return {
                HomeModel
            }
        }
    }
</script>
