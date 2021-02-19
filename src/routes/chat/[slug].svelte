<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
    //params.slug
    //let chatName = params.slug;
  //  return chatName;
	}
</script>

<script>
  import ChatName from '../../components/ChatName.svelte'
  import InputMsg from '../../components/InputMsg.svelte'
  import ChatBubble from '../../components/ChatBubble.svelte'
//  export let chatName;
  let messages = [
    {
      msg: 'hi',
      user: 'Recurse',
      isSelf: 'true'
    },
    {
      msg: 'Hello World!',
      user: 'DarkSparkle',
      isSelf: 'false'
    }
  ];
  function sendMessage(event){
    let data = event.detail;
    send(data);
  }
  function send(data){
    messages = [...messages, data];
    let main = document.querySelector('#main');
    main.scrollTop = main.scrollHeight;
  }
</script>

<style>
  div{
    height: 128vw;
    overflow-y: scroll;
  }
    @media only screen and (max-height: 1080){
      div{
        height: 40vw;
        overflow-y: scroll;
      }
    }
</style>

<ChatName name='Chat'/>
<div class="mt-10" id="main">
  {#each messages as message}
    <ChatBubble msg={message.msg} user={message.user} isSelf={message.isSelf}/>
  {/each}
</div>
<InputMsg on:send={sendMessage}/>

