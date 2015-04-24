(function() {
    var onHubStart = function () {
        var id = $.connection.hub.id;
        $('#connectionId').text(id);

        var x = (screen.width / 2) - 100;
        var y = (screen.height / 2) - 100;

        var url = '/popup.cshtml?parentId=' + encodeURIComponent(id);
        url += '#' + encodeURIComponent($('#token').text());
        window.open(url, 'popup', 'width=200, height=200, top=' + y + ', left=' + x);
    };

    var sendToken = function(token) {
        $('#signalrToken').text(token);

        console.info('stopping signalr hub');
        $.connection.hub.stop();
    };

    $(document).ready(function () {
        $('#popupBtn').on('click', function (event) {
            event.preventDefault();

            $('#signalrToken').text('');
            $('#connectionId').text('');

            var hub = $.connection.popupCommunicationHub;
            hub.client.sendToken = sendToken;

            console.info('starting signalr hub');
            $.connection.hub.start()
                .done(onHubStart)
                .fail(function () { console.log('Could not Connect!'); });
        });
    });
})();

