class Wiggle {
    doLowerHead() {
        document.getElementById("lower-head").style.animation =
            "dragon-hover-lower-head-anim 2s infinite alternate";
    }
    doUpperHead() {
        document.getElementById("upper-head").style.animation =
            "dragon-hover-upper-head-anim 2s infinite alternate";
    }
    doBody() {
        body.style.animation =
            "dragon-hover-body-anim 2s infinite alternate";
    }
    doNeck() {
        neck.style.animation =
            "dragon-hover-neck-anim 2s infinite alternate";
    }
    doUpperArm() {
        document.getElementById("upper-arm").style.animation =
            "dragon-hover-upper-arm-anim 2s infinite alternate .5s";
    }
    doLowerArm() {
        document.getElementById("lower-arm").style.animation =
            "dragon-hover-lower-arm-anim 2s infinite alternate";
    }
}

class Fire {
    doLowerHead() {
        document.getElementById("lower-head").style.animation =
            "dragon-hover-lower-head-anim 2s infinite alternate .5s";
    }
    doUpperHead() {
        document.getElementById("upper-head").style.animation =
            "dragon-hover-upper-head-anim 2s infinite alternate .5s";
    }
    doBody() {
        body.style.animation =
            "dragon-hover-body-anim 2s infinite alternate .5s";
    }
    doNeck() {
        neck.style.animation =
            "dragon-hover-neck-anim 2s infinite alternate .5s";
    }
    doUpperArm() {
        document.getElementById("upper-arm").style.animation =
            "dragon-hover-upper-arm-anim 2s infinite alternate .5s";
    }
    doLowerArm() {
        document.getElementById("lower-arm").style.animation =
            "dragon-hover-lower-arm-anim 2s infinite alternate .5s";
    }
    doFire() {

    }
}

class Sleep {
    doBody() {
        body.style.animation =
            "dragon-hover-body-anim 2s infinite alternate .5s";
    }
    doNeck() {
        neck.style.animation =
            "dragon-hover-neck-anim 2s infinite alternate .5s";
    }
}


class Facade {
    constructor() {
        this.wiggle = new Wiggle();
        this.fire = new Fire()
        this.sleep = new Sleep();
    }

    idle() {
        this.wiggle.doBody();
        this.wiggle.doLowerArm();
        this.wiggle.doUpperArm();
        this.wiggle.doUpperHead();
        this.wiggle.doLowerHead();
        this.wiggle.doNeck();
    }

    fire() {

    }

    sleep() {

    }
}




// new Facade().idle();