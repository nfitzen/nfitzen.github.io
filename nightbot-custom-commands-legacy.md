---
layout: default
title: Nightbot Custom Commands
---
<!--
  ~ SPDX-FileCopyrightText: 2018-2021 Nathaniel Fitzenrider <nathaniel.fitzenrider@gmail.com>
  ~
  ~ SPDX-License-Identifier: CC-BY-ND-4.0+
  ~ SPDX-License-Identifier: CC0-1.0+
  -->

<!-- The following is licensed under CC-BY-ND-4.0+: -->

# Nightbot Custom Commands

So I made a few custom commands for [Nightbot].
They simply spit out the [Super Mario Odyssey](//speedrun.com/smo) world records automatically for different categories.

Here are the [Nightbot] commands:

<!-- The following is licensed under CC0-1.0+: -->

[Any% (1P)][any%]:

```!commands add !wr World record: $(eval let top=$(urlfetch json https://www.speedrun.com/api/v1/leaderboards/76r55vd8/category/w20w1lzd?var-68km3w4l=zqoyz021&top=1&embed=players).data;let time=new Date(null);time.setSeconds(top.runs[0].run.times.primary_t);time.toISOString().slice(11,19).match(/(?![0:]+).+/)+" by "+top.players.data[0].names.international;)```

[All Moons (AUM)][aum]:

```!commands add !aumwr All Moons WR: $(eval let top=$(urlfetch json https://www.speedrun.com/api/v1/leaderboards/76r55vd8/category/wk6719ed?top=1&embed=players).data;let time=new Date(null);time.setSeconds(top.runs[0].run.times.primary_t);time.toISOString().slice(11,19).match(/(?![0:]+).+/)+" by "+top.players.data[0].names.international;)```

[Partial Game RTAs (includes all of them!)][partial game] (2-part command; both are required):

```!commands add !partwr -a=n!partwr2notforenduser $(eval let choice=`$(1)`;choice=choice.toLowerCase();var srcvar;switch (choice) {case "ccs":srcvar="jqz05ek1 CCS";break;case "lwcl":srcvar="9qjdg6eq LWCL";break;case "mssl":srcvar="klr504w1 MSSL";break;case "bm":srcvar="jq672931 BM";break; default:srcvar="jqz05ek1 CCS";}srcvar;)```

```!commands add n!partwr2notforenduser $(2) World Record: $(eval const choice="$(1)"; let top=$(urlfetch json https://www.speedrun.com/api/v1/leaderboards/m1mxxw46/category/7dgrjo7k?top=1&embed=players&var-kn04o9ol=$(1)).data;let time=new Date(null);time.setSeconds(top.runs[0].run.times.primary_t);time.toISOString().slice(11,19).match(/(?![0:]+).+/)+" by "+top.players.data[0].names.international;) (Use !partwr CCS, LWCL, MSSL, or BM for partial game WR)```

[Koopa Freerunning RTA]:

```!commands add !kfrtawr KFRTA World record: $(eval let top=$(urlfetch json https://www.speedrun.com/api/v1/leaderboards/m1mxxw46/category/jdz8olgd?embed=players&top=1).data;let time=new Date(null);time.setSeconds(top.runs[0].run.times.primary_t);time.toISOString().slice(11,19).match(/(?![0:]+).+/)+" by "+top.players.data[0].names.international;)```

Just copy & paste those into Twitch chat and it'll add the command! (You must be mod or above, obviously.)

I'm thinking about adding an API for these so that
it'll be easier, possibly faster, and they would have the ability to expand to other leaderboards and games.

[nightbot]: //beta.nightbot.tv/

[any%]: //www.speedrun.com/smo#Any

[aum]: //www.speedrun.com/smo#All_Unique_Moons

[partial game]: //www.speedrun.com/smoce#Partial_Game_RTAs

[Koopa Freerunning RTA]: //www.speedrun.com/smoce#Koopa_Freerunning_RTA
