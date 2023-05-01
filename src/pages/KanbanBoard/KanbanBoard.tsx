import { FC } from "react"

import { Details } from "../../features/Details"
import { Board } from "../../widgets/Board"
import { SearchBar } from "../../widgets/SearchBar"
import styles from "./KanbanBoard.module.scss"

export const KanbanBoard: FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles["search-bar"]}>
        <SearchBar />
      </div>
      <div className={styles.details}>
        <Details />
      </div>
      <div className={styles.board}>
        <Board />
      </div>
    </main>
  )
}
