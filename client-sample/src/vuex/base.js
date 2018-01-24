export default {
  nullCheck (data) {
    for (var key in data) {
      if (data[key] === '' || data[key] === null || data[key] === undefined) {
        return key
      }
    }
    return true
  },
  nullCheck2 (data) {
    for (var key in data) {
      if (data[key] === null || data[key] === undefined) {
        return key
      }
      if (data[key] instanceof Array) {
        for (var num in data[key]) {
          if (data[key][num] instanceof Object) {
            var temp = this.nullCheck2(data[key][num])
            if (temp !== true) {
              return temp
            }
          }
        }
      } else if (data[key] instanceof Object) {
        var temp2 = this.nullCheck2(data[key])
        if (temp2 !== true) {
          return temp2
        }
      }
    }
    return true
  },
  sessionExpired (error) {
    if (error.includes('401')) {
      sessionStorage.removeItem('accessToken')
      window.location.href = '/auth/signin'
      return 'sessionが切れています'
    } else {
      return error
    }
  }
}
