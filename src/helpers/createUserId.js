export const createUserId = (email) => {
  const searched = '@'
  const withNew = ''
  const newEm = email.replace(searched, withNew)
  const search = '.'
  return newEm.replaceAll(search, withNew)
}

export default createUserId
