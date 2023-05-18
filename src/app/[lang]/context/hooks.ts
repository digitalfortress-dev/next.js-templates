import { useContext } from 'react'
import AppContext from './context'

export const useStore = () => {
  const { state, dispatch } = useContext(AppContext)

  return { state, dispatch }

}