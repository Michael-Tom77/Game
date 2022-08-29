class Form {

    constructor() {
        this.input = createInput("").attribute("placeholder", "Type your Username here!");
        this.confirmButton = createImg("assets/UI/finish_button.png");
        this.greeting = createElement("h2");

    }

    show() {
        this.confirmButton.position(windowWidth / 3 + 100, windowHeight / 2);
        this.confirmButton.size(220, 90);
        this.input.position(windowWidth / 3 + 100, windowHeight / 2 - 50);
        this.input.class("customInput");

    }

    hide() {
        this.input.hide();
        this.confirmButton.hide();
        this.greeting.hide();
    }

    hideButton() {

        this.confirmButton.mousePressed(() => {
            this.confirmButton.hide();
            this.input.hide();
            var message = `Welcome ${this.input.value()}!
            </br> Please wait for other players to join your game!`
            this.greeting.html(message);
            this.greeting.position(windowWidth / 5 + 25, windowHeight / 2 - 50);
            this.greeting.class("greeting");

            playerCount += 1;
            player.name = this.input.value();
            player.index = playerCount;

            player.addPlayer();
            player.updateCount(playerCount);
            player.getPosition();
        })

    }

    display() {
        this.show();
        this.hideButton();
    }
}