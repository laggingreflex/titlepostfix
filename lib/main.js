const {
    Cc, Ci
} = require('chrome');


var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');
var windows = require('sdk/windows');

var {
    setInterval
} = require('sdk/timers');
var ss = require('sdk/simple-storage');

try {
    var newPostfix = ss.storage.newPostfix;
} catch (err) {
    var newPostfix = 'Untitled';
}

var button = buttons.ActionButton({
    id: 'titlepostfix',
    label: 'titlepostfix',
    icon: {
        '16': './icon-16.png',
        '32': './icon-32.png',
        '64': './icon-64.png'
    },
    onClick: handleClick
});

var prompts = Cc['@mozilla.org/embedcomp/prompt-service;1'].getService(Ci.nsIPromptService);

var check = {
    value: false
};

function handleClick(state) {
    var input = {
        value: newPostfix
    };
    prompts.prompt(null, 'titlepostfix', 'Enter New Postfix', input, null, check);
    newPostfix = ss.storage.newPostfix = input.value;
}



setInterval(function() {
    // for (let tab of windows.browserWindows) {
    for (let tab of tabs) {
        if (!tab.originalTitle)
            tab.originalTitle = tab.title;
        tab.title = tab.originalTitle + ' - ' + newPostfix;
    }
}, 1000);
