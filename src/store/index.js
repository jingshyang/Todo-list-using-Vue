import { createStore } from 'vuex'



export default createStore({
  state: {
    todos:[
      {
        id : 0,
        content : 'this is frist task'
      },
    ],
  },  
  getters: {
    allToDo : (state)=> state.todos,
    countToDo: state => state.todos.length,
  },
  actions: {
    addToDo({commit}, todo){
      commit("add_todo", todo)
    },
    deleteToDo({commit}, id){
      commit("delete_todo", id)
    },
    upDateToDo({commit}, todo){
      commit("update_todo", todo)
    },
  },
  mutations: {
    add_todo(state, todo){
      state.todos.push(todo);
      console.log(todo);
    },
    delete_todo(state, id){
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    update_todo(state, todo){
      let index = state.todos.findIndex(t => t.id == todo.id);
      console.log(index)
    },

  },
  modules: {
  },
})
