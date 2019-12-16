chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    if (request) {
        if (request.message) {
            if (request.message == "version") {
                sendResponse({ version: 1.0 })
            }
        }
    }
    return true
})