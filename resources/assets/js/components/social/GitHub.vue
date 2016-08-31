<template>
    <h3 class="Heading Heading--small Heading--inline">
        <a class="Hyperlink Hyperlink--github" href={{`https://github.com/${username}`}} target="_blank">
            <i class="fa fa-github Hyperlink--github__icon" aria-hidden="true"></i>
        </a>
    </h3>
</template>

<style>

    .Hyperlink--github__icon {
        color: #999999;
    }

</style>

<script>
    export default{

        props: ['username']
    }
</script>
