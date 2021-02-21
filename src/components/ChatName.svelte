<script>
  export let name;
</script>
<style>
  div{
    position: fixed;
    top: 0;
  }
</style>
<div class="w-full shadow-xl px-3 py-3 bg-purple-500">
  <a href="/"><span class="material-icons text-white mr-4" style="font-size: 25px">arrow_back</span></a><span class="text-3xl font-bold text-white">{name}</span>
  <span class="float-right py-1 text-white material-icons" style="font-size:30px">add_circle</span>
</div>
