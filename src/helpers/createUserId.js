export const createUserId = (email) => {
  const searched = '@'
  const withNew = ''
  const newEm = email.replace(searched, withNew)
  const sear = '.'
  return newEm.replaceAll(sear, withNew)
}

export default createUserId
