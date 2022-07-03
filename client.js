const act1 = [
  "On the The Twilight Strand kill first mob ➞ Hillock",
  "The Coast don't kill anything ➞ Mud flats (don't forget the Waypoint)",
  "Mud flats get the 3xGlyphs then ➞ The Submerged Passage",
  "The Submerged Passage get Waypoint, take Waypoint back to The Coast ➞ The Tidal Island",
  "The Tidal Iland kill Hailrake get Medicine Chest, Town Portal to go back to town",
  "Waypoint to The Submerged Passage",
  "The Submerged Passage look for long staircase or bridge",
  "Leave Town Portal at staircase or bridge ➞ The Ledge",
  "The Ledge, Waypoint to town, use Town Portal you left at the staircase or bridge",
  "Go right of staircase for The Flooded depths",
  "Find and kill The Deep Dweller then log out",
  "Waypoint to The Ledge ➞ The Climb",
  "The Climb (3 stalagmites side of waypoint points to exit) you don't really need the Waypoint ➞ The Lower Prison",
  "The Lower Prison take Waypoint, do trial on first level ➞ The Lower Prison ➞ The Upper Prison kill Brutus, log out",
  "Waypoint to Prisoner's Gaste ➞ The Ship Graveyard ➞ The Ship Graveyard Cave and leave a Town Portal in front",
  "Find The Cavern of Wrath Waypoint to town",
  "Take your Town Portal (just entering the The Cavern of Wrath completes the quest)",
  "Enter The Ship Graveyard Cave get the AllFlame and log out",
  "Waypoint to The Ship Graveyard then find and kill Fairgraves, log out",
  "Waypoint The Cavern of Wrath ➞ kill Merveil ➞ Act 2",
]
const act2 = [
  "The Southern forest ➞ Town",
  "In town, head North East to The Old fields find and leave a Town Portal outside The Den then ➞ The Crossroads",
  "The Crossroads ➞ Waypoint to town and take the Town Portal you left outside The Den",
  "Go in The Den and Kill The Great White Beast then log out",
  "Turn in The Great White Beast then Waypoint to The Crossroads ➞ North to The Chamber of Sins",
  "In The Chamber of Sins, get the Waypoint, the waypoint points in direction of the next level",
  "The Chamber of Sins level 2 do the trial it is most likely north, Find the long hallway, kill Fidelitas get the Baleful Gem then log out",
  "Turn in Intruders in Black",
  "Get Herald reward if no herald good for your build get Summon Skitter Bots, check vendors ,Waypoint to The Crossroads ➞ South to The Fellshrine Ruins",
  "Find The Crypt, The Crypt loops around ➞ trial then log out, The Riverways do Einhar's quest, get red beast ➞ The Western Forest",
  "The Western Forest get the Waypoint (Alira is always the same side oft he road than Waypoint and The Weaver's Chamber on opposite side)",
  "Find and ➞ The Weaver's Chamber and kill The weaver then log out",
  "Turn in Sharp and Cruel",
  "Waypoint to The Crossroads go north to The Broken Bridge, follow path , try find red beast if you didn't do it earlier",
  "Kill Kraitlin log out then back in , go to The Riverways , follow path north ➞ The Wetlands",
  "The Wetlands kill Oak and get the Waypoint just north, Waypoint to The Western Forest and help Allira",
  "Then find the path, follow it to Arteri, kill him and get the Thaumetic Emblem, log out",
  "Waypoint to Act 1 get passive point reward and check vendor, Waypoint back to Act 2 town then The Wetlands ➞ The Vaal ruins",
  "The Vaal ruins ➞ The Northern Forest ➞ The caverns find and Waypoint to town",
  "Turn in The Root of the Problem",
  "Waypoint The caverns ➞ find The Ancient Pyramid and kill Vaal Oversoul (dont forget crafting)",
  "Log out, vendor then Waypoint to Act 3"
]
const act3 = [
  "Go north help Clarissa dont forget to wait for her",
  "In town ➞ The Slums ➞ The Crematorium, Waypoint to menagerie for unique",
  "Waypoint The Crematorium trial kill Piety pick up Tolman's Bracelet log out",
  "Talk to Clarissa for Sewer Keys",
  "Turn in Lost in Love and pick PunishmentPunishment",
  "Run back to The Slums ➞ The Sewers",
  "Get Waypoint and 3xPlatinum ➞ The Marketplace ➞ The Catacombs do trial log out",
  "Waypoint The Marketplace ➞ The Battlefront normally opposite of The Catacombs",
  "The Battlefront get Waypoint and The Ribbon Spool next to the waypoint ➞ The Docks (if level 23 or less ➞ The Solaris Temple )",
  "In The Docks find the Thaumetic Sulphite at the end of a dock log out, turn in quests check vendors",
  "Waypoint The Battlefront north ➞ The Solaris Temple get Waypoint ➞ The Solaris Temple level 2 turn in The Ribbon Spool",
  "Waypoint The Sewers get Crafting ➞ The Ebony Barracks",
  "Kill General Gravicius (very rippy) ➞ The Lunaris Temple",
  "The Lunaris Temple dont kill Kole get Waypoint ➞ The Lunaris Temple level 2",
  "The Lunaris Temple level 2 look for easy skips,",
  "Paths 1 cart = right way, 2 carts = wrong way to avoid dying to Tentacle Miscreation keep moving",
  "Turn in Sever the Right Hand",
  "Kill Piety get Crafting and log out",
  "Turn in quests Waypoint The Ebony Barracks ➞ The Imperial Gardens",
  "The Imperial Gardens get Waypoint north ➞ The Library , get Waypoint ➞ Loose Candle ➞ The Archives",
  "Turn in A Fixture of Fate",
  "Get 4xGolden Pages log out, Waypoint to The Library",
  "Waypoint The Imperial Gardens do trial get Crafting, Town Portal to town get Waypoint Aspirant's plaza",
  "Waypoint The Imperial Gardens ➞ The Sceptre of God ➞ The Upper Sceptre of God kill Dominus",
  "The Upper Sceptre of God ➞ The Aqueduct"
]
const act4 = [
  "The Aqueduct ➞ Town ➞ The Dried Lake",
  "The Dried Lake kill Voll, Emperor of Purity, get Crafting , if underleveled (27-28) keep clearing Town Portal",
  "Turn in Breaking the Seal",
  "The Mines ➞ The Mines level 2 ➞ Deshret's spirit ➞ The Crystal Veins",
  "The Crystal Veins get Waypoint and Crafting ,Waypoint to town get passive point then Waypoint to Aspirant's plaza",
  "Ascend ➞ Waypoint to The Crystal Veins",
  "Daresso's Dream ➞ The Grand Arena get Waypoint ➞ Waypoint to The Crystal Veins",
  "Kaom's Dream ➞ Kaom's Stronghold kill King Kaom get The Eye of Fury Town Portal vendor",
  "Waypoint to The Grand Arena ➞ Kill Daresso, King of Swords, Waypoint to The Crystal Veins",
  "Turn in quests ➞ The Belly of the Beast ➞ The Belly of the Beast level 2 ➞ Kill Piety",
  "The Belly of the Beast level 2 kill Piety (don't get hit by beam) ➞ The Harvest",
  "The Harvest get Waypoint",
  "Kill Doedre Darktongue get Malachai's Lungs",
  "Kill Maligaro, The Inquisitor get Malachai's Heart",
  "Kill Shavronne of Umbra get Malachai's Entrails",
  "Turn in quests to Piety ➞ Kill Malachai, The Nightmare Town Portal",
  "Turn in The Eternal Nightmare",
  "Check vendors for 4-links, turn in quests ➞ The Ascent",
  "The Ascent ➞ get Crafting in The Ascent, pull the lever next to The Resonator"
]
const act5 = [
  "The Slave Pens ➞ kill Overseer Krow",
  "Go to town ➞ talk to Lani free ring",
  "The Control Blocks ➞ Get the Miasmeter ➞ Kill Justicar Casticus ➞ Oriath Square",
  "Oriath Square ➞ The Templar Courts get Waypoint ➞ The Chamber of Innocence",
  "Kill High Templar Avarius (Summon 10 packs each phase) avoid lasers",
  "Go out take Waypoint to town, talk to Bannon for Jewel and Flask (Silver is best)",
  "Waypoint back to The Chamber of Innocence ➞ The Torched Courts ➞ The Ruined Square",
  "The Ruined Square ➞ get Waypoint then go to The Ossuary",
  "Get Sign of Purity and Crafting Town Portal town and vendor",
  "Waypoint to The Ruined Square ➞ South for The Reliquary",
  "Get 3xKitava's Torments check 4 corners of map",
  "Town Portal town, turn in quest",
  "Waypoint to The Ruined Square ➞ The Cathedral Rooftop ➞ kill Kitava, the Insatiable"
]
const act6 = [
  "Clear The Twilight Strand Town Portal town",
  "Turn in Fallen from Grace",
  "The Coast ➞ Waypoint skip side quest ➞ The Mud Flats",
  "Kill The Dishonoured Queen for Eye of Conquest then go West ➞ Karui Fortifications",
  "Karui Fortifications ➞ The Karui Fortress kill Tukohama, Karui God of War ➞ Karui Fortifications",
  "Karui Fortifications ➞ The Ridge ➞ The Lower Prison",
  "The Lower Prison get Waypoint do trial ➞ Shavronne's Tower",
  "Shavronne's Tower ➞ Go up all stairs ➞ kill Shavronne the Returned and Reassembled Brutus",
  "Go to the Warden's Chamber, get Crafting ➞ Prisoner's Gate (not worth killing Abberath, the Cloven One now) ➞ The Western Forest (follow the road)",
  "The Western Forest get Waypoint ➞ The Riverways",
  "The Riverways get Waypoint ➞ The Wetlands",
  "The Wetlands ➞ The Spawning Ground, kill Ryslatha, the Puppet Mistress",
  "Town Portal to town, vendor place items into currency tab , turn in quests for 4-link helm",
  "Waypoint to The Riverways ➞ The Southern Forest get Waypoint",
  "The Southern Forest ➞ The Cavern of Anger (ignore betrayal) ➞ The Beacon",
  "The Beacon get Waypoint get Crafting, do the pillar event",
  "Click switch and the beacon, then run opposite direction, Weylam will instantly appear",
  "Talk to weylam go to The Brine King's Reef ➞ kill The Brine King (if lazy or low on cold resist make portal to avoid lightning stage)"
]
const act7 = [
  "The Broken Bridge ➞ get Silver Locket for flask ➞ The Crossroads (don't forget beasts)",
  "The Crossroads Waypoint to town, do menagerie if beast gave something good",
  "Waypoint The Crossroads ➞ The Fellshrine Ruins ➞ The Crypt",
  "The Crypt do trial get Crafting ➞ level 2 in Sarcophagus",
  "Get Maligaro's Map, Town Portal to town, turn in quests",
  "Waypoint to The Crossroads ➞ The Chamber of Sins, get Crafting and put in the Maligaro's Map ➞ Maligaro's Sanctum",
  "Maligaro's Sanctum ➞ kill Maligaro, the Artist get Black Venom then Town Portal out",
  "Turn in Black Venom and get Obsidian Key ➞ The Chamber of Sins level2",
  "The Chamber of Sins level2 do the trial ➞ The Den",
  "The Den get Waypoint ➞ The Ashen Fields",
  "The Ashen Fields get Waypoint ➞ Fortress Encampent",
  "Fortress Encampent kill Greust, Lord of the Forest ➞ The Northern Forest ➞ Waypoint to town turn in quests",
  "Waypoint (Act 6) Prisoner's Gate ➞ The Valley of the Fire Drinker kill Abberath, the Cloven One (recommended around 1.6k life) Town Portal to town, turn in quest",
  "Waypoint (Back to Act 7) to The Northern Forest ➞ The Dread Thicket",
  "The Dread Thicket get 7xFireflies ➞ Den of Despair and kill Gruthkul, Mother of Despair (if hardcore wait until later)",
  "The Dread Thicket get rest 7xFireflies and Crafting, Town Portal to town",
  "Turn in quests, Waypoint to The Northern Forest",
  "The Northern Forest ➞ The Causeway get crafting and Waypoint, do Alva to get her in hideout ➞ The Vaal City",
  "If arrive and big hole follow ledge to West then North to Waypoint talk to Yeena",
  "Waypoint to town turn in quests Waypoint to Aspirant's plaza (Dont forget to set Soul of Ralakesh in the pantheon for less bleeding damage)",
  "Ascend (Don't forget Crafting)",
  "Vendor Waypoint to The Vaal City ➞ The Temple of decay",
  "The Temple of decay ➞ The Temple of decay level 2 get Crafting",
  "The Temple of decay level 2 ➞ Arakaali's Web, kill Arakaali, Spinner of Shadows"
]
const act8 = [
  "The Sarn Ramparts get Waypoint ➞ The Sarn Encampment",
  "Vendor ➞ The Toxic Conduits",
  "The Toxic Conduits ➞ Doedre's Cesspool ➞ The Cauldron , kill Doedre the Vile (stay melee range use granite flask)",
  "Sewer Outlet ➞ get Waypoint and crafting ➞ The Quay",
  "The Quay get the Ankh of Eternity ➞ Resurection Site talk to clarissa and kill Tolman",
  "The Quay ➞ The Grain Gate",
  "The Grain Gate get Waypoint ➞ The Imperial Fields",
  "The Imperial Fields follow path get Waypoint ➞ The Solaris Temple",
  "The Solaris Temple get Waypoint ➞ The Solaris Temple level 2",
  "The Solaris Temple level 2 ➞ Go in portal, kill Dawn, Harbinger of Solaris get Crafting",
  "Town Portal to town turn in quests Waypoint The Solaris Temple",
  "The Solaris Temple ➞ The Solaris Concourse get Waypoint ➞ The Harbour Bridge",
  "The Harbour Bridge ➞ The Lunaris Concourse get Waypoint ➞ The Lunaris Temple",
  "The Lunaris Temple get Waypoint ➞ The Lunaris Temple level 2",
  "The Lunaris Temple level 2 ➞ Go in portal kill Dusk, Harbinger of Lunaris get crafting, Town Portal to town",
  "Turn in quest Waypoint to The Solaris Concourse",
  "The Solaris Concourse ➞ The Harbour Bridge ➞ The Sky Shrine",
  "The Sky Shrine, kill Solaris and Lunaris (keep moving avoid skills) ➞ The Blood Aqueduct",
  "Can farm The Blood Aqueduct and do Delve",
  "Go back to Town Portal to The Lunaris Concourse (Act 8) ➞ The Bath House (act 8) to do Trial and get Crafting",
  "Find The High Gardens inside The Bath House (act 8) ➞ The Pools of Terror, kill Yugul, reflection of terror, Town Portal town turn in quests"
]
const act9 = [
  "To up to The Descent ➞ keep going down ➞ The Vastiri Desert",
  "The Vastiri Desert get Waypoint and crafting ➞ find Storm Blade",
  "Town Portal to town turn in quests (talk to sin + Petarus and Vanja) ➞ Waypoint back The Vastiri Desert ➞ The Oasis, kill Shakari Town Portal town",
  "Waypoint back to the vastiri desert ➞ The foothills (normally north)",
  "The Vastiri Desert ➞ The Foothills get Waypoint, ➞ The Boiling Lake ➞ kill The Basilisk get Crafting",
  "Town Portal to town, Waypoint to The Foothills ➞ find Calendar of Fortune ➞ The Tunnel",
  "The tunnel do the trial get crafting ➞ get Waypoint ➞ The quarry",
  "The Quarry, get Crafting and Waypoint in middle go north ➞ The Refinery, kill General Adus , get Trarthan Powder",
  "Town Portal to town turn in quests Waypoint back to The Quarry go West to ➞ Shrine of the winds, kill Garukhan, Queen of the Winds",
  "Town Portal to town, turn in quests, ➞ Waypoint to The Quarry ➞ The Belly of the Beast",
  "The Belly of the Beast ➞ The Rotting Core ➞ The Black Core",
  "Shavronne's Sorrow, kill Shavronne, Unbound ➞ back to The Rotting Core",
  "Doedre's Despair, kill Doedre, Darksoul ➞ back to The Rotting Core",
  "Maligaro's Misery, kill Maligaro, The Broken ➞ back to The Rotting Core, talk to sin",
  "The Black Heart, kill The Depraved Trinity Town Portal to town, take Waypoint to Oriath Docks"
]
const act10 = [
  "Go to The Cathedral Rooftop ➞ Cathedral Apex, save Bannon",
  "Go back The Cathedral Rooftop ➞ The Ravaged Square",
  "The Ravaged Square get Waypoint, make Town Portal on bridge before Waypoint, Waypoint to town vendor ➞ take Town Portal back to The Ravaged Square",
  "The Ravaged Square ➞ The Control Blocks ( if hc you can skip Vilenta is Rippy)",
  "The Control Blocks , take Waypoint ➞ find holes in gates to skip with movement skill",
  "Go in Arena kill Vilenta Town Portal to town",
  "Turn in quests Waypoint to The Ravaged Square ➞ The Ossuary",
  "The Ossuary ➞ find Elixir of Allure, do the Trial Town Portal to town",
  "Turn in quests Waypoint to The Ravaged Square ➞ The Torched Courts",
  "The Torched Courts ➞ The Desecrated Chambers take Waypoint, get Crafting ➞ The Sancrum of Innocence",
  "Kill Avarius, Reassembled, pick up The Staff of Purity, Town Portal to town, vendor turn in quests",
  "if lvl 68, do ascendency, if SC and want to rush to maps go ahead, if HC Strongly recommended to farm The Blood Aqueduct get ~lvl 70 then do ascendency",
  "Waypoint to The Ravaged Square , talk to Innocence ➞ The Canals",
  "The Canals ➞ The Feeding Trough, get Crafting ➞ Altar of Hunger",
  "Altar of Hunger, Kill Kitava, the Insatiable talk to Sin, take portal to Oriath",
  "In Oriath, talk to Lani, get movement speed Crafting North West of city"
]
const acts = { 1: act1, 2: act2, 3: act3, 4: act4, 5: act5, 6: act6, 7: act7, 8: act8, 9: act9, 10: act10 }

tips = [
  "- There's a crafting recipe after Brutus, but it is not worth picking up"+
  "- Look for 3-link wands at vendor and +1 skill gem type you are using<br/>"+
  "- Look for movement speed boots at vendor by using the search function, searching 'nn', thanks to /u/Door2doorcalgary for bring this up<br/>"+
  "- Pick up all small blues to vendor for alteration shards<br/>"+
  "- Wait until level ~10-12 for league mechanics<br/>"+
  "- Don't use chest armor, chest armor slow your movement speed<br/>"+
  "- Tri-color tri-link gives you a chromatic orb when sold to vendor<br/>"+
  "- It is worth killing blue mobs groups early, but not rare mobs as they give little experience compared to the time it takes to kill<br/>"+
  "- Frostblink is better than dash in many cases because it does damage",

  "- Still better not to use chest armor<br/>"+
  "- Look for movement speed boots at vendor by using the search function, searching 'nn'<br/>"+
  "- Doing Einhar's quest gives you a chance to beast craft a unique (because of the smaller pool of unique items to choose from, you have a higher chance to get a Tabula)<br/>"+
  "- You can start doing the league mechanic now<br/>"+
  "- It is worth going back to Act 1 sometimes, to check vendors at beginning of Act 2<br/>"+
  "- If you check vendors in Act 1, [Waypoint] back to Act 2 town, so when you log out you are saved in Act 2 not 1<br/>"+
  "- You can vendor Armourer's Scrap for Scrolls of Identification",
  
  "- No need to go back to Act 1 or 2 now<br/>"+
  "- Start looking from vendors and ground for 4-link chests for lvl 31<br/>"+
  "- Pick up rares and sell them for Orb of Transmutation shards<br/>"+
  "- Worth doing vaal side areas for vaal gems<br/>"+
  "- The docks are a great place to catch up in levels by killing blue packs<br/>",

  "- Don't farm tabula in aqueducts<br/>"+
  "- Aim for 60%+ all Elemental Resistances, use the crafting bench (Orb of Transmutations)<br/>"+
  "- Watch for items with 2 or + Elemental Resistances types<br/>"+
  "- Get Delve nodes but don't do delve until later<br/>",

  "- Granite flask is very good early<br/>"+
  "- Pick up all small rare items (4 slots less) for Transmutation Shards<br/>"+
  "- Level gems when loading into zones<br/>"+
  "- Only do vaal side areas if you don't have vaal skill you want<br/>",

  "- Try to be resist capped (75%) by crafting in Hideout<br/>"+
  "- If skills permit use rarety on kill support gem for better loot<br/>",

  "- Get granite flask<br/>"+
  "- Beast worth doing<br/>"+
  "- Keep enduring flasks ( worth 3-4 chaos beginning league)<br/>"+
  "- LvL 50 start doing vaal areas again<br/>",

  "- Get granite flask<br/>"+
  "- Beast worth doing<br/>"+
  "- Keep enduring flasks ( worth 3-4 chaos beginning league)<br/>"+
  "- LvL 50 start doing vaal areas again<br/>",

  "- Focus movement speed and life on items<br/>"+
  "- Check prophecies<br/>"+
  "- Don't forget to craft in hideout for resistances cap<br/>"+
  "- Can farm The Blood Aqueduct and do Delve<br/>"+
  "- Ziz farms The Blood Aqueduct for [2 hours].zone and gets a Tabula with humility cards<br/>"+
  "- SSF go to act 1 get bunch of skill gems and 2 wands with 3 sockets to lvl skill gems, to later vaal a lvl 20/20 gem to get a lvl 21<br/>",

  ""
]

var step = 0
var act = 1
var avancement = acts[act][step]
var avancementTips = tips[act-1]
var actString = "1"

var itemEtape = document.getElementsByClassName("step")[0]
updateAvancement()
var itemTips = document.getElementsByClassName("tips")[0]
updateAvancementTips()
var itemAct = document.getElementsByClassName("act")[0]
updateStringAct()

document.getElementsByClassName("next")[0].addEventListener("click", nextStep)
document.getElementsByClassName("previous")[0].addEventListener("click", precStep)

function nextStep() {
  if (step < acts[act].length - 1) {
    step += 1
  } else if (step == acts[act].length - 1 && act != 10) {
    step = 0
    act += 1
    updateStringAct()
  }
  updateAvancement()
  return avancement
}

function precStep() {
  if (step != 0) {
    step -= 1
  } else if (step == 0 && act != 1) {
    console.log("on est la")
    act -= 1
    console.log(acts[act].length)
    step = acts[act].length -1
    updateStringAct()
  }
  updateAvancement()
  return avancement
}

function updateAvancement(){
  avancement = acts[act][step]
  itemEtape.innerHTML = avancement
}
function updateAvancementTips(){
  avancementTips = tips[act-1]
  itemTips.innerHTML = avancementTips
}
function updateStringAct(){
  updateAvancementTips()
  itemAct.innerHTML = "--== Act "+act+" ==--"
}

