controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(-1)
    info.changeScoreBy(1)
})
info.setLife(25)
info.startCountdown(1)
