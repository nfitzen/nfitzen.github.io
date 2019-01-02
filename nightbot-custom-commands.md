---
layout: default
title: Nightbot Custom Commands
---
# Nightbot Custom Commands

So I made a few custom commands for [Nightbot].
They simply spit out the [Super Mario Odyssey Any% (1P)](//speedrun.com/smo#) world records automatically for different categories.

Here are the [Nightbot] commands (you can set the name to whatever; I use !wr, and I'd use !aumwr):

[Any%]:

```!commands add !wr World record: $(eval let top=$(urlfetch json https://www.speedrun.com/api/v1/leaderboards/76r55vd8/category/w20w1lzd?var-68km3w4l=zqoyz021&top=1&embed=players).data;let time=new Date(null);time.setSeconds(top.runs[0].run.times.primary_t);time.toISOString().slice(11,19).match(/(?![0:]+).+/)+" by "+top.players.data[0].names.international;)```

[All Unique Moons (AUM)][aum]:

```!commands add !aumwr AUM World record: $(eval let top=$(urlfetch json https://www.speedrun.com/api/v1/leaderboards/76r55vd8/category/wk6719ed?top=1&embed=players).data;let time=new Date(null);time.setSeconds(top.runs[0].run.times.primary_t);time.toISOString().slice(11,19).match(/(?![0:]+).+/)+" by "+top.players.data[0].names.international;)```

Just copy & paste those into Twitch chat and it'll add the command! (You must be mod or above, obviously.)

[nightbot]: //beta.nightbot.tv/
{:target="_blank"}

[any%]: //speedrun.com/smo#Any
{:target="_blank"}

[aum]: //speedrun.com/smo#All_Unique_Moons
