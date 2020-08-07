export default function useDateFormat() {
  function dateFormat(dateString) {
    return new Date(dateString).toLocaleString()
  }

  return { dateFormat }
}
