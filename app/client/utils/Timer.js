// source code taken from http://stackoverflow.com/questions/36563749/how-i-extend-settimeout-on-nodejs
export default class Timer {
  constructor (time, callback) {
    this.time = Date.now() + time
    this.callback = callback
    this.update()
  }

  extend (time) {
    this.time += time
    this.update()
  }

  setTime (time) {
    if (this.timer) {
      this.time = Date.now() + time
      this.update()
    }
  }

  clear () {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
  }

  update () {
    this.clear()
    let difference = this.time - Date.now()
    if (difference > 0) {
      this.timer = setTimeout(() => {
        this.timer = null
        this.callback()
      }, difference)
    }
  }
}
