<script setup lang="ts">

const listItems: Links[] = [
    {
        name: 'Posts',
        url: '/home/posts'
    },
    {
        name: 'Crear post',
        url: ''
    },
    // {
    //     name: 'Editar post',
    //     url: ''
    // },
    // {
    //     name: 'Eliminar post',
    //     url: ''
    // },
]

interface Links {
    url: string,
    name: string
}

</script>

<template>
    <div>
        <nav class="navbar bg-light py-0 navbar-expand-lg">
            <div class="container-fluid">
                <RouterLink to="/" class="navbar-brand">
                    <img  alt="" style="height: 50px;" />App
                </RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item mx-2" v-for="link in listItems">
                            <RouterLink :to="link.url"> {{ link.name }} </RouterLink>
                        </li>
                    </ul>
                        <span class="spacer"></span>
                        <span class='mx-2'>|</span>
                        <a class='btn btn-outline-dark'>Logout</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.spacer{
    flex: 1 1 auto;
}
</style>