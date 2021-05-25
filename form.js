class Form{
    constructor(){}

    display(){
        var title = createElement("h1")
        title.html("Car Racing")
        title.position(130,0)
        var input = createInput("Name")
        input.position(130,160)
        var button = createButton("START")
        button.position(230,200)
        button.mousePressed(function(){
            button.hide()
            input.hide()
            var name = input.value()
            playerCount+=1
            player.updateCount(playerCount)
            player.updateInfo(name)
            var greeting = createElement("h2")
            greeting.html("Hello "+ name)
            greeting.position(130,160)
            
        })
    }
}