import DataApi from '../api/DataApi'

export const handleIdChange = async (user, id, dataAA) => {
  const newData = { ...dataAA, id }
  console.log(dataAA)
  console.log(user, id)
  const data = new DataApi()
  await data.editData(user, 'rooms', id, newData)
}

export default handleIdChange
