var Ball = (function () {
    function Ball(colour, num) {
        this.colour = colour;
        this.num = num;
        this.active = true;
        this.chainCount = 1;
        this.inLine = false;
    }
    Ball.prototype.setPos = function (row, column) {
        this.row = row;
        this.column = column;
    };
    Ball.getAnimFrame = function getAnimFrame(colour, num) {
        return colour * GameState.maxNumbers + num;
    };
    return Ball;
})();
///<reference path='Ball.ts'/>
var GameState = (function () {
    function GameState() {
    }
    GameState.numColours = 5;
    GameState.numNumbers = 9;
    GameState.maxNumbers = 9;
    GameState.maxColours = 5;
    GameState.numRows = 12;
    GameState.numColumns = 22;
    GameState.getInstance = function getInstance() {
        if(!GameState._instance) {
            GameState._instance = new GameState();
        }
        return GameState._instance;
    };
    return GameState;
})();
///<reference path='../model/GameState.ts'/>
///<reference path='../model/Ball.ts'/>
var engine;
(function (engine) {
    var GameEngine = (function () {
        function GameEngine() {
        }
        GameEngine.initGame = function initGame(gameState) {
            gameState.balls = [];
            gameState.grid = [];
            gameState.amountOfColours = [];
            for(var i = 0; i < GameState.numColours; i++) {
                gameState.amountOfColours[i] = 0;
            }
            for(i = 0; i < GameState.numRows; i++) {
                gameState.grid[i] = [];
                for(var j = 0; j < GameState.numColumns; j++) {
                    if(i % 2 == j % 2) {
                        GameEngine.makeBall(gameState, j, i, Math.floor(Math.random() * GameState.numNumbers), Math.floor(Math.random() * GameState.numColours));
                    }
                }
            }
            gameState.count = gameState.score = 0;
            gameState.energyDecay = 2;
            gameState.checkBallsInt = -1;
            gameState.energy = gameState.maxEnergy = 4000;
            gameState.ended = false;
            gameState.lastTick = new Date().getTime();
        };
        GameEngine.makeBall = function makeBall(gameState, column, row, num, colour) {
            gameState.amountOfColours[colour]++;
            if(Math.random() > 0.98) {
                colour = GameState.numColours;
                num = 0;
            }
            var newBall = new Ball(colour, num);
            newBall.setPos(row, column);
            gameState.balls.push(newBall);
            gameState.grid[row][column] = newBall;
        };
        GameEngine.checkBallDraw = function checkBallDraw(ballPos) {
            var gameState = GameState.getInstance();
            var ball = gameState.grid[ballPos.y][ballPos.x];
            if(!gameState.chain) {
                gameState.chain = [];
                gameState.chain.push(ball);
                ball.inLine = true;
                return true;
            } else if(!ball.inLine) {
                var curBall = gameState.chain[gameState.chain.length - 1];
                if(((Math.abs(ball.num - curBall.num) == 1 || Math.abs(ball.num - curBall.num) == (GameState.numNumbers - 1) || ball.colour == GameState.maxColours || curBall.colour == GameState.maxColours) && Math.abs(ball.column - curBall.column) + Math.abs(ball.row - curBall.row) == 2)) {
                    ball.inLine = true;
                    gameState.chain.push(ball);
                    return true;
                } else {
                    return false;
                }
            }
            return false;
        };
        GameEngine.endDraw = function endDraw(effects) {
            var gameState = GameState.getInstance();
            for(var i = 0; i < gameState.balls.length; i++) {
                gameState.balls[i].checked = false;
            }
            var clickedChain = GameEngine.checkBall(gameState.chain[gameState.chain.length - 1], gameState);
            var ballsChanged = false;
            gameState.clickScore = gameState.numBallDestroyed = 0;
            gameState.ballsPos = new model.LightPoint(0, 0);
            if(gameState.chain.length > 1) {
                //now get othe chains in line
                var chainsA = [];
                var mult = gameState.chain.length / 3;
                for(i = 0; i < gameState.chain.length; i++) {
                    gameState.chain[i].chainCount *= (gameState.chain.length);
                    if(!gameState.chain[i].checked) {
                        var bA = GameEngine.checkBall(gameState.chain[i], gameState);
                        for(var j = 0; j < bA.length; j++) {
                            bA[j].chainCount *= (bA.length);
                            bA[j].chainCount *= mult;
                        }
                        chainsA = chainsA.concat(bA);
                    }
                }
                for(i = 0; i < clickedChain.length; i++) {
                    clickedChain[i].chainCount *= (clickedChain.length);
                    clickedChain[i].chainCount *= mult;
                }
                var cL = (gameState.chain.length * 1) - 1;
                for(i = 0; i < gameState.chain.length; i++) {
                    GameEngine.removeBall(gameState.chain[i], cL - (i * 1), gameState, effects);
                }
                for(i = 0; i < clickedChain.length; i++) {
                    GameEngine.removeBall(clickedChain[i], cL, gameState, effects);
                }
                for(i = 0; i < chainsA.length; i++) {
                    GameEngine.removeBall(chainsA[i], cL, gameState, effects);
                }
                ballsChanged = true;
                gameState.checkBallsInt = gameState.count + 2 + (gameState.chain.length);
            } else if(clickedChain.length > 2) {
                for(var i = 0; i < gameState.chain.length; i++) {
                    gameState.chain[i].inLine = false;
                }
                for(var i = 0; i < clickedChain.length; i++) {
                    clickedChain[i].chainCount *= (clickedChain.length);
                    GameEngine.removeBall(clickedChain[i], 0, gameState, effects);
                }
                ballsChanged = true;
                gameState.checkBallsInt = gameState.count + 5;
            } else {
                for(i = 0; i < gameState.balls.length; i++) {
                    gameState.balls[i].inLine = gameState.balls[i].checked = false;
                }
            }
            delete gameState.chain;
            return ballsChanged;
        };
        GameEngine.removeBall = function removeBall(ball, delay, gameState, effects) {
            //remove the ball from arrays
            if(!gameState.grid[ball.row][ball.column]) {
                return;
            }
            delete gameState.grid[ball.row][ball.column];
            gameState.balls.splice(gameState.balls.indexOf(ball), 1);
            gameState.amountOfColours[ball.colour]--;
            //values for score + score display
            gameState.clickScore += Math.floor(10 * ball.chainCount);
            gameState.numBallDestroyed++;
            gameState.ballsPos.x += ball.column * view.GameView.halfBallSize;
            gameState.ballsPos.y += ball.row * view.GameView.rowSize;
            effects.addBallEx(ball.column * view.GameView.halfBallSize, ball.row * view.GameView.rowSize);
            if(!delay) {
                delay = 0;
            }
            gameState.energy += Math.floor(ball.chainCount * 2);
            if(gameState.energy >= gameState.maxEnergy) {
                //showScore(Math.ceil(gameState.energy - gameState.maxEnergy));
                gameState.energy = gameState.maxEnergy;
            }
        };
        GameEngine.checkBall = function checkBall(b, gameState) {
            b.checked = true;
            var rA = [
                b
            ];
            var cA = [];
            if(b.row - 1 >= 0) {
                if(b.column + 1 < GameState.numColumns) {
                    cA.push(gameState.grid[b.row - 1][b.column + 1]);
                }
                if(b.column - 1 >= 0) {
                    cA.push(gameState.grid[b.row - 1][b.column - 1]);
                }
            }
            if(b.column + 2 < GameState.numColumns) {
                cA.push(gameState.grid[b.row][b.column + 2]);
            }
            if(b.column - 2 >= 0) {
                cA.push(gameState.grid[b.row][b.column - 2]);
            }
            if(b.row + 1 < GameState.numRows) {
                if(b.column + 1 < GameState.numColumns) {
                    cA.push(gameState.grid[b.row + 1][b.column + 1]);
                }
                if(b.column - 1 >= 0) {
                    cA.push(gameState.grid[b.row + 1][b.column - 1]);
                }
            }
            for(var i = 0; i < cA.length; i++) {
                if(cA[i] != undefined && cA[i].colour == b.colour && !cA[i].checked) {
                    var cbA = GameEngine.checkBall(cA[i], gameState);
                    rA = rA.concat(cbA);
                }
            }
            return rA;
        };
        GameEngine.checkBalls = function checkBalls(gameState, effects) {
            var ballsChanged = false;
            for(var i = 0; i < gameState.balls.length; i++) {
                gameState.balls[i].checked = false;
            }
            gameState.resolveNow = [];
            gameState.offGridBalls = [];
            for(i = GameState.numRows - 1; i >= 0; i--) {
                if(Math.random() > 0.5) {
                    for(var j = 0; j < GameState.numColumns; j++) {
                        if(gameState.grid[i][j] && !gameState.grid[i][j].checked) {
                            if(GameEngine.checkPos(gameState.grid[i][j], gameState, false)) {
                                ballsChanged = true;
                            }
                        }
                    }
                } else {
                    for(j = GameState.numColumns - 1; j >= 0; j--) {
                        if(gameState.grid[i][j] && !gameState.grid[i][j].checked) {
                            if(GameEngine.checkPos(gameState.grid[i][j], gameState, false)) {
                                ballsChanged = true;
                            }
                        }
                    }
                }
            }
            for(i = 0; i < gameState.resolveNow.length; i++) {
                GameEngine.checkPos(gameState.resolveNow[i], gameState, true);
            }
            //quick hack, but shouldn't matt
            //for (i = 1; i < GameState.numColumns; i += 2) {
            //    if (gameState.grid[0][i]) {
            //        ballsChanged = true;
            //    }
            //}
            for(i = 0; i < GameState.numColumns; i += 2) {
                if(!gameState.grid[0][i]) {
                    GameEngine.makeBall(gameState, i, 0, Math.floor(Math.random() * GameState.numNumbers), Math.floor(Math.random() * GameState.numColours));
                    ballsChanged = true;
                }
            }
            if(ballsChanged) {
                gameState.checkBallsInt = gameState.count + 2;
                //ballCheckInt=setInterval( this,"checkBalls", 50);
                            } else {
                if(gameState.clickScore > 0) {
                    effects.addScore(gameState.ballsPos.x / gameState.numBallDestroyed, gameState.ballsPos.y / gameState.numBallDestroyed, gameState.clickScore);
                    gameState.score += gameState.clickScore;
                    view.BallSounds.getInstance().playRun(6 - Math.min(Math.floor(gameState.clickScore / 1500), 6));
                    // BestChain.checkChain(gameState.clickScore);
                                    }
            }
            return ballsChanged;
            //drawBalls();
                    };
        GameEngine.checkPos = function checkPos(ball, gameState, justFallen) {
            ball.checked = true;
            var rowBelowN = ball.row + 1;
            if(rowBelowN < GameState.numRows) {
                var rowBelow = gameState.grid[rowBelowN];
            }
            var currentRow = gameState.grid[ball.row];
            var fallen = false;
            var rand = Math.random();
            var fallenType = "";
            var checkPosAgain = false;
            if(rowBelowN == GameState.numRows) {
                //need to check if everything aligns
                if(ball.column % 2 != ball.row % 2) {
                    // needs additional stuff in case of offset reversal
                    delete currentRow[ball.column];
                    if(ball.column == 0 || currentRow[ball.column - 1]) {
                        rand = 0;
                    } else if(ball.column == GameState.numColumns - 1 || currentRow[ball.column + 1]) {
                        rand = 1;
                    }
                    if(rand < 0.5) {
                        ball.column++;
                    } else {
                        ball.column--;
                    }
                    fallen = true;
                    fallenType = "shift";
                }
            } else if(!rowBelow[ball.column] && !rowBelow[ball.column - 1] && !rowBelow[ball.column + 1]) {
                if(!justFallen) {
                    fallen = true;
                    delete currentRow[ball.column];
                    ball.row++;
                    checkPosAgain = true;
                    fallenType = "directDown";
                }
            } else if(rowBelow[ball.column]) {
                fallen = true;
                var madeDec = false;
                var canGoLeft = (!currentRow[ball.column - 1] && !currentRow[ball.column - 2]);
                var canGoRight = (!currentRow[ball.column + 1] && !currentRow[ball.column + 2]);
                delete currentRow[ball.column];
                if(rand > 0.5 && !canGoLeft && canGoRight) {
                    rand = 0;
                }
                if(rand < 0.5 && !canGoRight && canGoLeft) {
                    rand = 1;
                }
                if(ball.column == 0) {
                    rand = 0;
                } else if(ball.column == GameState.numColumns - 1) {
                    rand = 1;
                }
                if(rand < 0.5 && canGoRight) {
                    madeDec = true;
                    ball.column++;
                } else if(canGoLeft) {
                    madeDec = true;
                    ball.column--;
                } else {
                    fallen = false;
                    if(!justFallen) {
                        gameState.resolveNow.push(ball);
                    }
                }
                currentRow[ball.column] = ball;
                fallenType = "ballBelow";
            } else if(!rowBelow[ball.column + 1] && !rowBelow[ball.column + 2]) {
                if(ball.column < GameState.numColumns - 1) {
                    fallen = true;
                    delete currentRow[ball.column];
                    ball.column++;
                    ball.row++;
                    fallenType = "fallRight";
                }
            } else if(!rowBelow[ball.column - 1] && !rowBelow[ball.column]) {
                if(ball.column > 0) {
                    fallen = true;
                    delete currentRow[ball.column];
                    ball.column--;
                    ball.row++;
                    fallenType = "fallLeft";
                }
            }
            gameState.grid[ball.row][ball.column] = ball;
            if(checkPosAgain) {
                GameEngine.checkPos(ball, gameState, true);
            }
            return fallen;
        };
        return GameEngine;
    })();
    engine.GameEngine = GameEngine;    
})(engine || (engine = {}));
// Module
var model;
(function (model) {
    // Class
    var LightPoint = (function () {
        // Constructor
        function LightPoint(x, y) {
            this.x = x;
            this.y = y;
            if(!x) {
                x = 0;
            }
            if(!y) {
                y = 0;
            }
        }
        LightPoint.prototype.getDist = // Instance member
        function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        LightPoint.origin = new LightPoint(0, 0);
        LightPoint.prototype.clone = function () {
            var point = new LightPoint(this.x, this.y);
            return point;
        };
        return LightPoint;
    })();
    model.LightPoint = LightPoint;    
})(model || (model = {}));
var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path='../../definitions/easeljs/easeljs.d.ts'/>
var view;
(function (view) {
    var Effects = (function (_super) {
        __extends(Effects, _super);
        function Effects() {
                _super.call(this);
            this.scoresA = [];
            this.ballsExA = [];
            this.ballsExContainer = new createjs.Container();
            this.addChild(this.ballsExContainer);
            if(!Effects.ballsExSS) {
                var data = {
                    images: [
                        Main.getImagePath("ballsExploding.png")
                    ],
                    frames: {
                        width: 85,
                        height: 83,
                        regX: 18,
                        regY: 18
                    },
                    animations: {
                    }
                };
                Effects.ballsExSS = new createjs.SpriteSheet(data);
            }
        }
        Effects.prototype.addScore = function (tx, ty, score) {
            var t = new ScoreText(score);
            t.x = Math.min(tx, 440 - t.width);
            t.y = ty;
            this.addChild(t);
            this.scoresA.push(t);
        };
        Effects.prototype.addBallEx = function (x, y) {
            var ball = new createjs.BitmapAnimation(Effects.ballsExSS);
            this.ballsExContainer.addChild(ball);
            this.ballsExA.push(ball);
            ball.x = x;
            ball.y = y;
            ball.gotoAndStop(1);
        };
        Effects.prototype.update = function () {
            for(var i = 0; i < this.scoresA.length; i++) {
                if(this.scoresA[i].advance()) {
                    this.removeChild(this.scoresA[i]);
                    this.scoresA.splice(i, 1);
                    i--;
                }
            }
            for(var i = 0; i < this.ballsExA.length; i++) {
                if(this.ballsExA[i].currentFrame == 10) {
                    this.removeChild(this.ballsExA[i]);
                    this.ballsExA.splice(i, 1);
                    i--;
                } else {
                    this.ballsExA[i].advance();
                }
            }
        };
        Effects.prototype.cleanUp = function () {
        };
        return Effects;
    })(createjs.Container);
    view.Effects = Effects;    
    var ScoreText = (function (_super) {
        __extends(ScoreText, _super);
        function ScoreText(score) {
                _super.call(this);
            if(!ScoreText.scoreTextSS) {
                var data = {
                    images: [
                        Main.getImagePath("numbers.png")
                    ],
                    frames: {
                        width: 60,
                        height: 75,
                        regX: 0,
                        regY: 0
                    },
                    animations: {
                    }
                };
                ScoreText.scoreTextSS = new createjs.SpriteSheet(data);
            }
            var size = Math.floor(40 + score / 200);
            var str = score.toString();
            for(var i = 0; i < str.length; i++) {
                var letter = new createjs.BitmapAnimation(ScoreText.scoreTextSS);
                letter.gotoAndStop(Number(str.charAt(i)));
                letter.x = 60 * i;
                this.addChild(letter);
            }
            this.scaleX = this.scaleY = Math.min(1, size / 100);
            this.width = 60 * i * this.scaleX;
            this.delCount = 00 - (score / 1000);
        }
        ScoreText.prototype.advance = function () {
            if(this.delCount++ > 30) {
                return true;
            } else {
                this.y--;
                return false;
            }
        };
        return ScoreText;
    })(createjs.Container);
    view.ScoreText = ScoreText;    
})(view || (view = {}));
///<reference path='../../definitions/easeljs/easeljs.d.ts'/>
// Module
var view;
(function (view) {
    var Ui = (function (_super) {
        __extends(Ui, _super);
        function Ui() {
                _super.call(this);
            this.timeBar = new TimeBar();
            this.addChild(this.timeBar);
            this.timeBar.x = 10;
            this.scoreHolder = new createjs.Container();
            this.addChild(this.scoreHolder);
            this.scoreHolder.x = 240;
            this.score0 = new createjs.Text("0", "bold 36px " + Main.MAIN_FONT, "#0");
            this.score1 = new createjs.Text("0", "bold 36px " + Main.MAIN_FONT, "#FFFFFF");
            this.score1.outline = true;
            this.scoreHolder.addChild(this.score0);
            this.scoreHolder.addChild(this.score1);
            this.y = 460;
            this.timeBar.y = this.scoreHolder.y = 40;
            var data = {
                images: [
                    Main.getImagePath("9BallChalk.png")
                ],
                frames: {
                    width: 47,
                    height: 47,
                    regX: 0,
                    regY: 0
                },
                animations: {
                    pauseOut: [
                        0
                    ],
                    pauseDown: [
                        1
                    ],
                    playOut: [
                        2
                    ],
                    playDown: [
                        3
                    ],
                    muteOut: [
                        4
                    ],
                    muteDown: [
                        5
                    ],
                    unmuteOut: [
                        6
                    ],
                    unmuteDown: [
                        7
                    ]
                }
            };
            this.buttonHelpers = [];
            var spriteSheet = new createjs.SpriteSheet(data);
            this.pauseButton = this.getChalkButton(spriteSheet, "pauseOut", "pauseDown", "pauseDown", 380);
            this.playButton = this.getChalkButton(spriteSheet, "playOut", "playDown", "playDown", 380);
            this.playButton.visible = false;
            this.muteButton = this.getChalkButton(spriteSheet, "muteOut", "muteDown", "muteDown", 430);
            this.unmuteButton = this.getChalkButton(spriteSheet, "unmuteOut", "unmuteDown", "unmuteDown", 430);
            this.buttonClick = new Signal();
        }
        Ui.prototype.getChalkButton = function (spriteSheet, upState, overState, downState, x) {
            var button = new createjs.BitmapAnimation(spriteSheet);
            var helper = new createjs.ButtonHelper(button, upState, overState, downState, false, null, null);
            this.buttonHelpers.push(helper);
            this.addChild(button);
            button.x = x;
            button.y = 40;
            button.addEventListener("click", this.clickButton.bind(this));
            return button;
        };
        Ui.prototype.comeIn = function () {
            var tweenTime = 200;
            createjs.Tween.get(this.timeBar).wait(100).to({
                y: 0
            }, tweenTime, createjs.Ease.backOut);
            createjs.Tween.get(this.scoreHolder).wait(200).to({
                y: 1
            }, tweenTime, createjs.Ease.backOut);
            createjs.Tween.get(this.pauseButton).wait(300).to({
                y: -5
            }, tweenTime, createjs.Ease.backOut);
            this.playButton.y = -5;
            var soundButton = view.BallSounds.getInstance().muted ? this.unmuteButton : this.muteButton;
            createjs.Tween.get(soundButton).wait(400).to({
                y: -5
            }, tweenTime, createjs.Ease.backOut);
            var otherSoundButton = !view.BallSounds.getInstance().muted ? this.unmuteButton : this.muteButton;
            otherSoundButton.y = -5;
            otherSoundButton.visible = false;
            if(!view.BallSounds.getInstance().soundLoaded) {
                soundButton.alpha = otherSoundButton.alpha = 0.5;
            }
        };
        Ui.prototype.removeButtons = function () {
            this.killButton(this.pauseButton);
            this.killButton(this.playButton);
            this.killButton(this.muteButton);
            this.killButton(this.unmuteButton);
            for(var i = 0; i < this.buttonHelpers.length; i++) {
                this.buttonHelpers[i].setEnabled(false);
            }
            createjs.Tween.get(this.pauseButton).to({
                y: 40
            }, 200, createjs.Ease.backIn);
            createjs.Tween.get(this.playButton).to({
                y: 40
            }, 200, createjs.Ease.backIn);
            var soundButton = view.BallSounds.getInstance().muted ? this.unmuteButton : this.muteButton;
            createjs.Tween.get(soundButton).wait(100).to({
                y: 40
            }, 200, createjs.Ease.backIn);
        };
        Ui.prototype.killButton = function (button) {
            button.removeAllEventListeners("click");
        };
        Ui.prototype.goOut = function () {
            var tweenTime = 200;
            createjs.Tween.get(this.timeBar).wait(100).to({
                y: 40
            }, tweenTime, createjs.Ease.backIn);
            createjs.Tween.get(this.scoreHolder).wait(200).to({
                y: 42
            }, tweenTime, createjs.Ease.backIn);
            this.buttonClick.dispose();
        };
        Ui.prototype.setScore = function (score) {
            this.score0.text = this.score1.text = score;
        };
        Ui.prototype.clickButton = function (event) {
            switch(event.target) {
                case this.pauseButton:
                    this.buttonClick.dispatch("pause");
                    break;
                case this.playButton:
                    this.buttonClick.dispatch("play");
                    break;
                case this.muteButton:
                    this.setMute();
                    break;
                case this.unmuteButton:
                    this.setMute();
                    break;
            }
        };
        Ui.prototype.setPausePlay = function (paused) {
            this.pauseButton.visible = !paused;
            this.playButton.visible = paused;
        };
        Ui.prototype.setMute = function () {
            view.BallSounds.getInstance().toggleMute();
            this.muteButton.visible = !view.BallSounds.getInstance().muted;
            this.unmuteButton.visible = view.BallSounds.getInstance().muted;
        };
        Ui.prototype.setSoundLoaded = function () {
            this.muteButton.alpha = this.unmuteButton.alpha = 1;
        };
        return Ui;
    })(createjs.Container);
    view.Ui = Ui;    
    // Class
    var TimeBar = (function (_super) {
        __extends(TimeBar, _super);
        // Constructor
        function TimeBar() {
                _super.call(this);
            var data = {
                images: [
                    Main.getImagePath("timeBar.png")
                ],
                frames: {
                    width: 207,
                    height: 39,
                    regX: 0,
                    regY: 0
                },
                animations: {
                }
            };
            var spriteSheet = new createjs.SpriteSheet(data);
            this.bg = new createjs.BitmapAnimation(spriteSheet);
            this.bg.gotoAndStop(0);
            this.addChild(this.bg);
            this.timeLeft = new createjs.BitmapAnimation(spriteSheet);
            this.timeLeft.gotoAndStop(1);
            this.addChild(this.timeLeft);
            this.timeMask = new createjs.Shape();
            this.timeMask.graphics.beginStroke("#FF0").setStrokeStyle(5).drawRect(0, 0, 195, 25).closePath();
            this.timeMask.x = 4;
            this.timeMask.y = 6;
            this.timeLeft.mask = this.timeMask;
        }
        TimeBar.prototype.update = function (scale) {
            this.timeMask.scaleX = Math.max(0.0001, scale);
        };
        return TimeBar;
    })(createjs.Container);
    view.TimeBar = TimeBar;    
})(view || (view = {}));
/// <reference path="Signal.ts" />
/*
*	@desc   	An object that represents a binding between a Signal and a listener function.
*               Released under the MIT license
*				http://millermedeiros.github.com/js-signals/
*
*	@version	1.0 - 7th March 2013
*
*	@author 	Richard Davey, TypeScript conversion
*	@author		Miller Medeiros, JS Signals
*	@author		Robert Penner, AS Signals
*
*	@url		http://www.kiwijs.org
*
*/
var SignalBinding = (function () {
    /**
    * Object that represents a binding between a Signal and a listener function.
    * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
    * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
    * @author Miller Medeiros
    * @constructor
    * @internal
    * @name SignalBinding
    * @param {Signal} signal Reference to Signal object that listener is currently bound to.
    * @param {Function} listener Handler function bound to the signal.
    * @param {boolean} isOnce If binding should be executed just once.
    * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
    * @param {Number} [priority] The priority level of the event listener. (default = 0).
    */
    function SignalBinding(signal, listener, isOnce, listenerContext, priority) {
        if (typeof priority === "undefined") { priority = 0; }
        /**
        * If binding is active and should be executed.
        * @type boolean
        */
        this.active = true;
        /**
        * Default parameters passed to listener during `Signal.dispatch` and `SignalBinding.execute`. (curried parameters)
        * @type Array|null
        */
        this.params = null;
        this._listener = listener;
        this._isOnce = isOnce;
        this.context = listenerContext;
        this._signal = signal;
        this.priority = priority || 0;
    }
    SignalBinding.prototype.execute = /**
    * Call listener passing arbitrary parameters.
    * <p>If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch.</p>
    * @param {Array} [paramsArr] Array of parameters that should be passed to the listener
    * @return {*} Value returned by the listener.
    */
    function (paramsArr) {
        var handlerReturn;
        var params;
        if(this.active && !!this._listener) {
            params = this.params ? this.params.concat(paramsArr) : paramsArr;
            handlerReturn = this._listener.apply(this.context, params);
            if(this._isOnce) {
                this.detach();
            }
        }
        return handlerReturn;
    };
    SignalBinding.prototype.detach = /**
    * Detach binding from signal.
    * - alias to: mySignal.remove(myBinding.getListener());
    * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached.
    */
    function () {
        return this.isBound() ? this._signal.remove(this._listener, this.context) : null;
    };
    SignalBinding.prototype.isBound = /**
    * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
    */
    function () {
        return (!!this._signal && !!this._listener);
    };
    SignalBinding.prototype.isOnce = /**
    * @return {boolean} If SignalBinding will only be executed once.
    */
    function () {
        return this._isOnce;
    };
    SignalBinding.prototype.getListener = /**
    * @return {Function} Handler function bound to the signal.
    */
    function () {
        return this._listener;
    };
    SignalBinding.prototype.getSignal = /**
    * @return {Signal} Signal that listener is currently bound to.
    */
    function () {
        return this._signal;
    };
    SignalBinding.prototype._destroy = /**
    * Delete instance properties
    * @private
    */
    function () {
        delete this._signal;
        delete this._listener;
        delete this.context;
    };
    SignalBinding.prototype.toString = /**
    * @return {string} String representation of the object.
    */
    function () {
        return '[SignalBinding isOnce:' + this._isOnce + ', isBound:' + this.isBound() + ', active:' + this.active + ']';
    };
    return SignalBinding;
})();
/// <reference path="SignalBinding.ts" />
/**
*	@desc       A TypeScript conversion of JS Signals by Miller Medeiros
*               Released under the MIT license
*				http://millermedeiros.github.com/js-signals/
*
*	@version	1.0 - 7th March 2013
*
*	@author 	Richard Davey, TypeScript conversion
*	@author		Miller Medeiros, JS Signals
*	@author		Robert Penner, AS Signals
*
*	@url		http://www.photonstorm.com
*/
/**
* Custom event broadcaster
* <br />- inspired by Robert Penner's AS3 Signals.
* @name Signal
* @author Miller Medeiros
* @constructor
*/
var Signal = (function () {
    function Signal() {
        /**
        * @property _bindings
        * @type Array
        * @private
        */
        this._bindings = [];
        /**
        * @property _prevParams
        * @type Any
        * @private
        */
        this._prevParams = null;
        /**
        * If Signal should keep record of previously dispatched parameters and
        * automatically execute listener during `add()`/`addOnce()` if Signal was
        * already dispatched before.
        * @type boolean
        */
        this.memorize = false;
        /**
        * @type boolean
        * @private
        */
        this._shouldPropagate = true;
        /**
        * If Signal is active and should broadcast events.
        * <p><strong>IMPORTANT:</strong> Setting this property during a dispatch will only affect the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.</p>
        * @type boolean
        */
        this.active = true;
    }
    Signal.VERSION = '1.0.0';
    Signal.prototype.validateListener = /**
    * @method validateListener
    * @param {Any} listener
    * @param {Any} fnName
    */
    function (listener, fnName) {
        if(typeof listener !== 'function') {
            throw new Error('listener is a required param of {fn}() and should be a Function.'.replace('{fn}', fnName));
        }
    };
    Signal.prototype._registerListener = /**
    * @param {Function} listener
    * @param {boolean} isOnce
    * @param {Object} [listenerContext]
    * @param {Number} [priority]
    * @return {SignalBinding}
    * @private
    */
    function (listener, isOnce, listenerContext, priority) {
        var prevIndex = this._indexOfListener(listener, listenerContext);
        var binding;
        if(prevIndex !== -1) {
            binding = this._bindings[prevIndex];
            if(binding.isOnce() !== isOnce) {
                throw new Error('You cannot add' + (isOnce ? '' : 'Once') + '() then add' + (!isOnce ? '' : 'Once') + '() the same listener without removing the relationship first.');
            }
        } else {
            binding = new SignalBinding(this, listener, isOnce, listenerContext, priority);
            this._addBinding(binding);
        }
        if(this.memorize && this._prevParams) {
            binding.execute(this._prevParams);
        }
        return binding;
    };
    Signal.prototype._addBinding = /**
    * @method _addBinding
    * @param {SignalBinding} binding
    * @private
    */
    function (binding) {
        //simplified insertion sort
        var n = this._bindings.length;
        do {
            --n;
        }while(this._bindings[n] && binding.priority <= this._bindings[n].priority);
        this._bindings.splice(n + 1, 0, binding);
    };
    Signal.prototype._indexOfListener = /**
    * @method _indexOfListener
    * @param {Function} listener
    * @return {number}
    * @private
    */
    function (listener, context) {
        var n = this._bindings.length;
        var cur;
        while(n--) {
            cur = this._bindings[n];
            if(cur.getListener() === listener && cur.context === context) {
                return n;
            }
        }
        return -1;
    };
    Signal.prototype.has = /**
    * Check if listener was attached to Signal.
    * @param {Function} listener
    * @param {Object} [context]
    * @return {boolean} if Signal has the specified listener.
    */
    function (listener, context) {
        if (typeof context === "undefined") { context = null; }
        return this._indexOfListener(listener, context) !== -1;
    };
    Signal.prototype.add = /**
    * Add a listener to the signal.
    * @param {Function} listener Signal handler function.
    * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
    * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
    * @return {SignalBinding} An Object representing the binding between the Signal and listener.
    */
    function (listener, listenerContext, priority) {
        if (typeof listenerContext === "undefined") { listenerContext = null; }
        if (typeof priority === "undefined") { priority = 0; }
        this.validateListener(listener, 'add');
        return this._registerListener(listener, false, listenerContext, priority);
    };
    Signal.prototype.addOnce = /**
    * Add listener to the signal that should be removed after first execution (will be executed only once).
    * @param {Function} listener Signal handler function.
    * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
    * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
    * @return {SignalBinding} An Object representing the binding between the Signal and listener.
    */
    function (listener, listenerContext, priority) {
        if (typeof listenerContext === "undefined") { listenerContext = null; }
        if (typeof priority === "undefined") { priority = 0; }
        this.validateListener(listener, 'addOnce');
        return this._registerListener(listener, true, listenerContext, priority);
    };
    Signal.prototype.remove = /**
    * Remove a single listener from the dispatch queue.
    * @param {Function} listener Handler function that should be removed.
    * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
    * @return {Function} Listener handler function.
    */
    function (listener, context) {
        if (typeof context === "undefined") { context = null; }
        this.validateListener(listener, 'remove');
        var i = this._indexOfListener(listener, context);
        if(i !== -1) {
            this._bindings[i]._destroy()//no reason to a SignalBinding exist if it isn't attached to a signal
            ;
            this._bindings.splice(i, 1);
        }
        return listener;
    };
    Signal.prototype.removeAll = /**
    * Remove all listeners from the Signal.
    */
    function () {
        var n = this._bindings.length;
        while(n--) {
            this._bindings[n]._destroy();
        }
        this._bindings.length = 0;
    };
    Signal.prototype.getNumListeners = /**
    * @return {number} Number of listeners attached to the Signal.
    */
    function () {
        return this._bindings.length;
    };
    Signal.prototype.halt = /**
    * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
    * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
    * @see Signal.prototype.disable
    */
    function () {
        this._shouldPropagate = false;
    };
    Signal.prototype.dispatch = /**
    * Dispatch/Broadcast Signal to all listeners added to the queue.
    * @param {...*} [params] Parameters that should be passed to each handler.
    */
    function () {
        var paramsArr = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            paramsArr[_i] = arguments[_i + 0];
        }
        if(!this.active) {
            return;
        }
        var n = this._bindings.length;
        var bindings;
        if(this.memorize) {
            this._prevParams = paramsArr;
        }
        if(!n) {
            //should come after memorize
            return;
        }
        bindings = this._bindings.slice(0)//clone array in case add/remove items during dispatch
        ;
        this._shouldPropagate = true//in case `halt` was called before dispatch or during the previous dispatch.
        ;
        //execute all callbacks until end of the list or until a callback returns `false` or stops propagation
        //reverse loop since listeners with higher priority will be added at the end of the list
        do {
            n--;
        }while(bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== false);
    };
    Signal.prototype.forget = /**
    * Forget memorized arguments.
    * @see Signal.memorize
    */
    function () {
        this._prevParams = null;
    };
    Signal.prototype.dispose = /**
    * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
    * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
    */
    function () {
        this.removeAll();
        delete this._bindings;
        delete this._prevParams;
    };
    Signal.prototype.toString = /**
    * @return {string} String representation of the object.
    */
    function () {
        return '[Signal active:' + this.active + ' numListeners:' + this.getNumListeners() + ']';
    };
    return Signal;
})();
///<reference path='../../definitions/easeljs/easeljs.d.ts'/>
///<reference path='../../app.ts'/>
// Module
var view;
(function (view) {
    // Class
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // Constructor
        function Instructions() {
                _super.call(this);
            this.title = new createjs.Text("游戏介绍", "bold 32px " + Main.MAIN_FONT, "#FFFFFF");
            this.copy = new createjs.Text("fdsfd \n fsdfsf fdsfs fds", "bold 18px " + Main.MAIN_FONT, "#FFFFFF");
            this.copy.y = 40;
            this.copy.lineWidth = 360;
            this.addChild(this.title);
            this.addChild(this.copy);
            this.balls = [];
            var data = {
                images: [
                    Main.getImagePath("balls.png")
                ],
                frames: {
                    width: 36,
                    height: 36,
                    regX: 0,
                    regY: 0
                },
                animations: {
                }
            };
            var spriteSheet = new createjs.SpriteSheet(data);
            this.addBall(spriteSheet, 54, 0);
            this.addBall(spriteSheet, 36, 32);
            this.addBall(spriteSheet, 72, 32);
            this.addBall(spriteSheet, 18, 65);
            this.addBall(spriteSheet, 54, 65);
            this.addBall(spriteSheet, 92, 65);
            this.addBall(spriteSheet, 0, 99);
            this.addBall(spriteSheet, 36, 99);
            this.addBall(spriteSheet, 72, 99);
            this.addBall(spriteSheet, 108, 99);
            this.nextButton = new view.TextButton("", "下一个");
            this.nextButton.x = 360 - this.nextButton.getWidth();
            this.nextButton.y = 300;
            this.addChild(this.nextButton);
            this.nextButton.pressSignal.add(this.pressNext.bind(this));
            this.drawShape0 = new createjs.Shape();
            this.addChild(this.drawShape0);
            this.drawShape1 = new createjs.Shape();
            this.addChild(this.drawShape1);
            this.pointer = new createjs.Shape();
            var g = this.pointer.graphics;
            g.setStrokeStyle(1).beginFill("#FFFFFF").beginStroke("#010101");
            g.moveTo(0, 0).lineTo(0, 16).lineTo(4, 13).lineTo(7, 18).lineTo(9, 17).lineTo(7, 12).lineTo(11, 12).lineTo(0, 0);
            g.endFill();
            this.addChild(this.pointer);
            this.instructionNum = 0;
            this.doInstructions0();
            this.endSignal = new Signal();
            this.x = 55;
            this.y = -500;
            createjs.Tween.get(this).to({
                y: 50
            }, 500, createjs.Ease.backOut);
        }
        Instructions.prototype.addBall = function (spriteSheet, x, y) {
            var ball = new createjs.BitmapAnimation(spriteSheet);
            this.addChild(ball);
            ball.x = x + 100;
            ball.y = y + 140;
            ball.gotoAndStop(2);
            this.balls.push(ball);
            return ball;
        };
        Instructions.prototype.pressNext = function () {
            console.log(this);
            this.instructionNum++;
            createjs.Tween.removeTweens(this.pointer);
            this.drawShape0.graphics.clear();
            this.drawShape1.graphics.clear();
            switch(this.instructionNum) {
                case 0:
                    this.doInstructions0();
                    break;
                case 1:
                    this.doInstructions1();
                    break;
                case 2:
                    this.doInstructions2();
                    break;
                default:
                    this.nextButton.cleanUp();
                    createjs.Tween.get(this).to({
                        y: 500
                    }, 500, createjs.Ease.backIn).call(this.endOut.bind(this));
                    break;
            }
        };
        Instructions.prototype.endOut = function () {
            this.endSignal.dispatch();
            this.endSignal.dispose();
        };
        Instructions.prototype.doInstructions0 = function () {
            this.copy.text = "点击3个彼此相邻的相同颜色的球将它们消除";
            this.balls[0].gotoAndStop(Ball.getAnimFrame(0, 3));
            this.balls[1].gotoAndStop(Ball.getAnimFrame(1, 1));
            this.balls[2].gotoAndStop(Ball.getAnimFrame(0, 6));
            this.balls[3].gotoAndStop(Ball.getAnimFrame(1, 5));
            this.balls[4].gotoAndStop(Ball.getAnimFrame(1, 8));
            this.balls[5].gotoAndStop(Ball.getAnimFrame(2, 0));
            this.balls[6].gotoAndStop(Ball.getAnimFrame(2, 3));
            this.balls[7].gotoAndStop(Ball.getAnimFrame(3, 4));
            this.balls[8].gotoAndStop(Ball.getAnimFrame(4, 2));
            this.balls[9].gotoAndStop(Ball.getAnimFrame(0, 7));
            this.instructionsAnim0_0();
        };
        Instructions.prototype.instructionsAnim0_0 = function () {
            this.pointer.x = 250;
            this.pointer.y = 140;
            for(var i = 0; i < this.balls.length; i++) {
                this.balls[i].visible = true;
            }
            createjs.Tween.get(this.pointer).wait(500).to({
                x: 157,
                y: 180
            }, 500).wait(100).to({
                scaleX: 0.9,
                scaleY: 0.9
            }, 50).wait(100).call(this.instructionsAnim0_1.bind(this));
        };
        Instructions.prototype.instructionsAnim0_1 = function () {
            this.pointer.scaleX = this.pointer.scaleY = 1;
            this.balls[1].visible = this.balls[3].visible = this.balls[4].visible = false;
            createjs.Tween.get(this.pointer).wait(2000).to({
                x: 250,
                y: 140
            }, 400).call(this.instructionsAnim0_0.bind(this));
        };
        Instructions.prototype.doInstructions1 = function () {
            this.copy.text = "按顺序将不同数字的球连接起来可以把它们全部都消除掉，从而得到更高的分数";
            this.balls[0].gotoAndStop(Ball.getAnimFrame(0, 4));
            this.balls[1].gotoAndStop(Ball.getAnimFrame(4, 3));
            this.balls[2].gotoAndStop(Ball.getAnimFrame(3, 4));
            this.balls[3].gotoAndStop(Ball.getAnimFrame(2, 8));
            this.balls[4].gotoAndStop(Ball.getAnimFrame(1, 2));
            this.balls[5].gotoAndStop(Ball.getAnimFrame(0, 7));
            this.balls[6].gotoAndStop(Ball.getAnimFrame(4, 3));
            this.balls[7].gotoAndStop(Ball.getAnimFrame(1, 1));
            this.balls[8].gotoAndStop(Ball.getAnimFrame(0, 0));
            this.balls[9].gotoAndStop(Ball.getAnimFrame(2, 3));
            this.instructionsAnim1_0();
        };
        Instructions.prototype.instructionsAnim1_0 = function () {
            this.drawShape0.graphics.clear().setStrokeStyle(3).beginStroke("#AAAADD").moveTo(194, 260);
            this.drawShape1.graphics.clear().setStrokeStyle(1).beginStroke("#FFFFFF").moveTo(194, 260);
            this.pointer.x = 250;
            this.pointer.y = 140;
            for(var i = 0; i < this.balls.length; i++) {
                this.balls[i].visible = true;
            }
            createjs.Tween.get(this.pointer).wait(500).to({
                x: 194,
                y: 260
            }, 500).wait(100).to({
                x: 150,
                y: 260
            }, 500).call(this.instructionsAnim1_1.bind(this));
        };
        Instructions.prototype.instructionsAnim1_1 = function () {
            this.drawShape0.graphics.lineTo(150, 260);
            this.drawShape1.graphics.lineTo(150, 260);
            createjs.Tween.get(this.pointer).wait(100).to({
                x: 170,
                y: 220
            }, 500).call(this.instructionsAnim1_2.bind(this));
        };
        Instructions.prototype.instructionsAnim1_2 = function () {
            this.drawShape0.graphics.lineTo(170, 220);
            this.drawShape1.graphics.lineTo(170, 220);
            createjs.Tween.get(this.pointer).wait(100).to({
                x: 150,
                y: 190
            }, 500).call(this.instructionsAnim1_3.bind(this));
        };
        Instructions.prototype.instructionsAnim1_3 = function () {
            this.drawShape0.graphics.lineTo(150, 190);
            this.drawShape1.graphics.lineTo(150, 190);
            createjs.Tween.get(this.pointer).wait(100).to({
                x: 190,
                y: 190
            }, 500).call(this.instructionsAnim1_4.bind(this));
        };
        Instructions.prototype.instructionsAnim1_4 = function () {
            this.drawShape0.graphics.lineTo(190, 190);
            this.drawShape1.graphics.lineTo(190, 190);
            createjs.Tween.get(this.pointer).wait(500).call(this.instructionsAnim1_5.bind(this));
        };
        Instructions.prototype.instructionsAnim1_5 = function () {
            this.drawShape0.graphics.clear();
            this.drawShape1.graphics.clear();
            this.balls[1].visible = this.balls[2].visible = this.balls[4].visible = this.balls[7].visible = this.balls[8].visible = false;
            createjs.Tween.get(this.pointer).wait(300).to({
                x: 250,
                y: 140
            }, 500).call(this.instructionsAnim1_0.bind(this));
        };
        Instructions.prototype.doInstructions2 = function () {
            this.copy.text = "白球可以替代从1-9的任何一个数字";
            this.balls[0].gotoAndStop(Ball.getAnimFrame(2, 1));
            this.balls[1].gotoAndStop(Ball.getAnimFrame(5, 0));
            this.balls[2].gotoAndStop(Ball.getAnimFrame(2, 4));
            this.balls[3].gotoAndStop(Ball.getAnimFrame(1, 6));
            this.balls[4].gotoAndStop(Ball.getAnimFrame(1, 1));
            this.balls[5].gotoAndStop(Ball.getAnimFrame(3, 7));
            this.balls[6].gotoAndStop(Ball.getAnimFrame(4, 5));
            this.balls[7].gotoAndStop(Ball.getAnimFrame(0, 0));
            this.balls[8].gotoAndStop(Ball.getAnimFrame(4, 8));
            this.balls[9].gotoAndStop(Ball.getAnimFrame(4, 8));
            this.nextButton.setText("开始游戏");
            this.instructionsAnim2_0();
        };
        Instructions.prototype.instructionsAnim2_0 = function () {
            this.drawShape0.graphics.clear().setStrokeStyle(3).beginStroke("#AAAADD").moveTo(194, 260);
            this.drawShape1.graphics.clear().setStrokeStyle(1).beginStroke("#FFFFFF").moveTo(194, 260);
            this.pointer.x = 250;
            this.pointer.y = 140;
            for(var i = 0; i < this.balls.length; i++) {
                this.balls[i].visible = true;
            }
            createjs.Tween.get(this.pointer).wait(500).to({
                x: 194,
                y: 260
            }, 500).wait(100).to({
                x: 150,
                y: 260
            }, 500).call(this.instructionsAnim2_1.bind(this));
        };
        Instructions.prototype.instructionsAnim2_1 = function () {
            this.drawShape0.graphics.lineTo(150, 260);
            this.drawShape1.graphics.lineTo(150, 260);
            createjs.Tween.get(this.pointer).wait(100).to({
                x: 170,
                y: 220
            }, 500).call(this.instructionsAnim2_2.bind(this));
        };
        Instructions.prototype.instructionsAnim2_2 = function () {
            this.drawShape0.graphics.lineTo(170, 220);
            this.drawShape1.graphics.lineTo(170, 220);
            createjs.Tween.get(this.pointer).wait(100).to({
                x: 150,
                y: 190
            }, 500).call(this.instructionsAnim2_3.bind(this));
        };
        Instructions.prototype.instructionsAnim2_3 = function () {
            this.drawShape0.graphics.lineTo(150, 190);
            this.drawShape1.graphics.lineTo(150, 190);
            createjs.Tween.get(this.pointer).wait(100).to({
                x: 190,
                y: 190
            }, 500).call(this.instructionsAnim2_4.bind(this));
        };
        Instructions.prototype.instructionsAnim2_4 = function () {
            this.drawShape0.graphics.lineTo(190, 190);
            this.drawShape1.graphics.lineTo(190, 190);
            createjs.Tween.get(this.pointer).wait(500).call(this.instructionsAnim2_5.bind(this));
        };
        Instructions.prototype.instructionsAnim2_5 = function () {
            this.drawShape0.graphics.clear();
            this.drawShape1.graphics.clear();
            this.balls[1].visible = this.balls[2].visible = this.balls[4].visible = this.balls[7].visible = this.balls[8].visible = false;
            createjs.Tween.get(this.pointer).wait(300).to({
                x: 250,
                y: 140
            }, 500).call(this.instructionsAnim2_0.bind(this));
        };
        return Instructions;
    })(createjs.Container);
    view.Instructions = Instructions;    
})(view || (view = {}));
///<reference path='../../definitions/easeljs/easeljs.d.ts'/>
///<reference path='../../definitions/tweenjs/tweenjs.d.ts'/>
///<reference path='Instructions.ts'/>
// Module
var view;
(function (view) {
    // Class
    var StartScreen = (function (_super) {
        __extends(StartScreen, _super);
        function StartScreen() {
                _super.call(this);
            this.header0 = new createjs.Bitmap(Main.getImagePath("header0.png"));
            this.addChild(this.header0);
            this.header1 = new createjs.Bitmap(Main.getImagePath("header1.png"));
            this.addChild(this.header1);
            var data = {
                images: [
                    Main.getImagePath("startButton.png")
                ],
                frames: {
                    width: 175,
                    height: 55,
                    regX: 0,
                    regY: 0
                },
                animations: {
                    out: [
                        0
                    ],
                    down: [
                        1
                    ]
                }
            };
            var spriteSheet = new createjs.SpriteSheet(data);
            this.startbutton = new createjs.BitmapAnimation(spriteSheet);
            var helper = new createjs.ButtonHelper(this.startbutton, "out", "down", "down", false, null, null);
            this.addChild(this.startbutton);
            this.header0.x = 212;
            this.header1.x = 46;
            this.startbutton.x = 240;
            this.header0.y = -152;
            this.header1.y = -76;
            this.startbutton.y = -55;
            createjs.Tween.get(this.header0).wait(200).to({
                y: 70
            }, 300, createjs.Ease.backOut);
            createjs.Tween.get(this.header1).wait(100).to({
                y: 140
            }, 300, createjs.Ease.backOut);
            createjs.Tween.get(this.startbutton).to({
                y: 240
            }, 300, createjs.Ease.backOut);
            this.startbutton.addEventListener("click", this.clickStart.bind(this));
            this.startSignal = new Signal();
        }
        StartScreen.prototype.clickStart = function (event) {
            this.startbutton.removeAllEventListeners("click");
            createjs.Tween.get(this.header0).wait(200).to({
                y: 520
            }, 300, createjs.Ease.backIn).call(this.finishOut.bind(this));
            createjs.Tween.get(this.header1).wait(100).to({
                y: 560
            }, 300, createjs.Ease.backIn);
            createjs.Tween.get(this.startbutton).to({
                y: 580
            }, 300, createjs.Ease.backIn);
        };
        StartScreen.prototype.finishOut = function () {
            this.startSignal.dispatch();
            this.startSignal.dispose();
        };
        return StartScreen;
    })(createjs.Container);
    view.StartScreen = StartScreen;    
})(view || (view = {}));
;
///<reference path='../Signal.ts'/>
///<reference path='StartScreen.ts'/>
///<reference path='../../definitions/easeljs/easeljs.d.ts'/>
var view;
(function (view) {
    // Class
    var Views = (function (_super) {
        __extends(Views, _super);
        // Constructor
        function Views() {
                _super.call(this);
            this.loadBar = new LoadBar();
            this.addChild(this.loadBar);
            this.loadBar.x = 125;
            this.loadBar.y = 200;
        }
        Views.prototype.loadProgress = function (progress) {
            this.loadBar.update(progress);
        };
        Views.prototype.loadFinished = function () {
            this.removeChild(this.loadBar);
            delete this.loadBar;
            var bg = new createjs.Bitmap(Main.getImagePath("9BallBg.jpg"));
            this.addChild(bg);
            this.contentHolder = new createjs.Container();
            this.addChild(this.contentHolder);
            var square = new createjs.Shape();
            square.graphics.beginStroke("#FF0").setStrokeStyle(5).drawRect(0, 0, 476, 450).closePath();
            this.contentHolder.mask = square;
            var overlay = new createjs.Bitmap(Main.getImagePath("9BallOverlay2.png"));
            this.addChild(overlay);
        };
        Views.prototype.showGame = function () {
            this.game = new engine.Game();
            this.contentHolder.addChild(this.game.view);
            this.game.view.ui = new view.Ui();
            this.addChild(this.game.view.ui);
            this.game.view.comeIn();
            this.game.outSignal.add(this.gameFinished.bind(this));
        };
        Views.prototype.showStartScreen = function () {
            this.start = new view.StartScreen();
            this.contentHolder.addChild(this.start);
            this.start.startSignal.add(this.clickStart.bind(this));
            if(!view.SoundsLoader.inited) {
                var sl = new view.SoundsLoader();
                sl.loadedSignal.add(this.soundsLoaded.bind(this));
            }
        };
        Views.prototype.soundsLoaded = function () {
            if(this.game && GameState.getInstance().energy > 0) {
                view.BallSounds.getInstance().startoop();
                this.game.view.ui.setSoundLoaded();
            }
        };
        Views.prototype.clickStart = function () {
            this.contentHolder.removeChild(this.start);
            if(GameState.viewedInstructions) {
                this.showGame();
            } else {
                GameState.viewedInstructions = true;
                this.instructions = new view.Instructions();
                this.contentHolder.addChild(this.instructions);
                this.instructions.endSignal.add(this.endInstructions.bind(this));
            }
        };
        Views.prototype.endInstructions = function () {
            this.contentHolder.removeChild(this.instructions);
            this.showGame();
        };
        Views.prototype.gameFinished = function () {
            this.contentHolder.removeChild(this.game.view);
            this.removeChild(this.game.view.ui);
            this.showStartScreen();
        };
        return Views;
    })(createjs.Container);
    view.Views = Views;    
    var LoadBar = (function (_super) {
        __extends(LoadBar, _super);
        // Constructor
        function LoadBar() {
                _super.call(this);
            var data = {
                images: [
                    Main.getImagePath("loadingFrame.png")
                ],
                frames: {
                    width: 207,
                    height: 39,
                    regX: 0,
                    regY: 0
                },
                animations: {
                }
            };
            var spriteSheet = new createjs.SpriteSheet(data);
            this.bg = new createjs.BitmapAnimation(spriteSheet);
            this.bg.gotoAndStop(0);
            this.addChild(this.bg);
            this.timeLeft = new createjs.BitmapAnimation(spriteSheet);
            this.timeLeft.gotoAndStop(1);
            this.addChild(this.timeLeft);
            this.timeMask = new createjs.Shape();
            this.timeMask.graphics.beginStroke("#FF0").setStrokeStyle(5).drawRect(0, 0, 195, 25).closePath();
            this.timeMask.x = 4;
            this.timeMask.y = 6;
            this.timeLeft.mask = this.timeMask;
        }
        LoadBar.prototype.update = function (scale) {
            this.timeMask.scaleX = Math.max(0.0001, scale);
        };
        return LoadBar;
    })(createjs.Container);
    view.LoadBar = LoadBar;    
})(view || (view = {}));
///<reference path='../../definitions/preloadjs/preloadjs.d.ts'/>
///<reference path='../../definitions/soundjs/soundjs.d.ts'/>
// Module
var view;
(function (view) {
    // Class
    var BallSounds = (function () {
        function BallSounds() {
            this.soundObs = {
            };
        }
        BallSounds.soundsPath = "assets/sounds/";
        BallSounds.getInstance = function getInstance() {
            if(!BallSounds._instance) {
                BallSounds._instance = new BallSounds();
            }
            return BallSounds._instance;
        };
        BallSounds.prototype.toggleMute = function () {
            this.muted = !this.muted;
            if(!this.soundLoaded) {
                return;
            }
            if(!this.muted) {
                createjs.Sound.play("music", "none", 0, 0, -1);
            } else {
                createjs.Sound.stop();
            }
        };
        BallSounds.prototype.startoop = function () {
            if(!this.muted && this.soundLoaded) {
                createjs.Sound.play("music", "none", 0, 0, -1);
            }
        };
        BallSounds.prototype.end = function () {
            createjs.Sound.stop();
        };
        BallSounds.prototype.playRun = function (num) {
            if(!this.muted && this.soundLoaded) {
                createjs.Sound.play("run" + num);
            }
        };
        return BallSounds;
    })();
    view.BallSounds = BallSounds;    
    var SoundsLoader = (function () {
        function SoundsLoader() {
            SoundsLoader.inited = true;
            this.loadedSignal = new Signal();
            createjs.Sound.registerPlugins([
                createjs.WebAudioPlugin, 
                createjs.HTMLAudioPlugin
            ]);
            console.log(createjs.Sound.activePlugin.toString());
            var manifest = [];
            var pre = BallSounds.soundsPath + "nightOwls_loop_final.";
            manifest.push({
                src: pre + "ogg|" + pre + "mp3",
                id: "music"
            });
            for(var i = 0; i < 7; i++) {
                pre = BallSounds.soundsPath + "sRun" + i + ".";
                var ob = {
                    src: pre + "mp3|" + pre + "ogg",
                    id: "run" + i
                };
                manifest.push(ob);
            }
            var loader = new createjs.LoadQueue(false);
            loader.installPlugin(createjs.Sound);
            loader.addEventListener("complete", this.handleComplete.bind(this));
            loader.addEventListener("progress ", this.handleFileLoad.bind(this));
            loader.addEventListener("error", this.handleError.bind(this));
            loader.loadManifest(manifest);
        }
        SoundsLoader.prototype.handleComplete = function (event) {
            var loader = event.target;
            loader.removeAllEventListeners("complete");
            loader.removeAllEventListeners("error");
            loader.removeAllEventListeners("progress");
            BallSounds.getInstance().soundLoaded = true;
            this.loadedSignal.dispatch();
            // createjs.Sound.registerSound(pre + "ogg|" + pre + "mp3", "music", null, true);
                    };
        SoundsLoader.prototype.handleFileLoad = function (event) {
            console.log("soundLoad.id");
            var soundLoad = event.item;
            console.log("soundLoad.id");
            console.log(soundLoad);
        };
        SoundsLoader.prototype.handleError = function (event) {
            console.log(event.target + ":" + "handleError" + event.item + ":" + event.error);
        };
        return SoundsLoader;
    })();
    view.SoundsLoader = SoundsLoader;    
})(view || (view = {}));
///<reference path='src/model/Ball.ts'/>
///<reference path='src/engine/Game.ts'/>
///<reference path='src/view/Views.ts'/>
///<reference path='src/view/9BallSounds.ts'/>
///<reference path='definitions/easeljs/easeljs.d.ts'/>
///<reference path='definitions/preloadjs/preloadjs.d.ts'/>
var Main = (function () {
    function Main(stage) {
        this.stage = stage;
        // this.element = element;
        this.view = new view.Views();
        this.stage.addChild(this.view);
        createjs.Ticker.setFPS(20);
        createjs.Ticker.addListener(this.stage);
        createjs.Touch.enable(stage);
        stage.enableMouseOver(5);
        // var img = new Image();
        // img.onload = this.handleComplete.bind(this);
        //  img.src = "assets/balls.png";
        if(!window.addEventListener) {
            window.attachEvent("onresize", this.onResize.bind(this));
            window.attachEvent("onorientationchange", this.onResize.bind(this));
        } else {
            window.addEventListener("resize", this.onResize.bind(this));
            window.addEventListener("orientationchange", this.onResize.bind(this));
        }
        this.onResize();
        var img = new Image();
        img.src = Main.getImagePath("loadingFrame.png");
        img.onload = this.loaderLoaded.bind(this);
    }
    Main.imagesPath = "assets/images_def/";
    Main.MAIN_FONT = "Calibri";
    Main.prototype.loaderLoaded = function () {
        var manifest = [
            {
                src: Main.getImagePath("balls.png"),
                id: "balls"
            }, 
            {
                src: Main.getImagePath("numbers.png"),
                id: "numbers"
            }, 
            {
                src: Main.getImagePath("ballsExploding.png"),
                id: "ballsEx"
            }, 
            {
                src: Main.getImagePath("9BallOverlay2.png"),
                id: "9BallOverlay"
            }, 
            {
                src: Main.getImagePath("9BallBg.jpg"),
                id: "bg"
            }, 
            {
                src: Main.getImagePath("gameOver.png"),
                id: "gameOver"
            }, 
            {
                src: Main.getImagePath("header0.png"),
                id: "header0"
            }, 
            {
                src: Main.getImagePath("header1.png"),
                id: "header1"
            }, 
            {
                src: Main.getImagePath("startButton.png"),
                id: "startButton"
            }, 
            {
                src: Main.getImagePath("playAgain.png"),
                id: "playAgain"
            }, 
            {
                src: Main.getImagePath("timeBar.png"),
                id: "timeBar"
            }, 
            {
                src: Main.getImagePath("9BallChalk.png"),
                id: "9BallChalk"
            }
        ];
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("complete", this.handleComplete.bind(this));
        loader.addEventListener("error", this.handleError.bind(this));
        loader.addEventListener("progress", this.loadProgress.bind(this));
        loader.loadManifest(manifest);
    };
    Main.prototype.loadProgress = function (event) {
        this.view.loadProgress(event.loaded);
    };
    Main.getImagePath = function getImagePath(image) {
        return Main.imagesPath + image;
    };
    Main.prototype.handleComplete = function (event) {
        var loader = event.target;
        loader.removeAllEventListeners("complete");
        loader.removeAllEventListeners("error");
        loader.removeAllEventListeners("progress");
        this.view.loadFinished();
        this.view.showStartScreen();
        // this.stage.update();
        //var startScreen: view.StartScreen = new view.StartScreen();
        // this.stage.addChild(startScreen);
            };
    Main.prototype.handleError = function (event) {
        console.log(event.target + ":" + "handleError");
    };
    Main.prototype.onResize = function () {
        createjs.Tween.get(this).wait(200).call(this.adjustRatio.bind(this));
        //this.adjustRatio();
            };
    Main.prototype.adjustRatio = function () {
        var img = document.getElementById("gameCanvas");
        var content = document.getElementById("content");
        var gameWidth;
        var gameHeight;
        if(window.innerHeight < window.innerWidth) {
            // img.style.height = '100%';
            gameHeight = window.innerHeight;
            gameWidth = window.innerHeight / 500 * 476;
            // img.style.height = "" + window.innerHeight +"px'";
            // img.style.width = 'auto';
            // content.style.width = "" + gameWidth + "px";
                    } else {
            // img.style.width = '100%';
            gameWidth = window.innerWidth;
            gameHeight = window.innerWidth / 476 * 500;
            // img.style.width = "" + gameWidth + "px";
            //img.style.height = 'auto';
            // img.style.height = "" + gameHeight + "px";
                    }
        content.style.left = (window.innerWidth - gameWidth) / 2 + "px";
        content.style.height = "" + gameHeight + "px";
        content.style.width = "" + gameWidth + "px";
    };
    return Main;
})();
window.onload = function () {
    var element = document.getElementById("gameCanvas");
    element.width = 476;
    element.height = 500;
    var stage = new createjs.Stage(element);
    new Main(stage);
    //  greeter.start();
    };
///<reference path='../../definitions/easeljs/easeljs.d.ts'/>
///<reference path='../../app.ts'/>
// Module
var view;
(function (view) {
    // Class
    var TextButton = (function (_super) {
        __extends(TextButton, _super);
        function TextButton(font, copy) {
                _super.call(this);
            if(font.length == 0) {
                font = "bold 32px " + Main.MAIN_FONT;
            }
            this.text0 = new createjs.Text(copy, font, "#0");
            this.text1 = new createjs.Text(copy, font, "#FFFFFF");
            this.addChild(this.text0);
            this.text0.x = this.text0.y = 2;
            this.addChild(this.text1);
            this.hitShape = new createjs.Shape();
            this.addChild(this.hitShape);
            this.hitShape.alpha = 0.05;
            this.addEventListener("press", this.onPress.bind(this));
            this.pressSignal = new Signal();
            this.drawHit();
        }
        TextButton.prototype.setText = function (copy) {
            this.text0.text = this.text1.text = copy;
            this.drawHit();
        };
        TextButton.prototype.drawHit = function () {
            this.hitShape.graphics.clear().beginFill("#ff").drawRect(0, 0, this.getWidth(), 40);
        };
        TextButton.prototype.onPress = function (event) {
            this.pressSignal.dispatch();
        };
        TextButton.prototype.getWidth = function () {
            return this.text0.getMeasuredWidth();
        };
        TextButton.prototype.cleanUp = function () {
            this.pressSignal.dispose();
            this.removeAllEventListeners("press");
        };
        return TextButton;
    })(createjs.Container);
    view.TextButton = TextButton;    
})(view || (view = {}));
///<reference path='../model/GameState.ts'/>
///<reference path='../../definitions/easeljs/easeljs.d.ts'/>
var view;
(function (view) {
    var BallMC = (function () {
        function BallMC(animation) {
            this.animation = animation;
            this.filterState = 0;
        }
        BallMC.prototype.setPos = function (x, y) {
            this.animation.x = x;
            this.animation.y = y;
        };
        BallMC.prototype.setFilterState = function (state) {
            if(this.filterState == state) {
                return;
            }
            switch(state) {
                case 0:
                    this.animation.filters = [];
                    this.animation.uncache();
                    break;
                case 1:
                    this.animation.filters = [
                        view.GameView.lightFilter
                    ];
                    this.animation.cache(0, 0, 36, 36);
                    break;
            }
            this.filterState = state;
        };
        return BallMC;
    })();
    view.BallMC = BallMC;    
})(view || (view = {}));
///<reference path='../model/GameState.ts'/>
///<reference path='../model/LightPoint.ts'/>
///<reference path='Effects.ts'/>
///<reference path='Ui.ts'/>
///<reference path='TextButton.ts'/>
///<reference path='BallMC.ts'/>
///<reference path='../Signal.ts'/>
///<reference path='../../definitions/easeljs/easeljs.d.ts'/>
///<reference path='../../definitions/tweenjs/tweenjs.d.ts'/>
var view;
(function (view) {
    var GameView = (function (_super) {
        __extends(GameView, _super);
        function GameView() {
                _super.call(this);
            var gameState = GameState.getInstance();
            var minSize = Math.max(36, 50);
            var maxCol = Math.floor(414 / minSize);
            GameView.ballSize = Math.floor(414 / maxCol);
            GameState.numColumns = maxCol * 2 - 1;
            GameView.rowSize = GameView.ballSize * 0.87;
            GameView.halfBallSize = GameView.ballSize / 2;
            GameState.numRows = Math.floor(380 / GameView.rowSize);
            this.mouseMoveFunc = this.moveOverContainer.bind(this);
            this.mouseUpFunc = this.releaseContainer.bind(this);
            this.mouseDownFunc = this.pressContainer.bind(this);
            this.newBallDrag = new Signal();
            this.ballRelease = new Signal();
            this.tweenEnd = new Signal();
            var lightFilterMatrix = new createjs.ColorMatrix(50, 20, 30, 0);
            GameView.lightFilter = new createjs.ColorMatrixFilter(lightFilterMatrix);
        }
        GameView.ballSize = 50;
        GameView.prototype.makeBalls = function (gameState) {
            this.balls = [];
            this.ballsHolder = new createjs.Container();
            this.addChild(this.ballsHolder);
            var data = {
                images: [
                    Main.getImagePath("balls.png")
                ],
                frames: {
                    width: 36,
                    height: 36,
                    regX: 0,
                    regY: 0
                },
                animations: {
                }
            };
            var spriteSheet = new createjs.SpriteSheet(data);
            var maxY = GameState.numRows * (GameView.rowSize - 1);
            for(var i = 0; i < GameState.numRows; i++) {
                this.balls[i] = [];
                for(var j = 0; j < GameState.numColumns; j++) {
                    if(i % 2 == j % 2) {
                        var ballmc = this.balls[i][j] = new view.BallMC(new createjs.BitmapAnimation(spriteSheet));
                        this.ballsHolder.addChild(this.balls[i][j].animation);
                        this.balls[i][j].setPos(j * GameView.halfBallSize, i * GameView.rowSize);
                        this.balls[i][j].animation.gotoAndStop(2);
                        this.balls[i][j].animation.scaleX = this.balls[i][j].animation.scaleY = GameView.ballSize / 36;
                        ;
                    }
                }
            }
            this.line0 = new createjs.Shape();
            this.addChild(this.line0);
            this.line1 = new createjs.Shape();
            this.addChild(this.line1);
            this.effects = new view.Effects();
            this.addChild(this.effects);
        };
        GameView.prototype.drawBalls = function (gameState) {
            for(var i = 0; i < GameState.numRows; i++) {
                for(var j = 0; j < GameState.numColumns; j++) {
                    if(this.balls[i][j]) {
                        var anim = this.balls[i][j].animation;
                        if(gameState.grid[i][j]) {
                            anim.gotoAndStop(Ball.getAnimFrame(gameState.grid[i][j].colour, gameState.grid[i][j].num));
                            anim.visible = true;
                            if(gameState.grid[i][j].inLine) {
                                this.balls[i][j].setFilterState(1);
                            } else if(!gameState.grid[i][j].inLine) {
                                this.balls[i][j].setFilterState(0);
                            }
                        } else {
                            anim.visible = false;
                            anim.uncache();
                        }
                    }
                }
            }
        };
        GameView.prototype.obscureBalls = function (gameState) {
            for(var i = 0; i < GameState.numRows; i++) {
                for(var j = 0; j < GameState.numColumns; j++) {
                    if(this.balls[i][j]) {
                        this.balls[i][j].animation.gotoAndStop((GameState.maxColours * GameState.maxNumbers) + 1);
                    }
                }
            }
        };
        GameView.prototype.greyOutBalls = function () {
            var greyFilterMatrix = new createjs.ColorMatrix(0, 0, -100, 0);
            var geryFilter = new createjs.ColorMatrixFilter(greyFilterMatrix);
            this.ballsHolder.filters = [
                geryFilter
            ];
            this.ballsHolder.cache(0, 0, 476, GameState.numRows * GameView.rowSize + 20);
            var gameOver = new createjs.Bitmap(Main.getImagePath("gameOver.png"));
            this.addChild(gameOver);
            gameOver.x = 90;
            gameOver.y = -157;
            createjs.Tween.get(gameOver).wait(100).to({
                y: 30
            }, 500, createjs.Ease.backOut);
            var data = {
                images: [
                    Main.getImagePath("playAgain.png")
                ],
                frames: {
                    width: 160,
                    height: 87,
                    regX: 0,
                    regY: 0
                },
                animations: {
                    out: [
                        0
                    ],
                    down: [
                        1
                    ]
                }
            };
            var spriteSheet = new createjs.SpriteSheet(data);
            this.playAgain = new createjs.BitmapAnimation(spriteSheet);
            var helper = new createjs.ButtonHelper(this.playAgain, "out", "down", "down", false, null, null);
            this.addChild(this.playAgain);
            this.playAgain.x = 130;
            this.playAgain.y = -87;
            createjs.Tween.get(this.playAgain).to({
                y: 210
            }, 500, createjs.Ease.backOut);
            this.playAgain.addEventListener("click", this.clickPlayAgain.bind(this));
            this.ui.removeButtons();
        };
        GameView.prototype.comeIn = function () {
            var tweenTime = 500;
            this.x = Math.floor((476 - (GameState.numColumns + 1) / 2 * GameView.ballSize) / 2);
            this.y = Math.floor((455 - (GameState.numRows * GameView.rowSize) - (GameView.ballSize - GameView.rowSize)) / 2);
            this.ballsHolder.y = -(GameState.numRows * GameView.rowSize);
            createjs.Tween.get(this.ballsHolder).to({
                y: 0
            }, tweenTime, createjs.Ease.backOut).call(this.finishIn.bind(this));
            this.ui.comeIn();
        };
        GameView.prototype.clickPlayAgain = function (event) {
            this.playAgain.removeAllEventListeners("click");
            createjs.Tween.get(this).to({
                y: 450
            }, 500, createjs.Ease.backIn).call(this.finishOut.bind(this));
            this.ui.goOut();
        };
        GameView.prototype.finishIn = function () {
            this.tweenEnd.dispatch("in");
        };
        GameView.prototype.finishOut = function () {
            this.tweenEnd.dispatch("out");
        };
        GameView.prototype.addScore = function (x, y, score) {
            this.effects.addScore(x, y, score);
        };
        GameView.prototype.update = function () {
            var gameState = GameState.getInstance();
            this.ui.timeBar.update(gameState.energy / gameState.maxEnergy);
            this.effects.update();
        };
        GameView.prototype.addListeners = function () {
            //this.ballsHolder.addEventListener("mousedown", this.mouseDownFunc);
            this.ballsHolder.addEventListener("mousedown", this.mouseDownFunc);
        };
        GameView.prototype.pressContainer = function (event) {
            var stage = this.getStage();
            stage.addEventListener("stagemousemove", this.mouseMoveFunc);
            stage.addEventListener("stagemouseup", this.mouseUpFunc);
            var x = event.stageX - this.x;
            var y = event.stageY - this.y;
            this.line0.graphics.clear().setStrokeStyle(3).beginStroke("#AAAADD").moveTo(x, y);
            this.line1.graphics.clear().setStrokeStyle(1).beginStroke("#FFFFFF").moveTo(x, y);
            this.currentBall = new model.LightPoint(-1, -1);
            this.checkPoint(x, y);
        };
        GameView.prototype.releaseContainer = function (event) {
            this.ballRelease.dispatch();
        };
        GameView.prototype.stopDraw = function () {
            if(this.currentBall.x < 0) {
                return;
            }
            this.removeListeners();
            this.line0.graphics.clear();
            this.line1.graphics.clear();
            this.currentBall.x = this.currentBall.y = -1;
        };
        GameView.prototype.removeListeners = function () {
            var stage = this.getStage();
            stage.removeEventListener("stagemousemove", this.mouseMoveFunc);
            stage.removeEventListener("stagemouseup", this.mouseUpFunc);
            this.ballsHolder.removeEventListener("mousedown", this.mouseDownFunc);
        };
        GameView.prototype.moveOverContainer = function (event) {
            var x = event.stageX - this.x;
            var y = event.stageY - this.y;
            this.line0.graphics.lineTo(x, y);
            this.line1.graphics.lineTo(x, y);
            this.checkPoint(x, y);
            // this.stage.update();
                    };
        GameView.prototype.checkPoint = function (x, y) {
            var col = Math.floor(x / GameView.halfBallSize);
            var row = Math.floor(y / GameView.rowSize);
            var closest = 500;
            x -= GameView.halfBallSize;
            y -= GameView.halfBallSize;
            for(var i = Math.max(0, col - 2); i < Math.min(col + 3, GameState.numColumns); i++) {
                for(var j = Math.max(0, row - 1); j < Math.min(row + 2, GameState.numRows); j++) {
                    if(this.balls[j][i]) {
                        var n = this.getDistance(x, y, this.balls[j][i].animation.x, this.balls[j][i].animation.y);
                        if(n < closest) {
                            var rCol = i;
                            var rRow = j;
                            closest = n;
                            var foundBall = true;
                        }
                    }
                }
            }
            if(foundBall && (rRow != this.currentBall.y || rCol != this.currentBall.x) && this.balls[rRow][rCol]) {
                this.currentBall.x = rCol;
                this.currentBall.y = rRow;
                this.newBallDrag.dispatch(this.currentBall);
            }
            this.drawBalls(GameState.getInstance());
        };
        GameView.prototype.getDistance = function (x0, y0, x1, y1) {
            return Math.sqrt(((x1 - x0) * (x1 - x0)) + ((y1 - y0) * (y1 - y0)));
        };
        GameView.prototype.cleanUp = function () {
            this.newBallDrag.dispose();
            this.ballRelease.dispose();
            this.tweenEnd.dispose();
            this.effects.cleanUp();
        };
        return GameView;
    })(createjs.Container);
    view.GameView = GameView;    
})(view || (view = {}));
///<reference path='../model/GameState.ts'/>
///<reference path='../view/GameView.ts'/>
///<reference path='GameEngine.ts'/>
///<reference path='../view/TextButton.ts'/>
var engine;
(function (engine) {
    var Game = (function () {
        function Game() {
            var gameState = GameState.getInstance();
            engine.GameEngine.initGame(gameState);
            this.view = new view.GameView();
            this.view.makeBalls(gameState);
            this.view.drawBalls(gameState);
            this.view.newBallDrag.add(this.newBall.bind(this));
            this.view.ballRelease.add(this.ballRelease.bind(this));
            this.view.tweenEnd.add(this.tweenFinished.bind(this));
            this.efFunc = this.update.bind(this);
            this.outSignal = new Signal();
        }
        Game.prototype.start = function () {
            createjs.Ticker.addEventListener("tick", this.efFunc);
            this.view.addListeners();
            this.view.ui.buttonClick.add(this.uiClick.bind(this));
            view.BallSounds.getInstance().startoop();
        };
        Game.prototype.tweenFinished = function (type) {
            switch(type) {
                case "in":
                    this.start();
                    break;
                case "out":
                    this.outSignal.dispatch();
                    this.cleanUp();
                    break;
            }
        };
        Game.prototype.newBall = function (ball) {
            this.drawing = true;
            if(!engine.GameEngine.checkBallDraw(ball)) {
                //release code
                this.ballRelease();
            }
        };
        Game.prototype.uiClick = function (clickType) {
            var gameState = GameState.getInstance();
            switch(clickType) {
                case "pause":
                    this.view.removeListeners();
                    createjs.Ticker.removeEventListener("tick", this.efFunc);
                    this.view.ui.setPausePlay(true);
                    this.view.obscureBalls(gameState);
                    this.quitButton = new view.TextButton("bold 44px " + Main.MAIN_FONT, "Quit Game");
                    this.quitButton.x = (476 - this.quitButton.getWidth()) / 2 - 20;
                    this.quitButton.y = 130;
                    this.view.addChild(this.quitButton);
                    this.quitButton.pressSignal.add(this.clickQuitButton.bind(this));
                    this.resumeButton = new view.TextButton("bold 44px " + Main.MAIN_FONT, "Resume Game");
                    this.resumeButton.x = (476 - this.resumeButton.getWidth()) / 2 - 20;
                    this.resumeButton.y = 190;
                    this.view.addChild(this.resumeButton);
                    this.resumeButton.pressSignal.add(this.clickResumeButton.bind(this));
                    break;
                case "play":
                    this.view.addListeners();
                    createjs.Ticker.addEventListener("tick", this.efFunc);
                    this.view.ui.setPausePlay(false);
                    gameState.lastTick = new Date().getTime();
                    this.view.drawBalls(gameState);
                    this.view.removeChild(this.quitButton);
                    this.view.removeChild(this.resumeButton);
                    this.quitButton.cleanUp();
                    this.resumeButton.cleanUp();
                    delete this.quitButton;
                    delete this.resumeButton;
                    break;
            }
        };
        Game.prototype.clickQuitButton = function () {
            this.endGame();
        };
        Game.prototype.clickResumeButton = function () {
            this.uiClick("play");
        };
        Game.prototype.ballRelease = function () {
            this.drawing = false;
            this.view.stopDraw();
            if(!engine.GameEngine.endDraw(this.view.effects) && GameState.getInstance().energy > 0) {
                this.view.addListeners();
            }
            this.view.drawBalls(GameState.getInstance());
        };
        Game.prototype.update = function (event) {
            var gameState = GameState.getInstance();
            if(gameState.checkBallsInt == gameState.count) {
                if(!engine.GameEngine.checkBalls(gameState, this.view.effects)) {
                    if(gameState.energy > 0) {
                        this.view.addListeners();
                    } else {
                        this.endGame();
                    }
                } else {
                }
                this.view.ui.setScore(gameState.score.toString());
                for(var i = 0; i < gameState.balls.length; i++) {
                    if(gameState.balls[i].row % 2 != gameState.balls[i].column % 2) {
                        gameState.offGridBalls.push(gameState.balls[i]);
                    }
                }
                this.view.drawBalls(gameState);
            }
            gameState.count++;
            if(gameState.energy > 0) {
                this.advanceTime(gameState);
            }
            this.view.update();
        };
        Game.prototype.advanceTime = function (gameState) {
            gameState.energy -= gameState.energyDecay;
            var nowTime = new Date().getTime();
            gameState.energyDecay += (nowTime - gameState.lastTick) / 15000;
            gameState.lastTick = nowTime;
            //gameState.energyBar.bar._yscale = 100 / maxEnergy * energy;
            if(gameState.energy <= 0) {
                gameState.energy = 0;
                if(this.drawing) {
                    this.ballRelease();
                } else {
                    this.view.removeListeners();
                    this.endGame();
                }
            }
        };
        Game.prototype.endGame = function () {
            var gameState = GameState.getInstance();
            this.view.greyOutBalls();
            if(this.resumeButton) {
                this.quitButton.cleanUp();
                this.resumeButton.cleanUp();
                this.view.removeChild(this.quitButton);
                this.view.removeChild(this.resumeButton);
                delete this.quitButton;
                delete this.resumeButton;
            }
            view.BallSounds.getInstance().end();
            // console.log(gameState.score)
            parent.postMessage(gameState.score,'*')
        };
        Game.prototype.cleanUp = function () {
            this.view.cleanUp();
            this.outSignal.dispose();
            createjs.Ticker.removeEventListener("tick", this.efFunc);
        };
        return Game;
    })();
    engine.Game = Game;    
})(engine || (engine = {}));
//@ sourceMappingURL=nineBall.js.map
