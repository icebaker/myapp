<script>
  import { onMount } from 'svelte';

  import hljs from 'highlight.js';

  export let language;
  export let code;

  let html = '';

  const renderCode = () => {
    html = hljs.highlight(code, {language: language}).value;
  }

  onMount(() => { renderCode(); });

  $: { if (code) renderCode(); }
</script>

<pre class="hljs"><code>{@html html}</code></pre>

<style>
pre { padding: 1em; }
</style>
