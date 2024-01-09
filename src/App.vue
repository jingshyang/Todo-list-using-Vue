<template>
  <div id="app">

    <ToDo/>
    <ToDoList/>
 
  </div>

  <!-- <router-view/> -->
</template>


<script>
  import ToDo from './components/ToDo.vue';
  import ToDoList from './components/ToDoList.vue';
  export default{
    name:'App',
    components : {
      ToDo,
      ToDoList,
    }
  }
</script>

