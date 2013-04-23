// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var random1 = Math.floor(Math.random() * (98 - 1 + 1)) + 1;
    var random2 = Math.floor(Math.random() * (98 - 1 + 1)) + 1;
    var pokemon1 = random1;
    var pokemon2 = random2;

    app.onactivated = function (args) {
        document.getElementById("pokemon1Select").selectedIndex = pokemon1;
        document.getElementById("pokemon2Select").selectedIndex = pokemon2;
        getFusion();
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());

            // Retrieve the button and register our event handler. 
            var randomPokemon1Button = document.getElementById("randomPokemon1Button");
            randomPokemon1Button.addEventListener("click", randomPokemon1_ButtonClickHandler, false);

            // Retrieve the button and register our event handler. 
            var randomPokemon2Button = document.getElementById("randomPokemon2Button");
            randomPokemon2Button.addEventListener("click", randomPokemon2_ButtonClickHandler, false);

            // Retrieve the button and register our event handler. 
            var swapButton = document.getElementById("swapButton");
            swapButton.addEventListener("click", swap_ButtonClickHandler, false);

            // Retrieve the button and register our event handler. 
            var randomizeButton = document.getElementById("randomizeButton");
            randomizeButton.addEventListener("click", randomize_ButtonClickHandler, false);

            var pokemon1Select = document.getElementById("pokemon1Select");
            pokemon1Select.addEventListener("change", getFusion, false);

            var pokemon2Select = document.getElementById("pokemon2Select");
            pokemon2Select.addEventListener("change", getFusion, false);
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    function randomPokemon1_ButtonClickHandler(eventInfo) {
        random1 = Math.floor(Math.random() * (98 - 1 + 1)) + 1;
        pokemon1 = random1;
        document.getElementById("pokemon1Select").selectedIndex = pokemon1;
        getFusion();
    }

    function randomPokemon2_ButtonClickHandler(eventInfo) {
        random2 = Math.floor(Math.random() * (98 - 1 + 1)) + 1;
        pokemon2 = random2;
        document.getElementById("pokemon2Select").selectedIndex = pokemon2;
        getFusion();
    }

    function swap_ButtonClickHandler(eventInfo) {
        var temp = pokemon1;
        pokemon1 = pokemon2;
        pokemon2 = temp;
        document.getElementById("pokemon1Select").selectedIndex = pokemon1;
        document.getElementById("pokemon2Select").selectedIndex = pokemon2;
        getFusion();
    }

    function randomize_ButtonClickHandler(eventInfo) {
        random1 = Math.floor(Math.random() * (98 - 1 + 1)) + 1;
        pokemon1 = random1;

        random2 = Math.floor(Math.random() * (98 - 1 + 1)) + 1;
        pokemon2 = random2;

        document.getElementById("pokemon1Select").selectedIndex = pokemon1;
        document.getElementById("pokemon2Select").selectedIndex = pokemon2;
        getFusion();
    }

    function setPokemon1Img(pokemon1) {
        document.getElementById("pokemon1Img").src="http://images.alexonsager.net/pokemon/" + pokemon1 + ".png";
    }

    function setPokemon2Img(pokemon2) {
        document.getElementById("pokemon2Img").src="http://images.alexonsager.net/pokemon/" + pokemon2 + ".png";
    }

    function setFusionImg(pokemon1, pokemon2) {
        document.getElementById("fusedPokemonImg").src="http://images.alexonsager.net/pokemon/fused/" + pokemon1 + "/" + pokemon1 + "." + pokemon2 + ".png";
    }

    function getFusion() {
        setPokemon1Img(document.getElementById("pokemon1Select").value);
        setPokemon2Img(document.getElementById("pokemon2Select").value);
        setFusionImg(document.getElementById("pokemon1Select").value, document.getElementById("pokemon2Select").value);
    }

    app.start();
})();
