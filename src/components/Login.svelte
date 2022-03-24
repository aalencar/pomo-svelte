<script>
  import { auth } from '../firebase'
  import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
  } from 'firebase/auth'
  import { fade } from 'svelte/transition'


  let email = 'john@gmail.com'
  let password = '123456'

  let user = null
  let loading = false
  let error = false

  async function login() {
    if (!email || !password) return
    loading = true
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
      error = true
    }
  }

  onAuthStateChanged(auth, u => {
    if (u) user = u
    else user = null
  })

  
</script>

<section>
  {#if !user}
    <div out:fade={{ duration: 200 }} class="login__container">
      <input bind:value={email} placeholder="email" class="input"/>
      <input bind:value={password} type="password" placeholder="password" class="input">
      <button class="button" on:click={login} disabled={!email || !password}>Login</button>
    </div>
  {:else}
    <div class="user" in:fade={{ delay: 300 }}> 
      <img src={user.photoURL} alt="user"/>
      <span>
        {user.displayName}
      </span>
      <button class="button" on:click={() => signOut(auth)}>Sign out</button>
    </div>
  {/if}

  {#if loading}
    <span class="loading">♻️</span>
  {/if}
  {#if error}
    <span>login error</span>
  {/if}
</section>

<style>
  /* img {
    max-width: 50px;
    border-radius: 50%;
  } */

  /* .loading {
    transition: spin-animation 1s infinite;
    animation-timing-function: linear;
    display: inline-block;
  }

  @keyframes spin-animation {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(359deg)
    }
  }

  .user {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .login__container {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  } */
</style>
