<script setup lang="ts">
import router from '@/router';
import { login, getToken } from '../services/service.backend'

    let email: string = "chechomens@gmail.com";
    let password: string = "123456";

    const toLogin = async () => {
        if (email.length === 0 && password.length === 0) {
            return;
        }
        const myToken = await getToken(email);
        const response = await login(email, password, myToken.token);
        if (response) {
            router.push('/home');
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
            <span class="display-5"> Bienvenido </span>
          </div>
            <div className="input my-2 mt-5">
              <input
                type="email"
                placeholder="Email"
                name="username"
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
                <button @click="toLogin()" id="myBtnConfirm">Entrar</button>
              </div>
              <RouterLink to="/register">
                  <a className="mt-3 nav-link"> ¿Nuevo en la plataforma? Registrate aquí! </a>
              </RouterLink>
            </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

input:hover {
    background-color: rgb(236, 231, 231);
  }

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
  background: rgb(68, 180, 58);
  background: linear-gradient(90deg, rgb(58, 180, 68) 0%, rgba(69, 129, 252, 1) 100%);
}

.img-avatar__ia {
  width: 200px;
}

#myImage {
  width: 200px;
  height: 200px;
}
</style>
