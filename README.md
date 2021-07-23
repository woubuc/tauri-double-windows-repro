Reproduces the Tauri error where it will spawn multiple windows if the Tauri 
API is imported.

### How to:
- Install Node dependencies `yarn install`
- Run Nuxt dev server `yarn dev`
- Run Tauri `yarn tauri dev`

### Relevant files:
- `pages/index.vue`
- `src-tauri/src/main.rs`
- `src-tauri/tauri.conf.json`
