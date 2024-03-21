import axios from 'axios'

export const getUsers = async () => {
  const { data } = await axios.get('https://api.github.com/users')
  return data
}
