<script setup lang="ts">
import { createPost } from '../services/service.backend'
import Swal from 'sweetalert2'
import router from '@/router'
let title: string = ''
let content: string = ''

const onCreatePost = async () => {
  const user = JSON.parse(localStorage.getItem('user') || '')
  const { _id } = user
  const response = await createPost(_id, { title, content })
  if (response) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Post creado!',
      showConfirmButton: true
    }).then((m) => {
      if (m.isConfirmed) {
        router.push('/home/posts')
      }
    })
  }
}
</script>

<template>
  <h1>Crear Post</h1>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="card p-2">
          <div class="input">
            <input v-model="title" class="form-control" type="text" placeholder="Titulo" />
          </div>
          <div class="input">
            <textarea
              v-model="content"
              class="form-control"
              type="text-"
              placeholder="Contenido"
              minlength="20"
              maxlength="200"
            />
          </div>
          <button @click="onCreatePost()" class="btn btn-primary mt-2">Crear</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  justify-content: center;
}

.card {
  gap: 5px;
}

textarea {
  height: 300px;
}
</style>
