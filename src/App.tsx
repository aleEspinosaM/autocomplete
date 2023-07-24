import { useState, useEffect, useMemo } from 'react'
import debounce from 'lodash.debounce';
import { StatusCaller, CharacterResponse, Character, InfoResponse } from './types'
import { BASE_URL, api } from './api';
import { Characters } from './components/Characters';
import { Loading } from './components/Loading';

import './App.css'

import { SearchBar } from './components/SearchBar';
import { Pagination } from './components/Pagination';

function App() {
  const [status, setStatus] = useState<StatusCaller>('idle');
  const [info, setInfo] = useState<InfoResponse>()
  const [characters, setCharacters] = useState<Character[]>([]);
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('')

  const getCharacters = (value: string) => {
    setStatus('pending')
    setDebouncedTerm(value)
    api<CharacterResponse>(`${BASE_URL}?name=${value}`)
      .then(({ results, info }) => {
        setStatus('success')
        setInfo(info)
        setCharacters(results)
      })
      .catch(() => setStatus('error'))
  };

  useEffect(() => {
    setStatus('pending')
    api<CharacterResponse>(BASE_URL)
      .then(({ results, info }) => {
        setCharacters(results)
        setInfo(info)
        setStatus('success')
      })
      .catch(() => setStatus('error'))
  }, [])

  const debouncedResults = useMemo(() => debounce(getCharacters, 300), []);
  const onHandleChange = (value: string) => {
    setTerm(value)
    debouncedResults(value)
  }

  const onHandlePagination = (url: string) => {
    setStatus('pending')
    api<CharacterResponse>(url)
      .then(({ results, info }) => {
        setCharacters(results)
        setInfo(info)
        setStatus('success')
      })
      .catch(() => setStatus('error'))
  }

  return (
    <main>
      {status === "pending" && (<Loading />)}
      {status === 'success' && (<SearchBar onChange={onHandleChange} term={term} />)}
      {status === "error" && (
        <div>
          <p>Sorry, something went wrong</p>
          <button onClick={() => {
            getCharacters('')
            setTerm('')
          }}>load characters</button>
        </div>
      )}
      {Boolean(characters.length) && status === 'success' && <Characters term={debouncedTerm} characters={characters} />}
      {(info?.next || info?.prev) && status === 'success' && <Pagination onHandlePagination={onHandlePagination} count={info.count} next={info.next} pages={info.pages} prev={info.prev} />}
    </main>
  )
}

export default App
