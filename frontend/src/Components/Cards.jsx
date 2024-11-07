import React from 'react'
import './css/cards.css'
import './css/Register.css'
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div class="grid-cols-1 sm:grid md:grid-cols-2">
  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-dark text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 transform scale-95 transition-transform hover:scale-100 hover:shadow-glow glowing-shadow">
    <img
      class="rounded-t-lg"
      src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
      alt="Hollywood Sign on The Hill" />
    <div class="p-6">
      <h5 class="mb-2 text-xl font-medium leading-tight">
        <Link to="/hi" class="text-blue-500 hover:underline">Card title</Link>
      </h5>
      <p class="mb-4 text-base">
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div>
  </div>

  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-dark text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 transform scale-95 transition-transform hover:scale-100 hover:shadow-glow glowing-shadow">
    <img
      class="rounded-t-lg"
      src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
      alt="Palm Springs Road" />
    <div class="p-6">
      <h5 class="mb-2 text-xl font-medium leading-tight">
        <a href="another-page.html" class="text-blue-500 hover:underline">Card title</a>
      </h5>
      <p class="mb-4 text-base">
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div>
  </div>

  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-dark text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 transform scale-95 transition-transform hover:scale-100 hover:shadow-glow glowing-shadow">
    <img
      class="rounded-t-lg"
      src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
      alt="Skyscrapers" />
    <div class="p-6">
      <h5 class="mb-2 text-xl font-medium leading-tight">
        <a href="another-page.html" class="text-blue-500 hover:underline">Card title</a>
      </h5>
      <p class="mb-4 text-base">
        This is a longer card with supporting text below as a natural
        lead-in to additional content.
      </p>
    </div>
  </div>

  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-dark text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 transform scale-95 transition-transform hover:scale-100 hover:shadow-glow glowing-shadow">
    <img
      class="rounded-t-lg"
      src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
      alt="Los Angeles Skyscrapers" />
    <div class="p-6">
      <h5 class="mb-2 text-xl font-medium leading-tight">
        <a href="another-page.html" class="text-blue-500 hover:underline">Card title</a>
      </h5>
      <p class="mb-4 text-base">
        This is a longer card with supporting text below as a natural
        lead-in to additional content.
      </p>
    </div>
  </div>
</div>

  
  )
}

export default Cards
