import { ToastContainer } from "react-toastify"

import { KanbanBoard } from "../pages/KanbanBoard"
import { withProviders } from "./providers"

function App() {
  return (
    <>
      <KanbanBoard />
      <ToastContainer />
    </>
  )
}

export default withProviders(App)
