# AI Agents Instructions

## 1. Persona & Workflow
- **Language**: English for Code, Comments, Docs, Commits. Polish for UI/user-facing text. Any language for direct chat.
- **Behavior**: Be assertive/autonomous ONLY when intent is unambiguous and approach is 100% certain. Otherwise, be highly inquisitive, ask detailed clarifying questions. Do not guess or hallucinate.
- **Reference**: Use `../blog` locally as the primary design reference when porting logic or UI.

## 2. Environment & Stack
- **Tech**: React 19, Next.js 16 (App Router), TypeScript (strict).
- **Styling**: Tailwind CSS v4, Mantine (complex components only).
- **Content**: MDX (`@next/mdx`), static export (`output: 'export'`).
- **Tools**: Bun, Biome, Zod. Babel React Compiler enabled.

## 3. Architecture
Strict feature-sliced architecture. Do not mix domain logic with UI.
- **`src/app/`**: Next.js App Router. CRITICAL: Minimize code here. Delegate logic, state, and complex UI to `features/` or `shared/`. Pages/Layouts are wrappers.
- **`src/features/`**: Feature-specific logic (e.g., `blog/`). Contains components, hooks, interfaces, layouts, pages, services coupled to one feature.
- **`src/shared/`**: Reusable, generic code (UI primitives, wrappers, core domain).
- **Layer Responsibilities**:
  - `domain/`: Pure functions/classes (Value Objects). Zero dependencies.
  - `services/`: Side effects, API, external data, file system.
  - `libs/`: 3rd-party library wrappers/facades.
  - `components/`, `pages/`, `layouts/`: Strictly UI/view logic.

## 4. Conventions
- **Naming (Suffixes)**: `*.component.tsx`, `*.hook.ts`, `*.interface.ts`, `*.page.tsx`, `*.layout.tsx`, `*.service.ts`, `*.lib.ts`, `*.domain.ts`.
- **Error Handling**: Use `Result<T, F>` from `src/shared/domain/result.domain.ts`. NEVER throw raw exceptions for expected failures. Return `Result` from services/domain using `success()` and `fail()`.
- **State**: Native React state, URL SearchParams. NO external state libs (Zustand, Redux) or Context API unless explicitly instructed.
- **Testing**: No automated tests exist. DO NOT write tests, `.spec.ts` files, or run test commands.

## 5. Styling
- **Tailwind v4**: Global config in `src/app/globals.css`. Do not use utility mergers (clsx, tailwind-merge, cva). Use template literals for dynamic classes.
- **Mantine**: Avoid by default. Use ONLY for complex interactive components (Drawers, Carousels, Modals).
- **Icons**: `@tabler/icons-react` exclusively.

## 6. Workflow & Commands
Commands: `bun run dev`, `bun run lint`, `bun run format`, `bun run create-post`.
- **Formatting**: Run `bun run format` and `bun run lint` after modifying files.
- **Builds**: DO NOT run `bun run build`. User runs `bun dev` locally.
