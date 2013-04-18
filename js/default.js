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
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
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

    function pokemon1Random_ButtonClickHandler(eventInfo) {
        random1 = Math.floor(Math.random() * (98 - 1 + 1)) + 1;
        pokemon1 = random1;
    }

    function pokemon2Random_ButtonClickHandler(eventInfo) {
        random2 = Math.floor(Math.random() * (98 - 1 + 1)) + 1;
        pokemon2 = random2;
    }

    function swap_ButtonClickHandler(eventInfo) {
        var temp = pokemon1;
        pokemon1 = pokemon2;
        pokemon2 = temp;
    }

    function randomize_ButtonClickHandler(eventInfo) {
        random1 = Math.floor(Math.random() * (98 - 1 + 1)) + 1;
        pokemon1 = random1;

        random2 = Math.floor(Math.random() * (98 - 1 + 1)) + 1;
        pokemon2 = random2;
    }

    app.start();
})();
