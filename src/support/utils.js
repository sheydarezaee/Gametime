export const getMonthAndDayFromDateString = (date) => {
  const dateParsed = new Date(Date.parse(date))
  return `${dateParsed.getMonth()}/${dateParsed.getDate()}`
}

export const getDayFromDateString = (date) => {
  const week = new Array('Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat')
  const dateParsed = new Date(Date.parse(date))
  return `${week[dateParsed.getDay()]}`
}