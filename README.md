# React + TypeScript + Vite

how to run the project


```shell
   yarn
   yarn dev
```

### left some todos that need to be fixed before going to production

1: use Abord controller to abort non wanted fetchs calls and we make sure we get the latest data, this could also be a escenario for react-query or similar tools

2: sanitice regex, we could use a lodash package

3: currently clicking the last page is broken, we need to have a better page state

### Shortcouts

1: everything is in state in app, as the app grows we will need to think about state manager, zustand is a good idea

2: create a single api entry point, right now we have 3 diff ways to call the api, one when we land in the page and 2 on change handlers, i decided to leave this as next steps in the process, in how we can make it better

3: i used lodash for debounce, i did not wanted to create a debouncer fn,
