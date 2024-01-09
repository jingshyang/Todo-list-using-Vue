<template>
    <div class="flex flex-col mt-2">
        <span class="mx-auto my-auto text-xl px-2 py-2 sm:text-sm">There are still {{countToDo}} tasks to be completed</span>
        <div v-for="todo in allToDo" :key="todo.id">
            <ToDoItems :todo="todo"/>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ToDoItems from './ToDoItems.vue'
   
    export default{
        components:{
            ToDoItems,
        },
        computed: {
            ...mapGetters(['allToDo', 'countToDo']),
        },
    }
  
</script>