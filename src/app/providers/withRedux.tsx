import { Provider } from "react-redux"

import { store } from "../../shared/store"

export const withRedux = (component: () => React.ReactNode) => () =>
  <Provider store={store}>{component()}</Provider>
