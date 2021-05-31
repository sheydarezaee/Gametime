export const getPickerCategories = (results) => {
  const categories = results.reduce((acc, current) => {
    acc.push(current && current.categories)
    return acc
  }, [])
  const uniqueCategories = [... new Set([].concat(...categories).map((i) => i.title))]
  return uniqueCategories.reduce((acc, current) => {
    acc.push({
      label: current,
      value: current,
    })
    return acc
  }, [])
}