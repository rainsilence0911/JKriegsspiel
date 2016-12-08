
import Timer from './Timer';
import Task from './Task';

let timer = new Timer();

export default class ExecutorService {

    static submit(task) {
        timer.addTask(task);
    }
}