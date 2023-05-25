import { Provider } from "react-redux"

import { setupStore } from "../../shared/store"

const store = setupStore()

export const withRedux = (component: () => React.ReactNode) => () =>
  <Provider store={store}>{component()}</Provider>
