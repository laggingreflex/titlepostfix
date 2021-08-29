// var newPostfix should've be injected
try {
    if (!newPostfix || !newPostfix.length)
        throw new Error();
} catch (err) {
    var newPostfix = 'Untitled';
}

try {
    if (!document)
        throw new Error('No Document');
} catch (err) {
    console.error('No Document');
}

if (!document.originalTitleOnceSaved) {
    document.originalTitleOnceSaved = true;
    document.originalTitle = document.title;
}
document.title = document.originalTitle + ' - ' + newPostfix;
