function muteTabsMatchingPattern() {
	let pattern = browser.storage.sync.get('tabMuteTogglePattern');
	let query = pattern => {
		return browser.tabs.query({
			title: pattern.tabMuteTogglePattern
		});
	}
	pattern.then(query).then(function(tabs) {
		for (tab of tabs) {
			browser.tabs.update(tab.id, {
				muted: ! tab.mutedInfo.muted
			});
		}
	});
}

browser.browserAction.onClicked.addListener(muteTabsMatchingPattern);