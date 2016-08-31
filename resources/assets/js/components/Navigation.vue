<template>
    <nav class="navbar navbar-light bg-faded">
        <a class="navbar-brand" href="/">
            <kbd>
                    <span class="Initials">
                        <span>A</span>
                        <span>Z</span>
                    </span>
            </kbd>
        </a>
        <ul class="nav navbar-nav">
            <li class="nav-item" v-for="section in sections">
                <a class="nav-link" href="#{{ section.slug }}">{{ section.title }}</a>
            </li>
        </ul>
    </nav>
</template>

<style>

</style>

<script>

    export default {

        data() {
            return{
                sections: [
                    {title: "Summary", slug: "summary"},
                    {title: "Skills", slug: "skills"},
                    {title: "Experience", slug: "experience"},
                    {title: "Hobbies", slug: "hobbies"},
                ]
            }
        }
    }
</script>
