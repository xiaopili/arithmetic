class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(event, fn) {
        this.events[event] = fn;
    }
    emit(event, ...params) {
        if (this.events[event]) {
            this.events[event](...params);
        } else {
            console.log('您没有订阅该事件');
        }
    }
    off(event) {
        delete this.events[event];
    }
}
const event = new EventEmitter();

event.on('click', ...params => {
    console.log('click ' + [...params]);
});

event.emit('click', 1, 2); // click 1, 2
event.off('click');
event.emit('click', 1);　// 您没有订阅该事件