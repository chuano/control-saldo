const twoDigits = (day) => {
  if (day < 10) return `0${day}`
  return day.toString()
}

export const getDayName = (day) => {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  return days[day] || ''
}

export const formatDate = (date) => {
  return `${twoDigits(date.getDate())}/${twoDigits(date.getMonth() + 1)} (${getDayName(date.getDay())})`
}
