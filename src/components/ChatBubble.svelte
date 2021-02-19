<script>
  export let msg;
  export let user;
  export let isSelf;
</script>
<style>
</style>
{#if isSelf == 'true'}
  <div class="bg-purple-500 rounded-md float-right px-4 py-2 mr-4 w-2/3 mb-4">
    <span class="text-md text-white">
      {user}
    </span>
    <br>
    <span class="text-lg text-white break-words">
      {msg}
    </span>
  </div>
{:else}
  <div class="bg-gray-100 rounded-md float-left px-4 py-2 ml-4 w-2/3 mb-4">
    <span class="text-md text-black">
      {user}
    </span>
    <br>
    <span class="text-lg text-black break-words">
      {msg}
    </span>
  </div>
{/if}

