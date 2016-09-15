(function(){
	
	var 
		userAgent = navigator.userAgent,
		isIE = /msie/i.test(userAgent) && !window.opera,
		isWebKit = /webkit/i.test(userAgent),
		isFirefox = /firefox/i.test(userAgent);
	
	Rs = {
		version: 1.0,
		isIE: isIE,
		isWebKit: isWebKit,
		isFirefox: isFirefox
	};
	
	/**
	 * 扩展函数
	 */
	Rs.extend = function(target, params) {
		
		target = target || {};
		
		for (var prop in params) {
			target[prop] = params[prop];
		}	
		return target;
	};
	
	/**
	 * 类构造
	 * 
	 * @param arguments[0] : 类主体本身或者父类
	 * @param arguments[1] : 子类主体(如果是基类则此参数可省略)
	 */
	Rs.Class = function() {
		// 构造体
		var Class = function() {
			if (this.initialize) {
				this.initialize.apply(this, arguments);
			}
		};
		
		var extended = {};
		
		var parent, superclass;
		
		for (var index = 0, len = arguments.length; index < len; index++) {
			
			if (typeof arguments[index] == "function") {
				
				// 如果有父类
				if (index == 0 && len > 1) {
					
					var initialize = arguments[index].prototype.initialize;
					
					arguments[index].prototype.initialize = function() {};
					
					extended = new arguments[index]();
					
					if (initialize === undefined) {
						delete arguments[index].prototype.initialize;
					} else {
						arguments[index].prototype.initialize = initialize;
					}
					
					superclass = arguments[index];
					continue;
				}
				
				parent = arguments[index].prototype;
			} else {
				// 如果为顶层基类
				parent = arguments[index];
			}
			
			Rs.extend(extended, parent);
		}
		Class.prototype = extended;
		Class.superclass = superclass;
		return Class;
	};
	
	/**
	 * 事件委托
	 */
	Rs.addEventListener = function() {
		if (window.attachEvent) {
			return function(control, eventName, fn) {
				// 解决this为window对象的问题
				control.attachEvent('on' + eventName, function(e) {fn.call(control, e);});
			};
		} else if (window.addEventListener) {
			return function(control, eventName, fn) {
				control.addEventListener(eventName, fn, false);
			};
		} else {
			return function(control, eventName, fn) {
				control['on' + eventName] = fn;
			};
		}
	}();
	
	/**
	 * 透明函数
	 * 
	 * @param target 目标对象
	 * @param rate 透明百分比
	 */
	Rs.opacity = function() {
		
		if (isIE) {
			return function(target, rate) {
				
				var filters = target.style.filter.replace(/alpha\(opacity=[-]?[0-9]*[.]?[0-9]*[e]?[-]?[0-9]*\)/gi, "");
				target.style.filter = filters + " alpha(opacity=" + (rate * 100) + ")";
			};
		} else {
			return function(target, rate) {
				target.style.opacity = rate;
			};
		}
	}();
	
	/**
	 * 旋转函数
	 * 
	 * @param target 目标对象
	 * @param degree 角度(非弧度制)
	 */
	Rs.rotate = function() {
		if (isWebKit) {
			return function(target, degree) {
				target.style.webkitTransform = "rotate(" + degree + "deg)";
			};
		} else if (isFirefox) {
			return function(target, degree) {
				target.style.MozTransform = "rotate(" + degree + "deg)";
			};
		} else if (isIE) {
			// 将M11,M12,M21,M22同时缩小扩大N倍能达到缩放的目的
			//target.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(rotation=" + degree + ")";
			/*return function(target, degree) {
				degree = degree / 180 * Math.PI;
				var sinDeg = Math.sin(degree);
				var cosDeg = Math.cos(degree);
				
				target.style.filter = "progid:DXImageTransform.Microsoft.Matrix(" +
						"M11=" + cosDeg + ",M12=" + (-sinDeg) + ",M21=" + sinDeg + ",M22=" + cosDeg + ",SizingMethod='auto expand')";
			};*/
			return function(target, degree) {
				if (degree == 90) {
					degree = 1;
				} else if (degree == 270) {
					degree = 3;
				} else {
					target.style.marginLeft = '0px';
					target.style.marginTop = '0px';
					target.style.filter = "";
					return;
				}
				
				var pos = Math.abs(parseInt(target.style.width, 10) - parseInt(target.style.height, 10)) / 2;
				
				target.style.marginLeft = pos + 'px';
				target.style.marginTop = (-pos) + 'px';
				target.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(rotation=" + degree + ")";
			};
		} else {
			return function(target, degree) {
				target.style.transform = "rotate(" + degree + "deg)";
			};
		}
	}();
})();