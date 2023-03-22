export const saveToLocalStorage = (tokens: any) => {
    for(const key in tokens) {
      console.log('key', key)
      localStorage.setItem(key, tokens[key])
    }
}

export const getFromLocalStorage = () => {
    return localStorage.getItem('access-token')
}