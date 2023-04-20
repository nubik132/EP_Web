class Wiggle {
    doLowerHead() {
        document.getElementById("lower-head").style.animation =
            "dragon-wiggle-lower-head-anim 2s infinite alternate";
    }
    doUpperHead() {
        document.getElementById("upper-head").style.animation =
            "dragon-wiggle-upper-head-anim 2s infinite alternate";
    }
    doBody() {
        body.style.animation =
            "dragon-wiggle-body-anim 2s infinite alternate";
    }
    doNeck() {
        neck.style.animation =
            "dragon-wiggle-neck-anim 2s infinite alternate";
    }
    doUpperArm() {
        document.getElementById("upper-arm").style.animation =
            "dragon-wiggle-upper-arm-anim 2s infinite alternate .5s";
    }
    doLowerArm() {
        document.getElementById("lower-arm").style.animation =
            "dragon-wiggle-lower-arm-anim 2s infinite alternate";
    }
}

class Fire {
    doLowerHead() {
        document.getElementById("lower-head").style.animation =
            "dragon-open-lower-head .5s 2 alternate";
    }
    doUpperHead() {
        document.getElementById("upper-head").style.animation =
            "dragon-open-upper-head .5s 2 alternate";
    }
    doBody() {
        body.style.animation =
            "dragon-wiggle-body-anim 2s infinite alternate";
    }
    doNeck() {
        neck.style.animation =
            "dragon-cran-neck .5s 2 alternate";
    }
    doUpperArm() {
        // document.getElementById("upper-arm").style.animation =
        //     "dragon-wiggle-upper-arm-anim .3s 2 alternate";
        document.getElementById("upper-arm").style.animationDuration = '.3s';
    }
    doLowerArm() {
        // document.getElementById("lower-arm").style.animation =
        //     "dragon-wiggle-lower-arm-anim .3s 2 alternate";
        document.getElementById("lower-arm").style.animationDuration = '.3s';

    }
    doFire() {
        let dragon = document.getElementById("dragon");
        let fire = document.createElement('img');
        fire.src = "src/img/fire.gif";
        fire.alt = "fire";
        fire.classList.add("fire");
        fire.id = "fire";
        dragon.appendChild(fire);
        setTimeout(() => { dragon.removeChild(fire); }, 720);
    }
}

class Sleep {
    // doBody() {
    //     body.style.animation =
    //         "dragon-wiggle-body-anim 2s infinite alternate .5s";
    // }
    // doNeck() {
    //     // neck.style.animation =
    //     //     "dragon-cran-neck 2s .5s forwards";
    //     // "dragon-wiggle-neck-anim 2s infinite alternate .5s";
    // }
    doUpperHead() {
        document.getElementById("upper-head").style.animation =
            "dragon-lie-upper-head 3s forwards";
        setTimeout(doUpperHead2.bind(this), 3000);
        function doUpperHead2() {
            document.getElementById("upper-head").style.animation =
                "dragon-lie-upper-head-2 2s infinite alternate";
        }
    }
    doLowerHead() {
        document.getElementById("lower-head").style.animation =
            "dragon-lie-lower-head 3s ease-out forwards";
        setTimeout(doLowerHead2.bind(this), 3000);
        function doLowerHead2() {
            document.getElementById("lower-head").style.animation =
                "dragon-lie-lower-head-2 2s infinite alternate";
        }
    }
    doUpperArm() {
        document.getElementById("upper-arm").style.animation =
            "dragon-lie-upper-arm 3s forwards";
        setTimeout(doUpperArm2.bind(this), 3000);
        function doUpperArm2() {
            document.getElementById("upper-arm").style.animation =
                "dragon-lie-upper-arm-2 2s infinite alternate .5s";
        }
        // document.getElementById("upper-arm").style.animation =
        //     "dragon-lie-upper-arm 3s forwards";
    }
    doLowerArm() {
        document.getElementById("lower-arm").style.animation =
            "dragon-lie-lower-arm 3s forwards";
        setTimeout(doLowerArm2.bind(this), 3000);
        function doLowerArm2() {
            document.getElementById("lower-arm").style.animation =
                "dragon-lie-lower-arm-2 2s infinite alternate";
        }
    }
}


class Facade {
    constructor() {
        this.wiggle = new Wiggle();
        this.fire = new Fire()
        this.sleep = new Sleep();
    }

    doWiggle() {
        this.wiggle.doBody();
        this.wiggle.doLowerArm();
        this.wiggle.doUpperArm();
        this.wiggle.doUpperHead();
        this.wiggle.doLowerHead();
        this.wiggle.doNeck();
    }

    doFire() {
        this.fire.doBody();
        this.fire.doLowerArm();
        this.fire.doUpperArm();
        this.fire.doUpperHead();
        this.fire.doLowerHead();
        this.fire.doNeck();
        this.fire.doFire();
        setTimeout(this.doWiggle.bind(this), 1000);
    }

    doSleep() {
        
        this.wiggle.doBody();
        this.wiggle.doNeck();
        this.sleep.doUpperHead();
        this.sleep.doLowerHead();
        this.sleep.doUpperArm();
        this.sleep.doLowerArm();
    }
}
let facade = new Facade();

function start() {
    facade.doWiggle();
}

function fire() {
    facade.doFire();
}

function sleep() {
    facade.doSleep();
}

start();
var isScrolled = false;
document.querySelector("#dragon").addEventListener('mouseenter', (event) => {if(event.target.id == "dragon") facade.doFire();});
window.addEventListener('scroll', function () {
    if (window.scrollY > 0 && !isScrolled) {
        facade.doSleep();
        isScrolled = true;
    } else if (window.scrollY == 0) {
        facade.doWiggle();
        isScrolled = false;
    }
});
// new Facade().idle();