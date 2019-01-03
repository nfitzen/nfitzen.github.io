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

[Partial Game RTAs (includes all of them!)][partial game] (2-part command; both are required):

```!commands add !partwr -a=!partwr2dontuse $(eval let choice=`$(1)`;choice=choice.toLowerCase();var srcvar;switch (choice) {case "ccs":srcvar="jqz05ek1 CCS";break;case "lwcl":srcvar="9qjdg6eq LWCL";break;case "mssl":srcvar="klr504w1 MSSL";break;case "bm":srcvar="jq672931 BM";break; default:srcvar="jqz05ek1 CCS";}srcvar;)```

```!commands add !partwr2dontuse $(2) World Record: $(eval const choice="$(1)"; let top=$(urlfetch json https://www.speedrun.com/api/v1/leaderboards/m1mxxw46/category/7dgrjo7k?top=1&embed=players&var-kn04o9ol=$(1)).data;let time=new Date(null);time.setSeconds(top.runs[0].run.times.primary_t);time.toISOString().slice(11,19).match(/(?![0:]+).+/)+" by "+top.players.data[0].names.international;) (Use !partwr CCS, LWCL, MSSL, or BM for partial game WR)```

Just copy & paste those into Twitch chat and it'll add the command! (You must be mod or above, obviously.)

[nightbot]: //beta.nightbot.tv/
{:target="_blank"}

[any%]: //speedrun.com/smo#Any
{:target="_blank"}

[aum]: //speedrun.com/smo#All_Unique_Moons{:target="_blank"}

[partial game]: //speedrun.com/smoce#Partial_Game_RTAs{:target="_blank"}
