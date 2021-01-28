<script>
  import Section from "../templates/Section.svelte";
  import { route, header } from "../store";

  export let pages;

  const nextPage = pages[pages.findIndex((page) => page.route === $route) + 1];

  let email = "";
  let name = "";
  let message = "";

  let sent = false;
  let loading = false;

  function sendContactForm() {
    loading = true;
    fetch("https://contact-eq7yokdezq-uc.a.run.app", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        name: name,
        message: message,
      }),
    }).then((data) => (sent = true));
  }
</script>

<Section>
  {#if sent === false}
    <span>
      <h1>Let's Work Together 😀</h1>
      <div class="container">
        <img src="/images/portrait.jpg" alt="Portrait of Jacob Zwang" />
        <div class="form">
          <textarea
            name="message"
            type="text"
            rows="10"
            bind:value={message}
            placeholder="Hi Jacob..."
          />
          <div class="info">
            <input
              placeholder="name"
              type="name"
              name="name"
              bind:value={name}
            />
            <input
              placeholder="email"
              type="email"
              name="email"
              bind:value={email}
            />
            <button class="submit" on:click={() => sendContactForm()}
              >send</button
            >
          </div>
        </div>
      </div>
    </span>
  {:else if loading === false}
    <div class="loader" />
  {:else}
    <span>
      <h1>Thanks for reaching out!</h1>
      <p style="text-align: center">I'll reach out to you as soon as I can</p>
    </span>
  {/if}
  <div class="socials">
    <div class="first">
      linkedin
      <a href="https://www.linkedin.com/in/jacobzwang/" target="_blank"
        >jacobzwang</a
      >
    </div>
    <div>
      email
      <a href="mailto:zwang.jacob@gmail.com" target="_blank"
        >zwang.jacob@gmail.com</a
      >
    </div>
    <div class="last">
      github
      <a href="https://github.com/jacobzwang" target="_blank">jacobzwang</a>
    </div>
  </div>
  <!-- <div>
          <button
              on:click={() => {
                  $header.preview = nextPage.route;
                  $header.page = nextPage.route;
                  $route = nextPage.route;
                  $route = nextPage.route;
                  window.history.pushState(null, null, nextPage.route);
              }}><h3>Next Page <span>{nextPage.name}</span></h3></button>
      </div> -->
</Section>

<style>
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }
  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .submit {
    padding: 2pt;
    background-color: gray;
    color: white;
    border: none;
    outline: none;
    transition: 300ms;
    border-radius: 4pt;
    font-size: var(--pSize);
    display: block;
    width: 100%;
  }
  .submit:hover {
    background-color: var(--color);
    cursor: pointer;
  }
  textarea {
    width: 100%;
    background-color: transparent;
    resize: none;
    outline: none;
    border: none;
    border-radius: var(--stdRadius);
    padding: 10pt;
    font-size: var(--pSize);
    height: calc(100% - 51.66px - 5px);
  }
  input {
    font-size: var(--pSize);
    outline: none;
    border: none;
    width: 100%;
    background-color: transparent;
    padding: 10pt;
  }
  .container {
    display: block;
  }
  img {
    height: 50vh;
    object-fit: cover;
    object-position: 0% 10%;
    border-radius: var(--stdRadius);
    width: 100%;
    height: 100%;
  }
  .info {
    /* padding: 10pt; */
    width: 100%;
    background-color: var(--offWhite);
    border-radius: var(--stdRadius);
    display: block;
  }
  a {
    color: var(--color);
    text-decoration: none;
    margin: 5pt;
    padding: 5pt;
  }
  a:hover {
    background-color: var(--offWhite);
    border-radius: var(--stdRadius);
  }
  .socials {
    margin-top: 20pt;
    display: block;
  }
  h1 {
    text-align: center;
    color: var(--color);
    margin-bottom: 50pt;
  }
  .form {
    padding: 10pt;
    width: 100%;
    background-color: var(--offWhite);
    border-radius: var(--stdRadius);
  }
  @media (min-width: 1000px) {
    .submit {
      width: unset;
    }
    .container {
      display: grid;
      grid-template-columns: 1fr 2fr;
      width: 100%;
      gap: 20pt;
    }
    img {
      height: unset;
      height: 100%;
      width: 100%;
      max-height: 50vh;
    }
    .info {
      display: grid;
      grid-template-columns: 2fr 2fr 1fr;
    }
    .socials {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      text-align: center;
      font-size: 12pt;
      padding: 5pt 10pt;
      border-radius: var(--stdRadius);
    }
    .socials .first {
      text-align: left;
    }
    .socials .last {
      text-align: right;
      padding-bottom: 10pt;
    }
  }
</style>
