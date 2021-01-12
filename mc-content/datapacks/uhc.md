---
layout: default
title: UHC Data Pack
---
<!--
  ~ SPDX-FileCopyrightText: 2018-2021 Nathaniel Fitzenrider <nathaniel.fitzenrider@gmail.com>
  ~
  ~ SPDX-License-Identifier: MIT
  -->

# UHC Data Pack
This is a Minecraft data pack that I've been working on for the past week (4/10/19)

It is an easy-to-use data pack that contains everything necessary for UHC.

To setup, go anywhere\* you wish to be the center and run `/function uhc:setup`.
Participating players may join your world before or after setup. To begin the game, run
`/function uhc:begin` or click on the link that the setup gave you.

:warning: WARNING: INCLUDES MEMES. PROCEED WITH CAUTION :warning:

[Download][v2.2.1] (Version 2.2.1)

[Download Meme Pack][memes-v1.0.0] (Version 1.0.0)

Set these values in your server.properties; it's not a must but recommended for full functionality:
~~~
gamemode=3
# force-gamemode only for killing disconnected players! Set to false to allow mid-game disconnections!
force-gamemode=true
~~~

The meme zip requires a resource pack. Add these to your server.properties or [download the pack][meme-resources]

~~~
resource-pack=https\://nfitzen.keybase.pub/mc-content/datapacks/uhc/addons/memes/resources.zip
resource-pack-sha1=85c9b40c4f7f50e873293fe99bfaf99adf5f4f89
~~~

\* Anywhere within 1,000 blocks, noninclusive, of the default world border, and at least 107 blocks below the build limit

## Changelog

### [v2.2.1] (8/16/2019)
- Having the HP/2 below name was a bad idea (notice a trend with these lol)
- Players can now toggle recorded round notices in the middle of the round (and can turn them off)
- Further improvements to overall system stability and other minor adjustments have been made to enhance the user experience
- To-do:
    - Implement proper addon API support. Right now, the meme pack (just Ben Shapiro memes lol) has custom support to disable the default game-end message
    - UHC teams. I'll probably implement this after I make a proper addon API support, like a developer should lol

### [v2.2.0] (5/4/2019)
- Accelerating worldborder was a dumb idea
- Actually reset the UHC dead score
- Better alive player calculation
- Meme pack is now separate from the base pack
- 20-minute markers for those doing recorded rounds


### v2.1.0 (4/30/2019)
- Worldborder collapses faster starting 1h in, and goes even faster 2h in
- Uses 1.14's `/schedule` command to reduce lag

### v2.0.3 (4/30/2019)
- Player win message doesn't appear after every death
    - It also runs every second now, to reduce server lag.

### v2.0.2 (4/30/2019)
- Fixed "head eating": didn't work because I forgot a comma in the loot table JSON LOL
- Player heads now have less risk of giving a spectator regen

### v2.0.1 (4/30/2019)
- Added saturation on spawn platform for those online when running the setup function. It seems I forgot that...

### v2.0.0 (4/29/2019)
- **Minecraft 1.14+ only!**
- Added "head eating" mechanic to replace instant health
    - Upon death, players drop their heads
    - These heads can then give you health by pressing Q while hovering over it (dropping it)
- Rare chance of receiving a Ben Shapiro head instead of a player head (retextured Diamond Sword)
- "5 minutes until total worldborder collapse" is _actually_ 5 minutes until total worldborder collapse
- Worldborder shrinks faster 2 hours into the UHC
- I should probably make the meme data pack separate since half of future ones will be inside jokes with friends

### v1.1.1 (4/14/2019)
- Massive bug fixes (1.1.0 doesn't even work LOL)

### v1.1.0 (4/14/2019)
- Fixed shrinking worldborder 5m after it's 100 blocks wide
- Added announcement when 5m before total worldborder collapse
- Removed killing all non-player entities during setup since it might break villages \& abandoned mineshafts
- Spawn doesn't leave any barriers behind on game start
### v1.0.0 (4/10/2019)
- **Initial release**
- Worldborder shrinks from 2,000&nbsp;x&nbsp;2,000 blocks to 100&nbsp;x&nbsp;100 gradually (3 hours)
- Spreads players evenly across the map
- Does not include team functionality
- I liked [Xisumavoid](//www.xisumavoid.com/)'s system for segmenting data packs, as it makes it more clean
    - However, since this is a UHC data pack, and the world is only temporary, I felt no need for an uninstall script
- <del>Dumb memes:tm:</del>

[memes-v1.0.0]: //keybase.pub/nfitzen/mc-content/datapacks/uhc/addons/memes/releases/UHCMemes-v1.0.0.zip
{:target="_blank"}

[v2.2.0]: //nfitzen.keybase.pub/mc-content/datapacks/uhc/pack/releases/UHC-v2.2.0.zip
[v2.2.1]: //nfitzen.keybase.pub/mc-content/datapacks/uhc/pack/releases/UHC-v2.2.1.zip

[meme-resources]: //keybase.pub/nfitzen/mc-content/datapacks/uhc/addons/memes/resources.zip
{:target="_blank"}
