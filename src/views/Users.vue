<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <ul>
      <li v-for="{ first_name, last_name, email, id } in users" :key="id">
        <h4>{{ first_name }} {{ last_name }}</h4>
        <h6>{{ email }}</h6>
        <hr />
      </li>
    </ul>
  </div>

  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span> Página: {{ currentPage }}</span>
</template>

<script>
import useUsers from "../composables/useUsers";

export default {
  setup() {
    const { users, isLoading, currentPage, errorMessage, prevPage, nextPage } =
      useUsers();

    return {
      currentPage,
      errorMessage,
      isLoading,
      nextPage,
      prevPage,
      users,
      // Podríamos dejar solo ...useUsers() aquí
      // y quitar lo de dentro del setup y funcionaría igual.
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}
div {
  display: flex;
  justify-content: center;
  text-align: center;
}
ul {
  width: 250px;
}
li {
  list-style: none;
}
h4 {
  color: blue;
}
button {
  background-color: rgb(114, 40, 114);
  width: 80px;
  margin: 5px;
  cursor: pointer;
  color: wheat;
  border-radius: 3rem;
}
button:hover {
  border: 2px solid transparent;
  color: yellow;
  transform: scale(1.05);
  will-change: transform;
}
span {
  display: block;
  text-align: right;
  margin-right: 50px;
}
</style>
