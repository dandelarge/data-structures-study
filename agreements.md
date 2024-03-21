# Agreements

## About Enums and constants
Name them with capital letters and snakecase:
like

```
const THE_ENUM {
    key = value
}
```

## About Interfaces
We don't care, but try to use the `I` at the beggining

## Data-test-id
Puppeteer NEEDS the selector to be `data-test-id`. We are not
sure if Playwright needs it too.
BUT React testing library needs `data-testid`
We don't have any reason to keep it as `data-test-id` so we can
change it to `data-testid` from now on.

## Typescript Errors
We editted the types reference for react in the package json. The
change is in this PR. It will be merged soon
https://github.com/IndependentIP/muse/pull/3813
