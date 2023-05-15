import { useContext } from 'react'
import NavbarContext from './context'

export const useStore = () => {
  const { state, dispatch } = useContext(NavbarContext)

  return { state, dispatch }

}