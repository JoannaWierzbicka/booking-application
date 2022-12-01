import DataApi from '../api/DataApi'

export const handleIdChange = async (user, key, id, dataReceived) => {
  const newData = { ...dataReceived, id }
  const data = new DataApi()
  await data.editData(user, key, id, newData)
}

export default handleIdChange
