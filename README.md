# MuteTabsMatchingPattern
Mute Firefox tabs matching a pattern

I wrote this just so I can mute Twitch streams via a hotkey without tabbing to Firefox and also without changing the most-recently-focused tab.

It's designed to work with the following AutoHotKey script to make it globally accessible:

```autohotkey
SetTitleMatchMode 2
^!+x::
 WinActivate,Mozilla Firefox
 Send, ^+O
 Send, !{tab}
 return
 ```
