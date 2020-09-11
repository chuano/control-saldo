export const compareProperty = (propertyName, direction = 'asc') => (a, b) => {
  if (a[propertyName] < b[propertyName]) return direction === 'desc' ? 1 : -1
  if (a[propertyName] > b[propertyName]) return direction === 'desc' ? -1 : 1
  return 0
}
