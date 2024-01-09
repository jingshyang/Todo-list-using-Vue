<template>
    <div class="flex flex-col h-full w-full mt-10">
      <div class="flex justify-center items-center">
        <div class="flex items-center">
          <input
            id="userInput"
            @change="userInputChange"
            @input="checkInput"
            type="text"
            v-model="userInput"
            class="flex-1 p-2 border focus:border-blue-500 hover:border -red-200 focus:ring focus:ring-blue-200 focus:outline-none"
            placeholder="Type something..."/>
          <button
            id="btn-add"
            class="px-4 py-2 bg-blue-500 hover:bg-blue-700 hover:text-red-200 text-white"
            @click="addUserToDo"
            :disabled="!isInputValid">
            Add
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  import { v4 } from 'uuid';
  
  export default {
    data() {
      return {
        userInput: '',
      };
    },
    computed: {
      isInputValid() {
        return this.userInput.trim() !== '';
      },
    },
    methods: {
      ...mapActions(['addToDo']),
      userInputChange() {   
      },
      checkInput() {
      },
      addUserToDo() {
        this.addToDo({
          id: v4(),
          content: this.userInput,
        });
        this.userInput = '';
      },
    },
  };
  </script>
  