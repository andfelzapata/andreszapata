<template>
    <div>
        <h3 class="Heading Heading--small">
            <i class="fa fa-skype" aria-hidden="true"></i> {{username}}
        </h3>
    </div>
</template>

<script>
    export default {

        props: ['username'],

        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
