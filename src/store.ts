import { writable } from "svelte/store";

export const header = writable({
  page: "/home",
  preview: "/home",
});

export const route = writable("/home");
