class LocalCache {
  getCache(key: string) {
    const res = localStorage.getItem(key)
    if (res) {
      return JSON.parse(res)
    }
  }

  setCache(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  deleteCache(key: string) {
    localStorage.removeItem(key)
  }

  clearCache() {
    localStorage.clear()
  }
}

export default new LocalCache()
