class EventEmitter {

  constructor() {
    this.events = {}
  }

  subscribe(event, cb) {
    let cbIndex
    if (!this.events.hasOwnProperty(event)) {
      cbIndex = 0
      this.events[event] = [cb]
    } else {
      this.events[event] = [...this.events[event], cb]
      cbIndex = this.events[event].length - 1
    }

    return {
      unsubscribe: () => {
        if (this.events[event].length === 1) delete this.events[event]
        else this.events[event].splice(cbIndex, 1)
        return undefined
      }
    };
  }

  emit(event, args = []) {
    if (!this.events.hasOwnProperty(event)) return []
    else {
      return this.events[event].reduce((acc, func) => {
        return [...acc, func(...args)]
      }, [])
    }
  }
}

const emitter = new EventEmitter();
const onClickCallback = () => 99

const sub = emitter.subscribe('onClick', onClickCallback);
console.log(emitter.emit('onClick'))
sub.unsubscribe()
console.log(emitter.emit('onClick'))