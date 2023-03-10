chrome.action.onClicked.addListener(function (currentTab) {
  chrome.tabs.query({ currentWindow: true }, (tabs) =>
    chrome.tabs.remove(
      tabs
        .filter((tab) => !tab.pinned)
        .filter((tab) => currentTab.id !== tab.id)
        .map((tab) => tab.id)
    )
  );
});
