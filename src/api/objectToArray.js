export const objectToArray = (object, keyPropertyName = 'id') => {
  return (
    Object
      .entries(object || {})
      .map((entry) => {
        const [key, value] = entry

        if (typeof value === 'object') {
          value[keyPropertyName] = key
          return value
        }

        return {
          [keyPropertyName]: key,
          value: value
        }
      })
  )
}

export default objectToArray
