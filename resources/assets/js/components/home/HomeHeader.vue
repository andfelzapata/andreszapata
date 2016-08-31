<template>
    <div>
        <h1 class="Heading Heading--large">{{ name }}</h1>
        <h3 class="Heading Heading--small">{{ email }}</h3>
        <div class="container text-center">
            <twitter username="andfelzapata"></twitter>
            <h3 class="Heading Heading--small Heading--inline">&middot;</h3>
            <git-hub username="andfelzapata"></git-hub>
        </div>
    </div>
</template>

<style>

</style>

<script>

    import Twitter from '../social/Twitter.vue';
    import Skype from '../social/Skype.vue';
    import GitHub from '../social/GitHub.vue';

    export default {

        data(){
            return{
                name: 'Andres Zapata',
                email: 'andreszapatacano@gmail.com',
                twitter: 'andfelzapata',
                skype: 'andfelzapata'
            }
        },

        components: {
            Twitter,
            Skype,
            GitHub
        }
    }
</script>
