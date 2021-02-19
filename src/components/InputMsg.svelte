<script>
	import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let msg = '';
  let user = 'A User';
  function send(){
    if(msg){
    dispatch('send', {
      msg: msg,
      user: user,
      isSelf:'true'
    });
      msg = '';
    }
  }
</script>
<style>
  div{
    position: fixed;
    width: 100%;
    bottom: 0;
  }
</style>
<div class="py-2 px-2 flex justify-items-center bg-purple-100">
  <form on:submit|preventDefault={send}>
    <input bind:value={msg} class="focus:outline-none text-xl rounded-md bg-gray-100 px-3 py-3 text-gray-800 w-4/5 flex-grow " placeholder="Send a message"/>
    <button class="float-right focus:outline-none hover:bg-purple-800 transition duration-300 bg-purple-500 text-white font-bold py-2 px-4 rounded w-1/5 flex-grow"><span class="material-icons float-center ml-1 mt-1">send</span></button>
  </form>
</div>
