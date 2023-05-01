import compose from "compose-function"

import { withRedux } from "./withRedux"

export const withProviders = compose(withRedux)
