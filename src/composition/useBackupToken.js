import crypto from 'crypto'

export default function useBackupToken() {
  const makeToken = (id) => {
    return crypto
      .createHash('sha1')
      .update(id.toString() + 'nurriet')
      .digest('hex')
  }

  return {
    makeToken,
  }
}
