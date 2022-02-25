import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext

// replaced by the useReducer
// const [users, setUsers] = useState([])
// const [loading, setLoading] = useState(true)

//  // Get Initial Users (testing purposes)
//   const fetchUsers = async () => {
//     setLoading()
//     const response = await fetch(`${GITHUB_URL}/users`, {
//       headers: {
//         Authorization: `token ${GITHUB_TOKEN}`,
//       },
//     })

//     const data = await response.json()
//     dispatch({
//       type: 'GET_USERS',
//       payload: data,
//     })
//     // replaced by the reducer
//     // setUsers(data)
//     // setLoading(false)
//   }
