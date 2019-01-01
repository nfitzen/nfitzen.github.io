---
layout: default
title: Nightbot Custom Commands
---
# Nightbot Custom Commands

So I made a custom command for [Nightbot](//beta.nightbot.tv/){:target="_blank"}.
It simply spits out the [Super Mario Odyssey Any% (1P)](//speedrun.com/smo#Any) world record automatically.

Here is the Nightbot command (you can set the name to whatever; I use !wr):

```!commands add !wr World record: $(eval let top=$(urlfetch json https://www.speedrun.com/api/v1/leaderboards/76r55vd8/category/w20w1lzd?var-68km3w4l=zqoyz021&top=1&embed=players).data;let time=new Date(null);time.setSeconds(top.runs[0].run.times.primary_t);time.toISOString().slice(11,19).match(/(?![0:]+).+/)+" by "+top.players.data[0].names.international;)```

Just copy & paste that into Twitch chat and it'll add the command! (You must be mod or up, obviously.)
