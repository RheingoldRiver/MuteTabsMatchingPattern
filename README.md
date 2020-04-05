# MuteTabsMatchingPattern
Mute Firefox tabs matching a pattern

I wrote this just so I can mute Twitch streams via a hotkey without tabbing to Firefox and also without changing the most-recently-focused tab.

It's designed to work with the following AutoHotKey script to make it globally accessible:

```autohotkey
SetTitleMatchMode 2
^!+x::
	IfWinActive ahk_class MozillaWindowClass
	{
		Send, ^+O
		return
	}
	IfWinNotExist ahk_class MozillaWindowClass
		return
	ControlSend,ahk_parent, ^+O
	return
 ```

Installation link: https://addons.mozilla.org/en-US/firefox/addon/mutetabsmatchingpattern/
