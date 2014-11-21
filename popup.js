document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('input');
    input.addEventListener('keyup', function() {
        chrome.storage.sync.set({
            'titlepostfix': input.value
        });
    });
});
