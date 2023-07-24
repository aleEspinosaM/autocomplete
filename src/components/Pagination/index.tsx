import { InfoResponse } from '../../types';
import './styles.scss'


interface Props extends InfoResponse {
  onHandlePagination: (url: string) => void
}

export const Pagination = ({ next, pages, prev, onHandlePagination}: Props) => {
  // Todo: Fix last Page
  const url = new URL(next)
  const params = new URLSearchParams(url.search)

  const page = +(params.get("page") ?? 2) - 1
  return (
      <section className='pagination'>
        <button 
          onClick={() => onHandlePagination(prev ?? "")}
          className={`btn ${!prev ? 'disabled' : ''}`}
          disabled={!prev}
        >
          prev
        </button>
        <div>
          {page} / {pages}
        </div>
        <button 
          onClick={() => onHandlePagination(next)}
          className={`btn ${!next ? 'disabled' : ''}`}
          disabled={!next}
        >
          next
        </button>
      </section>
  )
}