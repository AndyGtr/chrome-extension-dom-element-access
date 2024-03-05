chrome.action.onClicked.addListener((tab) => {
    // Check if the current tab's URL is the one you're interested in
    if (!tab.url.includes('bl.uk')) {
        alert('URL not recognized!');
        return;
    }

    // Execute the content script in the current tab
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js'],
    });
});
