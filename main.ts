input.onButtonPressed(Button.A, function () {
    qdee.qdee_setMotorSpeed(50, 50)
})
input.onButtonPressed(Button.B, function () {
    qdee.qdee_setMotorSpeed(-50, -50)
})
qdee.qdee_Init()
