# myanimelist-clone

This template should help get you started developing with Vue 3 in Vite.


## Project Structure

```
public  # Static resources / Deployment config
src
├── assets                  # Images & Global CSS
├── components              # Vue components
├── composable              # Handle state and reuse of logic commonly used across components (kinda like Vue mixins) 
├── router                  # Router definitions for path and views
├── store                   # Pinia to share a state across components/pages
├── views                   # Vue Page defintions
└── App.vue                 # Main entry point, sets up router-view
```

## Roadmap

- [x] Homeview Pages
- [x] Anime Pages (TopAnime)
  - [x] AnimeView/Details
- [x] People Pages (TopPeople)
  - [x] PeopleView/Details
- [] Character Pages (TopCharacter)
  - [] CharacterView/Details
- [] Manga Pages (TopManga)
  - [] MangaView/Details
- [] Add AnimeWatchList using Pinia

<!-- ## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin). -->

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
