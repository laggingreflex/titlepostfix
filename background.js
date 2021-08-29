setInterval(function() {
    chrome.storage.sync.get('titlepostfix', function(value) {
        changeTitle(value.titlepostfix);
    });
}, 1000);

function changeTitle(newPostfix) {
    chrome.windows.getAll({
        'populate': true
    }, function(windows) {
        windows.forEach(function(window) {
            chrome.tabs.getAllInWindow(window.id, function(tabs) {
                tabs.forEach(function(tab) {
                    chrome.tabs.executeScript(tab.id, {
                        code: 'var newPostfix="' + newPostfix + '"',
                    }, function() {
                        chrome.tabs.executeScript(tab.id, {
                            file: 'background-script.js',
                        });
                    });
                });
            });
        });
    });
}




