## Commands

npx create-react-app thunk-observable
cd thunk-observable
npm start

## Outline

1. Goals
   a. Demystify Observables, lowering the barrier to entry
   b. Discuss where Observables fit alongside other event and async patterns in JavaScript
   c. Give a novel example demonstrating how Observables can enhance an already well understood Redux architecture
2. Out of scope
   a. Assumed knowledge: Promises, React, Redux, Redux Thunk
   b. Observables vs. other side effect libraries: Redux Saga, Redux Loop, etc
   c. Implementation comparisons: RxJS, Most.js, Bacon.js, xstream, etc
3. Observables
   a. Where Observables fit in with Function, Iterator, and Promises (http://reactivex.io/rxjs/manual/overview.html#observable)
   b. Where Observables fit in with Events, Stream, and Async Iterators (https://stackoverflow.com/questions/39439653/events-vs-streams-vs-observables-vs-async-iterators/47214496#47214496)
   c. Implementations: RxJS, Most.js, Bacon.js, xstream
4. Redux side effects
   a. Imperative vs. declarative--whose responsibility, the caller or the engine?
   b. Example: Executing a search from a URL driven search page
5. Why Observables
   a. Declarative by design
   b. Pure functional and composable
   c. Rich feature set
   d. Simple to reason about, yet expands with your complexity
   e. Builds on our understanding of events and promises
   f. Leveraged by many JavaScript frameworks
   g. Implementations in many languages
   h. On the JavaScript standards track
6. Demo application: Youtube search
   a. Intro to app
      1. High level approach: create-react-app + a personal adaptation/simplification of react-boilerplate
   b. Imperative search with search button
   c. Imperative search with URL query support
      1. Search on mount with initial query
      2. Manually update URL on search
   d. Declarative search based on query change (prop changes)
      1. Search button calls set query action instead of search
      2. Query change in component calls search
   e. Declarative search based on query change (observables)
      1. Enter action
      2. Location change action
      3. Search epic triggers on enter or location change
   f. Advanced use case (autocomplete)
      1. Use return value (promise) of thunk within an Epic
7. Next steps
   a. If we limit the use of Thunks to strictly async actions, then we could replace Thunk with custom async action middleware and constrain side effects to the Observables layer; i.e., force declarative-only side effects.
   b. For existing Thunk applications, this could start with a deprecation of Thunks alongside the addition of Redux Observable and a custom action middleware, commencing an incremental migration over time to a combination of async actions and side effects.
   c. We could replace the switch statements with repetitive code with a map of action type to reducer, then generate reducers for async actions automatically to further reduce boilerplate.
   d. For anyone using Sagas or another side effect library but like the pure functional approach of Observables, there's no harm aside from increasing bundle size to adding Redux Observable to your middleware chain and experimenting on the next feature.
   e. The benefits of playing with Observables in your Redux application extend beyond even the needs of your architecture and could provide a hands on learning opportunity for yourself and your team of the "successor to EventTarget."
