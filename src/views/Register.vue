<script setup lang="ts">
import router from '@/router'
import { register } from '../services/service.backend'

let name: string = ''
let email: string = ''
let password: string = ''

const toRegister = async () => {
  if (name.length === 0 && email.length === 0 && password.length === 0) {
    return
  }
  const response = await register(name, email, password)
  if (response) {
    router.push('/')
  }
}
</script>

<template>
  <div class="container text-center animate__animated animate__fadeIn">
    <div class="login d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col img-avatar__ia">
              <img id="myImage" src="../assets/logo.svg" />
            </div>
          </div>
          <div class="row title">
            <span class="display-5"> Registro </span>
          </div>
          <div className="input my-2 mt-5">
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              v-model="name"
              autoComplete="new-password"
              required
            />
          </div>
          <div className="input my-2">
            <input
              type="email"
              placeholder="Email"
              name="email"
              v-model="email"
              autoComplete="new-password"
              required
            />
          </div>
          <div className="input my-2">
            <input
              type="password"
              placeholder="Password"
              name="password"
              v-model="password"
              autoComplete="new-password"
              required
            />
          </div>
          <div className="row">
            <div className="btn-confirm mt-3">
              <button @click="toRegister()" type="submit" id="myBtnConfirm">Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body,
.login {
  min-height: 100vh;
}

.input > input {
  width: 300px;
  outline: none;
  border: none;
  border-radius: 999px 999px 999px 999px;
  height: 50px;
  text-align: center;
}

input:hover {
  background-color: rgb(236, 231, 231);
}

#myBtnConfirm {
  color: white;
  background-color: #333;
  height: 50px;
  width: 300px;
  outline: none !important;
  border: none;
  border-radius: 999px 999px 999px 999px;
}

#myBtnConfirm:hover {
  background: rgb(58, 180, 74);
  background: linear-gradient(90deg, rgb(58, 180, 78) 0%, rgba(69, 129, 252, 1) 100%);
}

.img-avatar__ia {
  width: 200px;
}

#myImage {
  width: 200px;
  height: 200px;
}
</style>
