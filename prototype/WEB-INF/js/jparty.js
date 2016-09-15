(function() {
	
	var px = "px";
	
	/**
	 * 初始化参数
	 */
	var Params = {
		
		/**
		 * 棋格大小 
		 */
		Square: {
			width: '33px',
			height: '23px'
		},
		
		/**
		 * 棋格坐标
		 */
		Squares: [
		    [-2, 8, 414, 22],
		    [-2, 7, 414, 61],
		    [-2, 6, 414, 99],
		    [-2, 5, 414, 138],
		    [-2, 4, 414, 179],
		    [-2, 3, 414, 216],
		    [-2, 2, 414, 255],
		    [-2, 0, 414, 333],
		    [-2, -2, 414, 411],
		    [-2, -3, 414, 449],
		    [-2, -4, 414, 488],
		    [-2, -5, 414, 528],
		    [-2, -6, 414, 567],
		    [-2, -7, 414, 605],
		    [-2, -8, 414, 644],
		    [-1, 8, 454, 22],
		    [-1, 7, 454, 61],
		    [-1, 6, 454, 99],
		    [-1, 5, 454, 138],
		    [-1, 4, 454, 179],
		    [-1, 3, 454, 216],
		    [-1, -3, 454, 449],
		    [-1, -4, 454, 488],
		    [-1, -5, 454, 528],
		    [-1, -6, 454, 567],
		    [-1, -7, 454, 605],
		    [-1, -8, 454, 644],
		    [0, 8, 494, 22],
		    [0, 7, 494, 61],
		    [0, 6, 494, 99],
		    [0, 5, 494, 138],
		    [0, 4, 494, 179],
		    [0, 3, 494, 216],
		    [0, 2, 494, 255],
		    [0, 0, 494, 333],
		    [0, -2, 494, 411],
		    [0, -3, 494, 449],
		    [0, -4, 494, 488],
		    [0, -5, 494, 528],
		    [0, -6, 494, 567],
		    [0, -7, 494, 605],
		    [0, -8, 494, 644],
		    [1, 8, 533, 22],
		    [1, 7, 533, 61],
		    [1, 6, 533, 99],
		    [1, 5, 533, 138],
		    [1, 4, 533, 179],
		    [1, 3, 533, 216],
		    [1, -3, 533, 449],
		    [1, -4, 533, 488],
		    [1, -5, 533, 528],
		    [1, -6, 533, 567],
		    [1, -7, 533, 605],
		    [1, -8, 533, 644],
		    [2, 8, 573, 22],
		    [2, 7, 573, 61],
		    [2, 6, 573, 99],
		    [2, 5, 573, 138],
		    [2, 4, 573, 179],
		    [2, 3, 573, 216],
		    [2, 2, 573, 255],
		    [2, 0, 573, 333],
		    [2, -2, 573, 411],
		    [2, -3, 573, 449],
		    [2, -4, 573, 488],
		    [2, -5, 573, 528],
		    [2, -6, 573, 567],
		    [2, -7, 573, 605],
		    [2, -8, 573, 644],
		    [-8, 2, 182, 255, true],
		    [-8, 1, 182, 294, true],
		    [-8, 0, 182, 333, true],
		    [-8, -1, 182, 372, true],
		    [-8, -2, 182, 411, true],
		    [-7, 2, 222, 255, true],
		    [-7, 1, 222, 294, true],
		    [-7, 0, 222, 333, true],
		    [-7, -1, 222, 372, true],
		    [-7, -2, 222, 411, true],
		    [-6, 2, 261, 255, true],
		    [-6, 1, 261, 294, true],
		    [-6, 0, 261, 333, true],
		    [-6, -1, 261, 372, true],
		    [-6, -2, 261, 411, true],
		    [-5, 2, 299, 255, true],
		    [-5, 1, 299, 294, true],
		    [-5, 0, 299, 333, true],
		    [-5, -1, 299, 372, true],
		    [-5, -2, 299, 411, true],
		    [-4, 2, 338, 255, true],
		    [-4, 1, 338, 294, true],
		    [-4, 0, 338, 333, true],
		    [-4, -1, 338, 372, true],
		    [-4, -2, 338, 411, true],
		    [-3, 2, 376, 255, true],
		    [-3, 1, 376, 294, true],
		    [-3, 0, 376, 333, true],
		    [-3, -1, 376, 372, true],
		    [-3, -2, 376, 411, true],
		    [3, 2, 611, 255, true],
		    [3, 1, 611, 294, true],
		    [3, 0, 611, 333, true],
		    [3, -1, 611, 372, true],
		    [3, -2, 611, 411, true],
		    [4, 2, 649, 255, true],
		    [4, 1, 649, 294, true],
		    [4, 0, 649, 333, true],
		    [4, -1, 649, 372, true],
		    [4, -2, 649, 411, true],
		    [5, 2, 688, 255, true],
		    [5, 1, 688, 294, true],
		    [5, 0, 688, 333, true],
		    [5, -1, 688, 372, true],
		    [5, -2, 688, 411, true],
		    [6, 2, 727, 255, true],
		    [6, 1, 727, 294, true],
		    [6, 0, 727, 333, true],
		    [6, -1, 727, 372, true],
		    [6, -2, 727, 411, true],
		    [7, 2, 767, 255, true],
		    [7, 1, 767, 294, true],
		    [7, 0, 767, 333, true],
		    [7, -1, 767, 372, true],
		    [7, -2, 767, 411, true],
		    [8, 2, 806, 255, true],
		    [8, 1, 806, 294, true],
		    [8, 0, 806, 333, true],
		    [8, -1, 806, 372, true],
		    [8, -2, 806, 411, true]
		],
		
		/**
		 * 轨道坐标
		 */
		RailWays: [
		    [[2, 7], [2, 6], [2, 5], [2, 4], [2, 3], [2, 2], [2, 0], [2, -2], [2, -3], [2, -4], [2, -5], [2, -6], [2, -7]],
		    [[-7, 2], [-6, 2], [-5, 2], [-4, 2], [-3, 2], [-2, 2], [0, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2]],
		    [[-2, 7], [-2, 6], [-2, 5], [-2, 4], [-2, 3], [-2, 2], [-2, 0], [-2, -2], [-2, -3], [-2, -4], [-2, -5], [-2, -6], [-2, -7]],
		    [[-7, -2], [-6, -2], [-5, -2], [-4, -2], [-3, -2], [-2, -2], [0, -2], [2, -2], [3, -2], [4, -2], [5, -2], [6, -2], [7, -2]],
		    [[-7, -2], [-6, -2], [-5, -2], [-4, -2], [-3, -2], [-2, -3], [-2, -4], [-2, -5], [-2, -6], [-2, -7]],
		    [[-2, 7], [-2, 6], [-2, 5], [-2, 4], [-2, 3], [-3, 2], [-4, 2], [-5, 2], [-6, 2], [-7, 2]],
		    [[2, 7], [2, 6], [2, 5], [2, 4], [2, 3], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2]],
		    [[2, -7], [2, -6], [2, -5], [2, -4], [2, -3], [3, -2], [4, -2], [5, -2], [6, -2], [7, -2]],
		    [[-7, 2], [-7, 1], [-7, 0], [-7, -1], [-7, -2]],
		    [[-3, 2], [-3, 1], [-3, 0], [-3, -1], [-3, -2]],
		    [[3, 2], [3, 1], [3, 0], [3, -1], [3, -2]],
		    [[7, 2], [7, 1], [7, 0], [7, -1], [7, -2]],
		    [[-2, 7], [-1, 7], [0, 7], [1, 7], [2, 7]],
		    [[-2, 3], [-1, 3], [0, 3], [1, 3], [2, 3]],
		    [[-2, -3], [-1, -3], [0, -3], [1, -3], [2, -3]],
		    [[-2, -7], [-1, -7], [0, -7], [1, -7], [2, -7]],
		    [[-3, 0], [-2, 0], [0, 0], [2, 0], [3, 0]],
		    [[0, 3], [0, 2], [0, 0], [0, -2], [0, -3]]
		],
		
		/**
		 * 营地坐标
		 */
		Campsites: [
		    [-6, 1],
		    [-6, -1],
		    [-5, 0],
		    [-4, 1],
		    [-4, -1],
		    [4, 1],
		    [4, -1],
		    [5, 0],
		    [6, 1],
		    [6, -1],
		    [-1, 6],
		    [-1, 4],
		    [0, 5],
		    [1, 6],
		    [1, 4],
		    [-1, -6],
		    [-1, -4],
		    [0, -5],
		    [1, -6],
		    [1, -4]
		],
		
		/**
		 * 大本营坐标
		 */
		BaseCamp: [
		    [-1, 8],
		    [1, 8],
		    [8, 1],
		    [8, -1],
		    [-1, -8],
		    [1, -8],
		    [-8, 1],
		    [-8, -1]
		]
	};
	
	/**
	 * 所有容器类的父类
	 */
	var Component = Rs.Class({
		x: null,
		y: null,
		container: null,
		
		/**
		 * 构造体，用于创建自身的实体Div
		 */
		initialize: function(divName) {
			this.container = divName ? 
				document.getElementById(divName) : 
				document.createElement("div");
		},
		
		/**
		 * 增加一个节点
		 */
		appendChild: function(component) {
			this.container.appendChild(component.render());
		},
		
		/**
		 * 绘画方法，返回Component
		 */
		render: function() {
			return this.container;
		},
		
		/**
		 * 取得容器坐标X
		 */
		getLeft: function() {
			return parseInt(this.container.style.left, 10);
		},
		
		/**
		 * 取得容器坐标Y
		 */
		getTop: function() {
			return parseInt(this.container.style.top, 10);
		}
	});

	/**
	 * 加载图片
	 * 
	 * @param path 图片路径
	 * @param callback 第一个参数是image的回调函数
	 */
	function loadImage(path, callback) {
		var image = new Image();
		image.src = path;
		if (image.complete) {
			callback(image);
			return;
		}
		image.onload = function() {
			callback(image);
		};
	};
	
	/**
	 * 棋盘舞台类
	 */
	var Stage = Rs.Class(Component, {
		
		/**
		 * 构造体，用于加载图片
		 */
		initialize: function(backgroundImage) {
			Stage.superclass.prototype.initialize.call(this);
			var targetThis = this;
			loadImage(backgroundImage, function(image) {
				Rs.extend(targetThis.container.style, {
					position: 'absolute',
					left: '0px',
					top: '0px',
					zIndex: 0,
					backgroundImage: 'url(' + backgroundImage + ')',
					width: image.width + px,
					height: image.height + px
				});
			});
		},
		
		/**
		 * 增加棋子
		 */
		appendChild: function(component) {
			this.container.appendChild(component.render());
			if (component instanceof Square) {
				Runtime.squareList.push(component);
			} else if (component instanceof Piece) {
				Runtime.usedSquare.push([component.x, component.y]);
			}
		},
		
		/**
		 * 删除棋子
		 */
		removeChild: function(component) {
			
			this.container.removeChild(component.render());
			if (component instanceof Piece) {
				var usedSquares = Runtime.usedSquare;
				Runtime.deleteUsedSquare([component.x, component.y]);
			}
		}
	});
	
	/**
	 * 可移动容器类
	 */
	var MoveableComponent = Rs.Class(Component, {
		
		isVertical: false,
		
		/** 定时器 */
		moveTimer: null,
		
		/** 移动类型 */
		eventType: null,
		
		/** 目标坐标X */
		targetY: null,
		
		/** 目标坐标Y */
		targetX: null,
		
		/** 路线数组 */
		route: null,
		
		/** 旋转角度 */
		angle: 0,
		
		/**
		 * 构造体(用于加载移动逻辑)
		 */
		initialize: function() {
		
			MoveableComponent.superclass.prototype.initialize.call(this);
			
			var targetThis = this;
			this.moveTimer = new Timer(5);
			
			/**
			 * 移动事件计算
			 */
			this.moveTimer.addEventListener(TimerEvent.TIMER, function() {
				
				var currentPiece = Runtime.currentPiece;
				
				switch(targetThis.eventType) {
				case MoveEvent.LEFT_TOP:
					currentPiece.setLeft(currentPiece.getLeft() - 3);
					currentPiece.setTop(currentPiece.getTop() - 3);
					break;
				case MoveEvent.RIGHT_TOP:
					currentPiece.setLeft(currentPiece.getLeft() + 3);
					currentPiece.setTop(currentPiece.getTop() - 3);
					break;
				case MoveEvent.LEFT_BOTTOM:
					currentPiece.setLeft(currentPiece.getLeft() - 3);
					currentPiece.setTop(currentPiece.getTop() + 3);
					break;
				case MoveEvent.RIGHT_BOTTOM:
					currentPiece.setLeft(currentPiece.getLeft() + 3);
					currentPiece.setTop(currentPiece.getTop() + 3);
					break;
				case MoveEvent.LEFT:
					currentPiece.setLeft(currentPiece.getLeft() - 3);
					break;
				case MoveEvent.RIGHT:
					currentPiece.setLeft(currentPiece.getLeft() + 3);
					break;
				case MoveEvent.TOP:
					currentPiece.setTop(currentPiece.getTop() - 3);
					break;
				case MoveEvent.BOTTOM:
					currentPiece.setTop(currentPiece.getTop() + 3);
					break;
				}
				
				// 进入范围触发停止事件
				if (targetThis.targetY <= currentPiece.getTop() + 5 &&
						targetThis.targetY >= currentPiece.getTop() - 5 &&
						targetThis.targetX <= currentPiece.getLeft() + 5 &&
						targetThis.targetX >= currentPiece.getLeft() - 5) {
					
					currentPiece.setTop(targetThis.targetY);
					currentPiece.setLeft(targetThis.targetX);
					targetThis.moveTimer.stop();
				}
			});
			
			/**
			 * 移动事件停止
			 */
			this.moveTimer.addEventListener(TimerEvent.TIMER_COMPLETE, function() {
				
				// 最后一格移动
				if (targetThis.route == null || targetThis.route.length == 0) {
					Runtime.isMoving = false;
					Runtime.pushUsedSquare([targetThis.x, targetThis.y]);
					
					Runtime.currentPiece.setPosition(targetThis.x, targetThis.y);
					targetThis.doMoveOver(Runtime.currentPiece);
					Runtime.currentPiece = null;
					Runtime.oldTarget = null;
				} else {
					// 根据route数组，继续下一格移动
					var nextTarget = targetThis.route.shift();
					
					Runtime.currentPiece.setPosition(Runtime.oldTarget.x, Runtime.oldTarget.y);
					Runtime.oldTarget = Runtime.getSquare(nextTarget[0], nextTarget[1]);
					targetThis.doMove(Runtime.currentPiece, Runtime.oldTarget);
				}
			});
		},
	
		/**
		 * 移动事件触发函数
		 */
		doMove: function(currentPiece, targetThis) {
			
			this.targetY = targetThis.getTop();
			this.targetX = targetThis.getLeft();
			this.angle = 0;
			
			if (targetThis.isVertical) {
				if (targetThis.x > 0) {
					this.angle = 90;
				} else if (targetThis.x < 0) {
					this.angle = 270;
				}
			}
			
			currentPiece.rotate(this.angle);
			
			var originY = currentPiece.getTop();
			var originX = currentPiece.getLeft();
			
			if (originY > this.targetY + 10) {
				if (originX > this.targetX) {
					this.eventType = MoveEvent.LEFT_TOP;
				} else if (originX < this.targetX) {
					this.eventType = MoveEvent.RIGHT_TOP;
				} else {
					this.eventType = MoveEvent.TOP;
				}
			} else if (originY < this.targetY - 10) {
				if (originX > this.targetX) {
					this.eventType = MoveEvent.LEFT_BOTTOM;
				} else if (originX < this.targetX) {
					this.eventType = MoveEvent.RIGHT_BOTTOM;
				} else {
					this.eventType = MoveEvent.BOTTOM;
				}
			} else {
				if (originX > this.targetX) {
					this.eventType = MoveEvent.LEFT;
				} else {
					this.eventType = MoveEvent.RIGHT;
				}
			}
			
			currentPiece.stopFlicker();
			Runtime.isMoving = true;
			this.moveTimer.reset();
			this.moveTimer.start();
		},
		
		/**
		 * 移动终了接口
		 */
		doMoveOver: function(currentPiece) {
			currentPiece.isVertical = this.isVertical;
		}
	});
	
	/**
	 * 棋子类
	 */
	var Piece = Rs.Class(MoveableComponent, {
		value: null,
		team: null,
		flickerTimer: null,
		
		initialize: function(x, y, value, color, team) {
			Piece.superclass.prototype.initialize.call(this);
			
			Rs.extend(this, {
				x: x,
				y: y,
				value: value,
				team: team
			});
			
			var path = "WEB-INF/image/" + color + "/" + value + ".jpg";
			
			var targetThis = this;
			var square = Runtime.getSquare(x, y);
			
			loadImage(path, function(image) {
				Rs.extend(targetThis.container.style, {
					cursor: 'pointer',
					position: 'absolute',
					zIndex: 10,
					width: image.width + px,
					height: image.height + px,
					backgroundImage: 'url(' + path + ')',
					left: square.getLeft() + px,
					top: square.getTop() + px
				});
			});
			
			// 初始化图片旋转
			if (square.isVertical) {
				this.isVertical = square.isVertical;
				if (x > 0) {
					this.rotate(90);
				} else {
					this.rotate(270);
				}
			}
			
			this.flickerTimer = new Timer(50);
			var opacity = 1;
			var dValue = .1;
			
			// 闪烁事件
			this.flickerTimer.addEventListener(TimerEvent.TIMER, function() {
				
				if (opacity >= 1 || opacity <= 0) {
					dValue = -dValue;
				}
				opacity += dValue;
				
				Rs.opacity(targetThis.container, opacity);
			});
			
			// 闪烁停止事件
			this.flickerTimer.addEventListener(TimerEvent.TIMER_COMPLETE, function() {
				opacity = 1;
				dValue = .1;
				Rs.opacity(targetThis.container, opacity);
			});
			
			Rs.addEventListener(this.container, 'click', function() {
				
				if (Runtime.isMoving) {
					return;
				}
				
				var currentPiece = Runtime.currentPiece;
				
				// 闪烁
				if (currentPiece == null) {
					
					// 如果身在大本营则不能被选中
					if (Runtime.isInBaseCamp(targetThis)) {
						return;
					}
					
					targetThis.flickerTimer.reset();
					targetThis.flickerTimer.start();
					Runtime.currentPiece = targetThis;
					return;
				}
				
				// 停止闪烁
				if (currentPiece.x == targetThis.x && currentPiece.y == targetThis.y) {
					targetThis.flickerTimer.stop();
					Runtime.currentPiece = null;
					return;
				}
				
				// 吃子
				if (currentPiece.team != targetThis.team &&
						(currentPiece.x != targetThis.x || 
						currentPiece.y != targetThis.y)) {
					
					// 普通寻址
					if (!Runtime.isInAllRailway(targetThis) || 
							!Runtime.isInAllRailway(currentPiece)) {
						
						if (Runtime.isInCampsite(targetThis)) {
							return;
						}
						
						currentPiece.stopFlicker();
						var dx = Math.abs(targetThis.x - currentPiece.x);
						var dy = Math.abs(targetThis.y - currentPiece.y);
						
						if (dx == 1 || dy == 1) {
							
							if (dy > 1 || dx > 1) {
								return;
							}
							
							if (dx == 1 && dy == 1 && !Runtime.isAllInCampsite(currentPiece, targetThis)) {
								return;
							}
							Runtime.deleteUsedSquare([currentPiece.x, currentPiece.y]);
							targetThis.doMove(currentPiece, targetThis);
							
							return;
						}
						// 一个在铁路上，一个不在，不满足条件则不能移动
						return;
					}
					
					// 工兵寻址
					if (currentPiece.value == 1) {
						
						Runtime.deleteUsedSquare([targetThis.x, targetThis.y]);
						targetThis.route = Runtime.getSapperRoute(currentPiece, targetThis);
						Runtime.pushUsedSquare([targetThis.x, targetThis.y]);
						
						if (!targetThis.route) {
							return;
						}
						
						var nextTarget = targetThis.route.shift();
						
						if (!nextTarget) {
							return;
						}
						
						Runtime.oldTarget = Runtime.getSquare(nextTarget[0], nextTarget[1]);
						Runtime.deleteUsedSquare([currentPiece.x, currentPiece.y]);
						targetThis.doMove(currentPiece, Runtime.oldTarget);
						return;
					}
					
					// 铁路寻址
					var resultIndex = Runtime.isSameRailway(currentPiece, targetThis);
					
					if (resultIndex != null) {
						
						targetThis.route = Runtime.getRoute(Params.RailWays[resultIndex], currentPiece, targetThis);
						
						for (var index = 0; index < targetThis.route.length - 1; index++) {
							if (Runtime.containPoint(targetThis.route[index], Runtime.usedSquare)) {
								return;
							}
						}
						currentPiece.stopFlicker();
						var nextTarget = targetThis.route.shift();
						Runtime.oldTarget = Runtime.getSquare(nextTarget[0], nextTarget[1]);
						Runtime.deleteUsedSquare([currentPiece.x, currentPiece.y]);
						targetThis.doMove(currentPiece, Runtime.oldTarget);
						return;
					}
					
					Runtime.currentPiece = null;
				}
			});
		},
		stopFlicker: function() {
			if (this.flickerTimer) {
				this.flickerTimer.stop();
			}
		},
		setLeft: function(value) {
			this.container.style.left = value + px;
		},
		setTop: function(value) {
			this.container.style.top = value + px;
		},
		setPosition: function(x, y) {
			this.x = x;
			this.y = y;
		},
		rotate: function(degree) {
			Rs.rotate(this.render(), degree);
		},
		
		doMoveOver: function(currentPiece) {
			if (currentPiece.value > this.value) {
				currentPiece.isVertical = this.isVertical;
				Runtime.stage.removeChild(this);
			} else {
				Runtime.stage.removeChild(currentPiece);
			}
		}
	});
	
	/**
	 * 棋格类
	 */
	var Square = Rs.Class(MoveableComponent, {
		
		/**
		 * 构造体
		 * @param x 坐标X
		 * @param y 坐标Y
		 * @param posX 实际坐标X
		 * @param posY 实际坐标Y
		 * @param isVertical 是否纵向
		 */
		initialize: function(x, y, posX, posY, isVertical) {
		
			Square.superclass.prototype.initialize.call(this);
			
			Rs.extend(this, {
				x: x,
				y: y,
				isVertical: isVertical ? true : false
			});

			Rs.extend(this.container.style, {
				position: 'absolute',
				left: posX + px,
				top: posY + px,
				width: Params.Square.width,
				height: Params.Square.height,
				zIndex: 1,
				cursor: 'pointer'
			});
			var targetThis = this;
			
			/**
			 * 点击事件
			 */
			Rs.addEventListener(this.container, 'click', function() {
				
				var currentPiece = Runtime.currentPiece;
				var isMoving = Runtime.isMoving;
				if (!currentPiece || isMoving) {
					return;
				}
				
				// 普通寻址
				if (!Runtime.isInAllRailway(targetThis) || 
						!Runtime.isInAllRailway(currentPiece)) {
					
					var dx = Math.abs(targetThis.x - currentPiece.x);
					var dy = Math.abs(targetThis.y - currentPiece.y);
					
					if (dx == 1 || dy == 1) {
						
						if (dy > 1 || dx > 1) {
							return;
						}
						
						if (dx == 1 && dy == 1 && !Runtime.isAllInCampsite(currentPiece, targetThis)) {
							return;
						}
						Runtime.deleteUsedSquare([currentPiece.x, currentPiece.y]);
						targetThis.doMove(currentPiece, targetThis);
						
						return;
					}
					// 一个在铁路上，一个不在，不满足条件则不能移动
					return;
				}
				
				// 工兵寻址
				if (currentPiece.value == 1) {
					targetThis.route = Runtime.getSapperRoute(currentPiece, targetThis);
					if (!targetThis.route) {
						return;
					}
					
					var nextTarget = targetThis.route.shift();
					
					if (!nextTarget) {
						return;
					}
					
					Runtime.oldTarget = Runtime.getSquare(nextTarget[0], nextTarget[1]);
					Runtime.deleteUsedSquare([currentPiece.x, currentPiece.y]);
					
					targetThis.doMove(currentPiece, Runtime.oldTarget);
					return;
				}
				
				// 铁路寻址
				var resultIndex = Runtime.isSameRailway(currentPiece, targetThis);
				
				if (resultIndex != null) {
					
					targetThis.route = Runtime.getRoute(Params.RailWays[resultIndex], currentPiece, targetThis);
					
					for (var index = 0; index < targetThis.route.length; index++) {
						if (Runtime.containPoint(targetThis.route[index], Runtime.usedSquare)) {
							return;
						}
					}
					
					var nextTarget = targetThis.route.shift();
					Runtime.oldTarget = Runtime.getSquare(nextTarget[0], nextTarget[1]);
					Runtime.deleteUsedSquare([currentPiece.x, currentPiece.y]);
					targetThis.doMove(currentPiece, Runtime.oldTarget);
					return;
				}
			});
		}
	});
	
	/**
	 * 运行时单例对象
	 */
	var Runtime = {
		
		isMoving: false,	
		
		currentPiece: null,
		
		oldTarget: null,
		
		stage: null,
		
		/** 全部网格列表 */
		squareList: [],
		
		/** 已被利用网格 */
		usedSquare: [],
		
		/**
		 * 删除利用网格成员
		 */
		deleteUsedSquare: function(oldSquare) {
			
			var squares = Runtime.usedSquare;
			
			for (var index = 0; index < squares.length; index++) {
				
				if (oldSquare[0] == squares[index][0] &&
						oldSquare[1] == squares[index][1]) {
					squares.splice(index, 1);
					
				}
			}
		},
		
		/**
		 * 增加利用网格成员
		 */
		pushUsedSquare: function(newSquare) {
			Runtime.usedSquare.push(newSquare);
		},
		
		/**
		 * 判断网格是否在成员列表里
		 */
		isInUsedSquare: function(square) {
			var squares = Runtime.usedSquare;
			for (var index = 0; index < squares.length; index++) {
				if (squares[index][0] == square[0] && squares[index][1] == square[1]) {
					return true;
				}
			}
			return false;
		},
		
		/**
		 * 得到棋格
		 */
		getSquare: function(x, y) {
			for (var index = 0; index < this.squareList.length; index++) {
				if (this.squareList[index].x == x &&
						this.squareList[index].y == y) {
					return this.squareList[index];
				}
			}
			return null;
		},
		
		/**
		 * 判断是否在同一条铁路上
		 * 
		 * @return 不在则返回null，在则返回那条铁路
		 */
		isSameRailway: function(firstComp, secondComp) {
			
			var railways = Params.RailWays;
			
			for (var index = 0; index < railways.length; index++) {
				
				var railway = railways[index];
				
				if (inRailway(railway, firstComp) && inRailway(railway, secondComp)) {
					return index;
				}
			}
			
			return null;
			
			function inRailway(railway, comp) {
				for (var index = 0; index < railway.length; index++) {
					if (comp.x == railway[index][0] &&
							comp.y == railway[index][1]) {
						return true;
					}
				}
				return false;
			}	
		},
		
		/**
		 * 从铁路中得到路线
		 */
		getRoute: function(railway, current, desc) {
			
			if (current.x == desc.x &&
					current.y == desc.y) {
				return null;
			}
			
			var currentIndex = getIndex(current, railway);
			var descIndex = getIndex(desc, railway);
			
			var route = [];
			
			if (currentIndex > descIndex) {
				for (var index = currentIndex - 1; index >= descIndex; index--) {
					route.push(railway[index]);
				}
			} else {
				for (var index = currentIndex + 1; index <= descIndex; index++) {
					route.push(railway[index]);
				}
			}
			return route;
			
			/**
			 * 从一条铁路中得到Component的index
			 */
			function getIndex(comp, railway) {
				for (var index = 0; index < railway.length; index++) {
					if (comp.x == railway[index][0] && comp.y == railway[index][1]) {
						return index;
					}
				}
				return null;
			}
			
		},
		
		/**
		 * 是否在营地坐标上
		 */
		isAllInCampsite: function(firstComp, secondComp) {
			
			if (Runtime.isInCampsite(firstComp) || Runtime.isInCampsite(secondComp)) {
				return true;
			}
			return false;
		},
		
		/**
		 * 判断营地坐标
		 */
		isInCampsite: function(comp) {
			
			var campSites = Params.Campsites;
			
			for (var index = 0; index < campSites.length; index++) {
				if (comp.x == campSites[index][0] &&
						comp.y == campSites[index][1]) {
					return true;
				}
			}
			return false;
		},
		
		/**
		 * 判断营地坐标
		 */
		isInBaseCamp: function(comp) {
			
			var campSites = Params.BaseCamp;
			
			for (var index = 0; index < campSites.length; index++) {
				if (comp.x == campSites[index][0] &&
						comp.y == campSites[index][1]) {
					return true;
				}
			}
			return false;
		},
		
		/**
		 * 工兵路线查找
		 */
		getSapperRoute: function(current, desc) {
			
			if (!Runtime.isInAllRailway(current) || !Runtime.isInAllRailway(desc)) {
				return;
			}
			var count = 0;
			var currentPoint = [current.x, current.y];
			
			// 路线
			var route = [];
			
			// 废弃点
			var trash = [];
			route.push(currentPoint);
			var result = findRoute(currentPoint, desc, route, trash);
			route.shift();
			
			if (result == true) {
				route.push([desc.x, desc.y]);
			}
			
			return route;
			
			/**
			 * 寻址递归
			 * 
			 * @param current 当前点
			 * @param desc 目标点
			 * @param route 完成路线
			 * @param trash 废弃点
			 */
			function findRoute(current, desc, route, trash) {
				
				var neighbour = getNeighbour(current);
				
				count++;
				
				// 智能寻址，如果desc.x>current[0]，那么把x大的放前面
				if (neighbour != null && neighbour.length >= 2) {
					var sortX = desc.x - current[0];
					var sortY = desc.y - current[1];
					neighbour.sort(function(a, b) {
						if (sortX == 0) {
							if (sortY > 0) {
								return b[1] - a[1];
							} else {
								return a[1] - b[1];
							}
						}

						if (sortY == 0) {
							if (sortX > 0) {
								return b[0] - a[0];
							} else {
								return a[0] - b[0];
							}
						}

						if (sortX > 0) {

							var dx = b[0] - a[0];

							if (dx != 0) {
								return dx;
							}
							
							if (sortY > 0) {
								return b[1] - a[1];
							} else {
								return a[1] - b[1];
							}
							
						} else {
							
							var dx = a[0] - b[0];
							
							if (Math.abs(sortY) > Math.abs(sortX)) {
								if (sortY > 0) {
									return b[1] - a[1];
								} else {
									return a[1] - b[1];
								}
								
								return dx;
							}
							
							if (dx != 0) {
								return dx;
							}

							if (sortY > 0) {
								return b[1] - a[1];
							} else {
								return a[1] - b[1];
							}
						}
					});
				}
				
				for (var index = 0; index < neighbour.length; index++) {
					
					if (Runtime.containPoint(neighbour[index], route) || 
							Runtime.containPoint(neighbour[index], Runtime.usedSquare) ||
							Runtime.containPoint(neighbour[index], trash)) {
						continue;
					}
					
					if (neighbour[index][0] == desc.x && neighbour[index][1] == desc.y) {
						return true;
					}
				}
				// 80层递归后强制退出
				if (count >= 80) {
					return false;
				}
				
				for (var index = 0; index < neighbour.length; index++) {
					
					if (Runtime.containPoint(neighbour[index], route) ||
							Runtime.containPoint(neighbour[index], Runtime.usedSquare) ||
							Runtime.containPoint(neighbour[index], trash)) {
						continue;
					}
					route.push(neighbour[index]);
					if (!findRoute(neighbour[index], desc, route, trash)) {
						trash.push(route.pop());
					} else {
						return true;
					}
				}
				return false;
				
			}
			
			/**
			 * 得到邻节点坐标集合
			 */
			function getNeighbour(current) {
				var railways = Params.RailWays;
				var neighbour = [];
				for (var index = 0; index < railways.length; index++) {
					for (var railIndex = 0; railIndex < railways[index].length; railIndex++) {
						
						if (Runtime.isInUsedSquare(railways[index])) {
							continue;
						}
						
						if (current[0] == railways[index][railIndex][0] &&
								current[1] == railways[index][railIndex][1]) {
							
							if (railIndex == 0) {
								addNeighbour(neighbour, railways[index][1]);
							} else if (railIndex == railways[index].length - 1) {
								addNeighbour(neighbour, railways[index][railIndex - 1]);
							} else {
								addNeighbour(neighbour, railways[index][railIndex - 1]);
								addNeighbour(neighbour, railways[index][railIndex + 1]);
							}
						}
					}
				}
				return neighbour;
			}
			
			function addNeighbour(neighbour, point) {
				
				for (var index = 0; index < neighbour.length; index++) {
					if (neighbour[index][0] == point[0] && neighbour[index][1] == point[1]) {
						return;
					}
				}
				neighbour.push(point);
			}
		},
		
		/**
		 * 判断是否包含了点
		 */
		containPoint: function(point, pointList) {
			for (var index = 0; index < pointList.length; index++) {
				if (pointList[index][0] == point[0] && pointList[index][1] == point[1]) {
					return true;
				}
			}
			return false;
		},
		
		/**
		 * 判断点是否在铁路上
		 */
		isInAllRailway: function(comp) {
			var railways = Params.RailWays;
			for (var index = 0; index < railways.length; index++) {
				for (var railIndex = 0; railIndex < railways[index].length; railIndex++) {
					if (comp.x == railways[index][railIndex][0] &&
							comp.y == railways[index][railIndex][1]) {
						return true;
					}
				}
			}
			return false;
		}
		
	};
	
	var MoveEvent = {
		LEFT_TOP: 1,
		RIGHT_TOP: 2,
		LEFT_BOTTOM: 3,
		RIGHT_BOTTOM: 4,
		LEFT: 5,
		RIGHT: 6,
		TOP: 7,
		BOTTOM: 8
	};
	
	var Color = {
		BLUE: "blue",
		GREEN: "green",
		ORANGE: "orange",
		VIOLET: "violet"
	};
	
	// 角色
	var Role = {
		TERRORIST: 1,
		POLICE: 2
	};
	
	/**
	 * 对外接口
	 */
	JParty = Rs.Class(Component, {
		
		initialize: function(containerName) {
			JParty.superclass.prototype.initialize.call(this, containerName);
			
			var stage = new Stage("WEB-INF/image/chessboard.jpg");
			
			Runtime.stage = stage;
			
			this.initSquare(stage);
			
			this.appendChild(stage);
			
		},
		
		/**
		 * 初始化棋格
		 * 
		 * @param stage 舞台
		 */
		initSquare: function(stage) {
			
			var squares = Params.Squares;
			
			for (var index = 0; index < squares.length; index++) {
				
				stage.appendChild(new Square(squares[index][0],
											 squares[index][1],
											 squares[index][2],
											 squares[index][3],
											 squares[index][4]));
			}
			stage.appendChild(new Piece(0, 0, 40, Color.BLUE, Role.TERRORIST));
			stage.appendChild(new Piece(2, 0, 1, Color.BLUE, Role.TERRORIST));
			stage.appendChild(new Piece(-2, 0, 35, Color.BLUE, Role.TERRORIST));
			stage.appendChild(new Piece(2, 2, 38, Color.BLUE, Role.TERRORIST));
			stage.appendChild(new Piece(2, -2, 39, Color.BLUE, Role.TERRORIST));
			stage.appendChild(new Piece(3, 0, 37, Color.ORANGE, Role.POLICE));
		}
	});
	
})();