<script>
  import { onMount } from 'svelte';

  import Marked from '../../components/Marked';

  export let code;

  let containerElement;

  const renderCode = () => {
    if(containerElement) containerElement.innerHTML = Marked.instance().parse(code);
  }

  onMount(() => { renderCode(); });

  $: { if (code) renderCode(); }
</script>

<div bind:this={containerElement} class="hljs"></div>
