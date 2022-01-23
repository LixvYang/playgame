//% weight=0 color=#5f9cd8  block="Button"
namespace button {


    /**
    * led Show Click Button A
    */
    //% blockId=led_pressA block="PressA"
    export function PressA() {

        basic.showIcon(IconNames.Target)
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showIcon(IconNames.Scissors)

    }

    /**
    * led Show Click Button B
    */
    //% blockId=led_pressB block="PressB"
    export function PressB() {
        music.stopAllSounds()
    }

    /**
    * led Show Click Button AB
    */
    //% blockId=led_pressAB block="PressAB"
    export function PressAB() {
        basic.showIcon(IconNames.Yes)
    }
}