<template>
    <h3 class="Heading Heading--small Heading--inline">
        <a class="Hyperlink Hyperlink--twitter" href={{`https://twitter.com/${username}`}} target="_blank">
            <i class="fa fa-twitter Hyperlink--twitter__icon" aria-hidden="true"></i>
        </a>
    </h3>
</template>

<style>
    .Hyperlink--twitter__icon {
        color: #1da1f2;
    }
</style>

<script>
    export default {

        props: ['username']

    }
</script>
