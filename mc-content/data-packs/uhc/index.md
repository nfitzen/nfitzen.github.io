---
layout: default
title: UHC Data Pack
---

# UHC Data Pack
This is a Minecraft data pack that I've been working on for the past week (4/10/19)

It is an easy-to-use data pack that contains everything necessary for UHC.

To setup, go anywhere\* you wish to be the center and run `/function uhc:setup`.
Participating players may join your world before or after setup. To begin the game, run
`/function uhc:begin` or click on the link that the setup gave you.

:warning: WARNING: INCLUDES MEMES. PROCEED WITH CAUTION :warning:

[Download][v2.0.0] \(Version 2.0.0\)

The best <del>meme</del> experience is with the resource pack (otherwise things will be confusing).
Add these to your server.properties or [download the resource pack][resources]

```
resource-pack=https\://nfitzen.keybase.pub/mc-content/datapacks/uhc/resources.zip
resource-pack-sha1=e40df64543112c91f37b897fe3ba17a12479ac86
```

\* Anywhere within 1,000 blocks, noninclusive, of the default world border

## Changelog

### [v2.0.0] (4/29/2019)

- **Minecraft 1.14+ only!**
- Added "head eating" mechanic to replace instant health
    - Upon death, players drop their heads
    - These heads can then give you health by pressing Q while hovering over it (dropping it)
- Rare chance of receiving a Ben Shapiro head instead of a player head (retextured Diamond Sword)
- "5 minutes until total worldborder collapse" is _actually_ 5 minutes until total worldborder collapse
- Worldborder shrinks faster 2 hours into the UHC
- I should probably make the meme data pack separate since half of future ones will be inside jokes with friends

### [v1.1.1] (4/14/2019)

- Massive bug fixes (1.1.0 doesn't even work LOL)

### v1.1.0 (4/14/2019)
- Fixed shrinking worldborder 5m after it's 100 blocks wide
- Added announcement when 5m before total worldborder collapse
- Removed killing all non-player entities during setup since it might break villages \& abandoned mineshafts
- Spawn doesn't leave any barriers behind on game start

### [v1.0.0] (4/10/2019)
- **Initial release**
- Worldborder shrinks from 2,000&nbsp;x&nbsp;2,000 blocks to 100&nbsp;x&nbsp;100 gradually (3 hours)
- Spreads players evenly across the map
- Does not include team functionality
- I liked [Xisumavoid](//www.xisumavoid.com/)'s system for segmenting data packs, as it makes it more clean
    - However, since this is a UHC data pack, and the world is only temporary, I felt no need for an uninstall script
- <del>Dumb memes:tm:</del>

[v2.0.0]: UHC-v2.0.0.zip

[v1.1.1]: UHC-v1.1.1.zip

[v1.1.0]: UHC-v1.1.0.zip

[v1.0.0]: UHC-v1.0.0.zip

[resources]: //keybase.pub/nfitzen/mc-content/datapacks/uhc/resources.zip