# Challenge

This challenge was developed using SvelteJs. The reason being was because I needed to develop this challenge asap and Svelte is pretty similar to React and Vue, contrary to Angular.

# Architecture

The project's architecture is minimal but easy to maintain across time.

Below is a representation of the folder structure

├───assets
├───lib
│ ├───components
│ └───utils
└───theme

## lib (components)

Here goes all the generic components that could be shared across multiple routes

## lib (utils)

Here goes all the generic functionallity that could be shared across multiple components

## theme

Here goes all the modular css files. For this challenge I didn't consider to use some advance architecture like ITCSS or some CSS preprocessor or some CSS Framework due to its simplicity but I always kept in mind modern CSS features. The design approach was mobile-first.
