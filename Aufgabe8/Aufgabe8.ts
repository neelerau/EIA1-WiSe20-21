namespace DrumPad {

    // Arrays der Soundelemente
    const sound: HTMLAudioElement[] = [];
    sound[0] = new Audio("assets/A.mp3");
    sound[1] = new Audio("assets/C.mp3");
    sound[2] = new Audio("assets/F.mp3");
    sound[3] = new Audio("assets/G.mp3");
    sound[4] = new Audio("assets/hihat.mp3");
    sound[5] = new Audio("assets/kick.mp3");
    sound[6] = new Audio("assets/laugh-1.mp3");
    sound[7] = new Audio("assets/laugh-2.mp3");
    sound[8] = new Audio("assets/snare.mp3");

    //Boolean
    let record: boolean;

    //Array für Nutzereingabe und MainSound
    let leeresArray: number[] = [4, 5, 8];

    // Funktion für Recordbutton
    let i: number;

    function recordPlay(i: number): void {
        console.log("Wird es übertragen?");
        if (record == true) {
            leeresArray.push(i);
        }
    }

    // Funktion für die Soundelemente
    function playSample(thesound: number): void {
        sound[thesound].play();
    }

    //Funktion für sound1
    document.getElementById("pad1").addEventListener("click", function (): void {
        playSample(0);
        recordPlay(0);
    });
    //Funktion für sound2
    document.getElementById("pad2").addEventListener("click", function (): void {
        playSample(1);
        recordPlay(1);
    });
    //Funktion für sound3
    document.getElementById("pad3").addEventListener("click", function (): void {
        playSample(2);
        recordPlay(2);
    });
    //Funktion für sound4
    document.getElementById("pad4").addEventListener("click", function (): void {
        playSample(3);
        recordPlay(3);
    });
    //Funktion für sound5
    document.getElementById("pad5").addEventListener("click", function (): void {
        playSample(4);
        recordPlay(4);
    });
    //Funktion für sound6
    document.getElementById("pad6").addEventListener("click", function (): void {
        playSample(5);
        recordPlay(6);
    });
    //Funktion für sound7
    document.getElementById("pad7").addEventListener("click", function (): void {
        playSample(6);
        recordPlay(6);
    });
    //Funktion für sound8
    document.getElementById("pad8").addEventListener("click", function (): void {
        playSample(7);
        recordPlay(7);
    });
    //Funktion für sound9
    document.getElementById("pad9").addEventListener("click", function (): void {
        playSample(8);
        recordPlay(8);
    });

    // interval für play-/stopbutton
    let interval: number;
    let x: number = 0;

    function loopMainSound(b: boolean): void {
        if (b == true) {
            interval = setInterval(function (): void {
                playSample(leeresArray[x]);
                x++;
                console.log(x); //an welcher Stelle im Array
                if (x >= leeresArray.length) {
                    x = 0;
                }

            }, 500);
        } else {
            clearInterval(interval);

        }
    }

    // Arrays/Funktion play-/stopbutton aufnehm-/löschbutton
    const button: HTMLElement[] = [];
    button[0] = document.getElementById("playbutton");
    button[1] = document.getElementById("stopbutton");
    button[2] = document.getElementById("aufnehmbutton");
    button[3] = document.getElementById("löschbutton");

    function switchbuttons(i1: number, i2: number): void {
        button[i1].classList.add("is-hidden");
        button[i2].classList.remove("is-hidden");
    }

    button[0].addEventListener("click", function (): void {
        switchbuttons(0, 1);
        loopMainSound(true);

    });
    button[1].addEventListener("click", function (): void {
        switchbuttons(1, 0);
        loopMainSound(false);
    });

    //löschbutton
    button[3].addEventListener("click", function (): void {
        leeresArray = [];

    });

    //recordbutton grey/white
    button[2].addEventListener("click", function (): void {
        if (button[2].classList.contains("inactive")) {
            button[2].classList.remove("inactive");
            button[2].classList.add("active");
            record = true;
        } else {
            (button[2].classList.contains("active"));
            button[2].classList.remove("active");
            button[2].classList.add("inactive");
            record = false;
        }
    });


}