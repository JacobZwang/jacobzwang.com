<script>
  import { onMount } from "svelte";

  export let language;
  export let code;
  export let header;

  onMount(() => {
    let script = document.createElement("script");
    document.head.append(script);

    script.onload = function () {
      let langJS = false;
      let lang_script;
      let lang_module;

      switch (language) {
        case "javascript":
          lang_module = "https://prismjs.com/components/prism-javascript.js";
          langJS = true;
          break;
      }

      if (langJS == true) {
        lang_script = document.createElement("script");
        lang_script.src = lang_module;
        lang_script.async = true;
        document.head.append(lang_script);

        lang_script.onload = () => {
          Prism.highlightAll();
        };
      } else {
        Prism.highlightAll();
      }
    };
  });
</script>

<pre><code class="language-{language}">{code}</code></pre>
