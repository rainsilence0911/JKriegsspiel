/**
 * Provides requestAnimationFrame in a cross browser way.
 */
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function() {

        return window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
    })();
}

export default class Timer {

    constructor() {
        this.tasks = [];
        this.runHandler = this.run.bind(this);
        this.lastTime = new Date().getTime();
        requestAnimationFrame(this.runHandler);
    }

    addTask(task) {
        this.tasks.push(task);
    }

    run() {

        let timeNow = new Date().getTime();
        let elapse = (timeNow - this.lastTime) / 1000;
        let tasks = this.tasks;

        for (let i = 0; i < tasks.length; i++) {

            let task = tasks[i];

            if (task.isDone()) {
                tasks.splice(i, 1);
                i--;
                continue;
            }

            task.process(elapse);
        }

        this.lastTime = timeNow;

        requestAnimationFrame(this.runHandler);
    }
}