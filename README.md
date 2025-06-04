# 🧱 Monorepo – Nuxt + Nx + Vue + Shared Libraries

This repository is structured as a monorepo managed by [Nx](https://nx.dev/), supporting modular development using shared libraries across applications.

---

## 📁 Project Structure

```
apps/
  └── user/         # Nuxt 3 application (SSR frontend)
libs/
  ├── http-client/  # Axios-based HTTP client library
  ├── services/     # Business logic layer, depends on http-client
  ├── ui/           # Shared Vue 3 components with Storybook support
  ├── icons/        # Shared icon components
  └── theme/        # Tailwind/theme config & global styles
```

---

## 🧠 Apps vs Libs

| Type   | Description                                                                 |
|--------|-----------------------------------------------------------------------------|
| App    | An entry-point like a Nuxt project, deployable independently (e.g. `user`) |
| Lib    | Reusable logic/UI/config that is shared across apps (e.g. `ui`, `services`) |

---

## 🚀 Nx Commands

### 🔍 Project Dependency Graph

Visualize how libraries/apps depend on each other:

```bash
nx graph
```

---

### 📦 Build Nuxt App (Production)

```bash
nx build user
```

This will build the `apps/user` Nuxt 3 project with production optimizations.

---

### ⚙️ Development Mode (Dev Server)

```bash
nx serve user
```

Starts the Nuxt development server with hot-module reloading for local development.

---

### 📚 Storybook for `ui` Library

```bash
nx storybook ui
```

Runs [Storybook](https://storybook.js.org/) for the `ui` component library, useful for isolated UI testing and component development.

---

## 📌 Notes

- All paths are resolved using `tsconfig.base.json` aliases like `http-client`, `theme`, etc.
- Ensure that all imports use these aliases and avoid relative paths like `../../http-client`.

---

## 🧹 Troubleshooting

- If `nx graph` does not detect some dependencies, make sure all imports use the proper **TS path aliases**, not relative paths.
- Use `nx reset` to clear the Nx cache if builds or graph show outdated info.

```bash
nx reset
```

---

Happy hacking! 🛠
