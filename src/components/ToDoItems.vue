<template>
    <div class=" mx-auto">
        <div class="flex flex-col sm:flex-row items-center justify-between mt-2 px-20 py-2">
            <div class="flex flex-col">
                <p v-if="!editing" class="text-xl h-auto" >{{todo.content}}</p>
                <!-- 預設新的輸入框不出現 -->
                <input 
                    v-bind:value="todoChange" 
                    @change="userInputChange"
                    class="flex-1 w-full p-2 border focus:border-blue-500 hover:border-red-200 focus:ring focus:ring-blue-200 focus:outline-none mr-2"
                    v-else type="text">
            </div>

            <div class="flex items-center justify-between mx-2 px-20 py-2 sm:mt-2">
                <button 
                    @click="upDateTodo(todo)"
                    class="px-4 py-2 mr-2 bg-yellow-500 hover:bg-yellow-700 hover:text-red-200 text-white">
                    <!-- 按下後edit換成update -->
                    {{editing?'Update':'Edit'}} 
                </button>
                <button 
                    @click="deleteToDo(todo.id)"
                    class="px-4 py-2 bg-red-500 hover:bg-red-700 hover:text-red-200 text-white">
                    Delete
                </button>
            </div>
        </div>
    </div>


</template>

<script>
import { mapActions } from 'vuex'

    export default {
        data(){
            return {
                todoChange : "",
                editing : false, //編輯按鈕預設false
            };
        },
        props:{ 
            todo:{},
        },
        methods:{
            ...mapActions(['deleteToDo', 'upDateToDo']),
            upDateTodo(todo){
                this.editing = this.editing == true ? false : true;
                console.log(this.editing)
                if(this.editing){
                    this.todoChange = todo.content;
                    this.upDateToDo(todo);
                }
                else{
                    todo.content = this.todoChange
                    alert('update completed');
                }
            },
            userInputChange(e){
                this.todoChange = e.target.value;
            },
        },
    }

</script>