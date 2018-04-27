**Goal**

Iterate upon Thunk for Redux actions with Observables, following a less-is-more philosophy by introducing additional complexity strictly where necessary. In other words, rely on subset of Thunk, "promise actions," for 90% of an application, then leverage Observables to orchestrate true side effects.

**Install**

```bash
npm i
```

**Run**

```bash
npm start
```

**Thunk -> Observable Progression**

* [`part1-standard-thunk`](https://github.com/ianmstew/thunk-observable/tree/part1-standard-thunk)
* [`part2-streamlined-thunk`](https://github.com/ianmstew/thunk-observable/compare/part1-standard-thunk...part2-streamlined-thunk)
* [`part3-streamlined-reducer`](https://github.com/ianmstew/thunk-observable/compare/part2-streamlined-thunk...part3-streamlined-reducer)
* [`part4-observable-setup`](https://github.com/ianmstew/thunk-observable/compare/part3-streamlined-reducer...part4-observable-setup)
* [`part5-observable-orchestration`](https://github.com/ianmstew/thunk-observable/compare/part4-observable-setup...part5-observable-orchestration)
* [`part6-observable-enhancements`](https://github.com/ianmstew/thunk-observable/compare/part5-observable-orchestration...part6-observable-enhancements)

**Futher Optimizations**

* Instead of letting async actions contain a promise (active request), let them contain a promise factory and promise factory arguments--thereby "purifying" them, making testing easier:

  ```js
  export const search = (query) => ({
    type: actionTypes.SEARCH,
    promise: {
      call: youtubeApi.search,
      args: [query]
    }
  });
  ```

  Then, modify `async-actions#ResultAsyncAction` to perform the actual promise instantiation.

* Instead of having API helpers (`api/youtube.js`) return simple promises, have them return an Observable wrapped around a cancelable XHR request, such as `Rx.Observable.ajax()`. This will result in browser level request cancelation of abandoned async actions for free.

  * Another option is to create a custom Observable wrapper around any cancelable XHR library of choice. These wrapper Observables can always be converted back to promises to retrofit within standard promise/async-await code using `RxJS.Observable.toPromise()`.

* Implement error handling using the `meta.error` object of failed async actions.

* Customize action API's and action reduction within `async-actions.js` and `AsyncReducer.js` to fit the needs of a given given app.

* Research a way to avoid the extra `handleSearchEpic` while still achieving request cancelation.

**Alternatives**

* Eliminate Thunk and promise middleware and use Redux-Observable Epics exclusively (more traditional Redux-Observable approach).

* [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree) takes the Observables approach further, creating Observables from state properties in addition to actions. This allows notification of _state change_ on a fine grained level, as opposed to strictly reacting to system events.
