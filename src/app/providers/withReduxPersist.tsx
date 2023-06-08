import React from "react"
import { PersistGate } from "redux-persist/integration/react"

import { persistor } from "../../shared/store"

export const withReduxPersist = (component: () => React.ReactNode) => (
  <PersistGate loading={null} persistor={persistor}>
    {component()}
  </PersistGate>
)
