# e-hospital-frontend

Folder structure:

```bash
src/
+-- components/
|   +-- common/
|   |   +-- Snackbar.js
|   |   +-- Avatar.js
|   |   +-- ...
|   |
|   +-- Layout/
|   |   +-- Layout.js
|   |   +-- ...
|   |
|   +-- Landing/
|       +-- Landing.js
|       +-- ...
|
+-- styles
|   +-- global.scss
|   +-- base/
|   |   +-- _vars.scss
|   |   +-- _colors.scss
|   |   +-- ...
|   |
|   +-- components/
|       +-- _avatar.scss
|       +-- ...

```

SASS:

- Prefix underscore to every scss filename e.g., `_filename.scss`

Git branches:

- main - Main branch (for deployment)
- development - (for merging features)
- task/\* - for features development
