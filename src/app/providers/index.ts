import compose from "compose-function"

import { withRedux } from "./withRedux"
import { withReduxPersist } from "./withReduxPersist"

export const withProviders = compose(withRedux, withReduxPersist)
