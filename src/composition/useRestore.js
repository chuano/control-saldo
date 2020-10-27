import Axios from 'axios'
import { useStore } from 'vuex'
import useBackupToken from './useBackupToken'

export default function useRestore() {
  const store = useStore()
  const restoreBackup = async () => {
    const confirmed = confirm('Esta acción eliminará todas las actividades existentes.')
    if (!confirmed) return

    const { makeToken } = useBackupToken()
    const id = prompt('Indica el id de recuperación')
    const token = makeToken(id)
    try {
      const response = await Axios.get(`https://chuano.net/control-saldo/restore.php?id=${id}&token=${token}`)
      store.commit('setActivities', response.data)
      alert('Copia de seguridad restaurada')
    } catch (e) {
      alert('Error recuperando copia de seguridad')
    }
  }

  return {
    restoreBackup,
  }
}
