function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    tabMuteTogglePattern: document.querySelector("#pattern").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#pattern").value = result.tabMuteTogglePattern || "*YouTube*";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("tabMuteTogglePattern");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);