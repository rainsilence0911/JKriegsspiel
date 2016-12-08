
export default class Task {

    constructor(fn) {
        this.doneStatus = false;
        this.processFn = fn;
        this.completeListener = null;
    }

    isDone() {
        return this.doneStatus;
    }

    process(elapse) {
        this.processFn(elapse);
    }

    addCompleteListener(fn) {
        this.completeListener = fn;
    }

    done() {
        this.doneStatus = true;
        if (this.completeListener) {
            this.completeListener();
        }
    }

}