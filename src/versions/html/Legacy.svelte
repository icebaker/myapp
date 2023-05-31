<script>
  import { onMount } from 'svelte';

  import Marked from '../../components/Marked';

  export let code;

  let html = '';

  const renderCode = () => {
    html = Marked.instance().parse(code);
  }

  onMount(() => { renderCode(); });

  $: { if (code) renderCode(); }
</script>

<div class="hljs">{@html html}</div>
