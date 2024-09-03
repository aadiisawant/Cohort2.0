import React from 'react'
import { useSetRecoilState } from 'recoil'
import { searchQueryAtom } from '../store/atoms/todoAtom'

function TodoSearch() {
    const setSearchQuery = useSetRecoilState(searchQueryAtom)
  return (
    <div>
      <input
        type='text'
        placeholder='Search todos...'
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}

export default TodoSearch
