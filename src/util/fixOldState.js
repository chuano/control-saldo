export default function fixOldState() {
  const existentCredit = localStorage.getItem('credit')
  const existentProducts = localStorage.getItem('products')
  const existentChanges = localStorage.getItem('creditChanges')

  if (existentCredit) {
    const activities = [
      {
        id: 1,
        name: 'Acividad sin nombre',
        credit: parseFloat(existentCredit),
        products: JSON.parse(existentProducts),
        changes: JSON.parse(existentChanges),
      },
    ]
    console.log(JSON.stringify(activities))
    localStorage.setItem('activities', JSON.stringify(activities))
    localStorage.removeItem('credit')
    localStorage.removeItem('products')
    localStorage.removeItem('creditChanges')
  }
}
