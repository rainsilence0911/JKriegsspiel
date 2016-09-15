/**
 * Timer Modal
 * 
 * @author rainsilence
 * @version 2.1
 */

(function() {
	
	/**
	 * TimerEvent constructor
	 * 
	 * @param type
	 * @param bubbles
	 * @param cancelable
	 */
	TimerEvent = function(type, bubbles, cancelable) {
		this.type = type;
		this.bubbles = bubbles;
		this.cancelable = cancelable;
	};
	
	/**
	 * Event declare
	 * 
	 * @event TIMER
	 * @event TIMER_COMPLETE
	 */
	Rs.extend(TimerEvent, {
		TIMER : "timer",
		TIMER_COMPLETE : "timerComplete"
	});
	
	/**
	 * Event method
	 *
	 * @method toString
	 */
	Rs.extend(TimerEvent.prototype, {
		toString : function() {
			return "[TimerEvent type=" + this.type + 
				" bubbles=" + this.bubbles + 
				" cancelable=" + this.cancelable +"]";
		}
	});
	
	/**
	 * Timer constructor
	 *
	 * @param delay
	 * @param repeatCount
	 */
	Timer = function(delay, repeatCount) {

		var listenerMap = {};
		listenerMap[TimerEvent.TIMER] = [];
		listenerMap[TimerEvent.TIMER_COMPLETE] = [];
		
		Rs.extend(this, {
			currentCount : 0,
			running : false,
			delay : delay,
			repeatCount : repeatCount,
			// true:Interval,false:Timeout
			repeatType : repeatCount == null || repeatCount < 1 ? true : false,
			handler : listenerMap,
			timerId : 0,
			isCompleted : false
		});
	};
	
	var timerEvent = new TimerEvent(TimerEvent.TIMER, false, false);
	var timerCompleteEvent = new TimerEvent(TimerEvent.TIMER_COMPLETE, false, false);
	
	/**
	 * Timer Method
	 * 
	 * @method addEventListener
	 * @method removeEventListener
	 * @method start
	 * @method stop
	 * @method reset
	 */
	Rs.extend(Timer.prototype, {
		
		addEventListener : function(type, listener, useCapture) {

			if (type == TimerEvent.TIMER || type == TimerEvent.TIMER_COMPLETE) {
				
				if (!listener) {
					alert("Listener is null");
				}
				
				if (useCapture == true) {
					this.handler[type].splice(0, 0, [listener]);
				} else {
					this.handler[type].push(listener);
				}
			}
		},
		
		removeEventListener : function(type, listener) {

			if (type == TimerEvent.TIMER || type == TimerEvent.TIMER_COMPLETE) {
				
				if (!listener) {
					this.handler[type] = [];
				} else {
					
					var listeners = this.handler[type];
					
					for (var index = 0; index < listeners.length; index++) {
						if (listeners[index] == listener) {
							listeners.splice(index, 1);
							break;
						}
					}
				}
			}
		},
		
		start : function() {
			
			var timerThis = this;
			
			if (this.running == true || this.isCompleted) {
				return;
			}
			
			if (this.handler[TimerEvent.TIMER].length == 0 &&
				this.handler[TimerEvent.TIMER_COMPLETE].length == 0) {
				alert("No Function");
				return;
			}
			
			if (this.repeatType) {
				this.timerId = setInterval(function() {
						dispachListener(timerThis.handler[TimerEvent.TIMER], timerEvent);
						timerThis.currentCount++;
					}, this.delay);
			} else {
				this.timerId = setTimeout(function() {delayExecute(timerThis.handler[TimerEvent.TIMER]);}, this.delay);
			}
			
			this.running = true;
			
			function delayExecute(listeners) {

				dispachListener(listeners, timerEvent);

				timerThis.currentCount++;
				
				if (timerThis.currentCount < timerThis.repeatCount) {
					if (timerThis.running) {
						timerThis.timerId = setTimeout(function() {delayExecute(listeners);}, timerThis.delay);	
					}
				} else {
					timerThis.running = false;
				}

				if (timerThis.running == false) {
					if (!timerThis.isCompleted) {
						timerThis.isCompleted = true;
						dispachListener(timerThis.handler[TimerEvent.TIMER_COMPLETE], timerCompleteEvent);
					}
				}
			}
			
			function dispachListener(listeners, event) {

				for (var prop in listeners) {
					listeners[prop](event);
				}
			}
		},

		stop : function() {
			
			if (this.running == false) {
				return;
			}
			
			this.running = false;
			
			if (this.timerId == null) {
				return;
			}
			
			if (this.repeatType) {
				clearInterval(this.timerId);
			} else {
				clearTimeout(this.timerId);
			}
			
			if (!this.isCompleted) {
				
				this.isCompleted = true;
				
				var listeners = this.handler[TimerEvent.TIMER_COMPLETE];
				
				for (var prop in listeners) {
					listeners[prop](timerCompleteEvent);
				}
			}
		},
		
		reset : function() {
			this.currentCount = 0;
			this.isCompleted = false;
		}
	});
})();