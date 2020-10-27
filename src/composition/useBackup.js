import Axios from 'axios'
import { useStore } from 'vuex'
import useBackupToken from './useBackupToken'

export default function useBackup() {
  const store = useStore()
  const activities = store.state.activities.activities
  const makeBackup = async () => {
    try {
      const { makeToken } = useBackupToken()
      const id = Math.round(Math.random() * 10000)
      const token = makeToken(id)
      await Axios.post(`https://chuano.net/control-saldo/post.php?id=${id}&token=${token}`, activities)
      alert(`Copia de seguridad realizada, tu código de recuperación es ${id}.
        Con él podrás recuperar tus datos en otro dispositivo`)
    } catch (e) {
      alert('Ha ocurrido un error inesperado, inténtelo de nuevo.')
    }
  }

  return {
    makeBackup,
  }
}
