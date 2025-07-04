---
title: Optimizing A 3D Printer
summary: all the things I've learned about improving my 3D printer's output
created_on: May 3, 2025 4:40 PM CST
last_modified: May 3, 2025 4:40 PM CST
author: Andrew Phifer
category: blog
link: 
tags:
  - 3D-Printing
  - optimization
  - quality-control
hero_image:
---

## Optimizing A 3D Printer

`=this.title`

---

```table-of-contents
title: ### Table of Contents
style: nestedList # TOC style (nestedList|nestedOrderedList|inlineFirstLevel)
minLevel: 3 # Include headings from the specified level
maxLevel: 0 # Include headings up to the specified level
includeLinks: true # Make headings clickable
hideWhenEmpty: false # Hide TOC if no headings are found
debugInConsole: false # Print debug info in Obsidian console
```


### Preface

3D printers promise a sort of futuristic super power; select a design, and it will make a copy of it for you, just like those matter replicators in Star Trek.  Except, they don't *really* do that.  They **approximate** that.  They introduce all sorts of artifacts and abnormalities, and impose countless restrictions on what can and cannot be made.  To boot, you usually have to apply a fair amount of elbow grease to finish a model once its done printing, be it assembly, support removal, sanding, etc.  Because figuring out all  of this for yourself is both extremely time consuming, and costly, I figured I'd collect *all* of my accumulated wisdom on the topic here, along will pulling in whatever additional notes and pieces of advice from others around the web.  Additionally, at the end, I detail what my setup currently looks like.


### Air Control

---
Keeping a tight control over the air itself around your 3D printer is *really* important.  Nearly every aspect of the local air quality can impact your prints, be it temperature, AQI, humidity, and drafts.  In general, if you can afford it, you'll want to get a custom enclosure for your printer to keep all those variables under control.  If thats not possible, you'll want to find a space that people don't walk near all that often (like for days at a time).  What follows is a detailed discussion of the various control parameters and their impacts on your prints.

#### Drafts / Currents
Even the smallest, slightest draft across your print bed during a print can cause pretty significant issues, namely peeling.  

(insert image of bed peeling here)

There are a handful of solutions
1. a printer enclosure
2. painstakingly going around the room your printer is in and finding every source of draft and sealing them
3. increasing bed temperature
4. printing a draft guard / skirt

The printer enclosure is the most ideal (and potentially cost effective) solution out there.  However, that is often not an option for a number of reasons, such as upfront cost, space, or availability.  Sealing drafts in a room (or even house) is a pretty big undertaking, with potentially high upfront costs, but it **is** one that will **almost always pay off in the long run**.  In fact, you should probably do this even if you're not 3D printing to save on heating and cooling costs!  

(insert pic of draft hole in room)

Increasing your bed temperature *can* be an option, unless you're already at the point where your prints start experiencing elephants foot as a result of too *high* of a bed temp.

(insert pic of elephants foot)

Finally, printing a draft guard / skirt can be a great option to combat a slight draft.  In Prusa, you can find the option here (path to option)

(insert pic of draft guard interface here)

Here is a before and after of the same print where I added a 2 layer thick, 17 layer high draft guard and increased my bed temp from 64 to 67 on the first layer.  

(insert bed peel before)

(insert bed peel after)

#### Temperature

The temperature of the ambient air in your printer's environment *can* have an impact, particularly if its below what is considered common room temp (look up the value, writer).  An enclosure will help with this greatly, quickly bringing the chamber up to a higher temp.  

#### Humidity

Humidity is your filament's worst enemy.  PLA (the most popular type of 3D printing filament at the time of writing) in particular *despises* any humidity above 40% relative while in storage.  The reason for this is that PLA is quite hygroscopic, meaning that it will readily absorb moisture from the air.  When it does, unless you dry it out first in a filament dryer (or an oven if your brave), it will cause extreme stringing during prints, reducing print strength, messing with dimensions, and totally destroying your surface finish quality.

(insert pic of stringing)

For context, a desert is around 10 to 30%, comfortable humidity for most humans is between 50 and 60 %, and ~~the inhospitable hellscape of~~ Florida is ~100%.  Theres quite a few different methods of keeping humidity / moisture out of your stored filament.  

1. only having 1 open spool of filament and using it all the same day
2. vacuum bags and desiccant 
3. sealed boxes and desiccant
4. a sealed closet with a dehumidifier and heater (my solution)

The first solution is pretty straight forward, free, and fairly effective (assuming your print environment's ambient humidity isn't *too* high).  It is, however, very unrealistic for anyone that isn't running a print farm.  The second solution *can* be quite cost effective, as vacuum bags, their pumps, and desiccant can be had for cheap.  

(pic of vacuum bags)

However, reading reviews online, I have found that quite a few people have severe reliability problems with the bags, seeing them stop maintaining a seal after a handful of openings and closings.  This massively eats into the cost effectiveness of the solution.  (link to vacuum bag reviews)  The third solution is has a low up front cost for your first spool or two of storage.  However, as soon as you need to store more than 6 spools at a time, you can be looking at hundreds of dollars in costs, and a pretty low space efficiency as even multi-spool boxes add quite a bit of bulk.  Finally, the last option is the most cost effective assuming you have a large number of open spools at any given time.  A small closet is easy to dehumidify, and can be quite cheap to seal off.  (I spent about 100 USD all in)  

(pic of my printer setup)

The dehumidifier does at an ongoing cost in electricity, but so do the desiccant beads for the other solutions.  Add some cheap, 3d printed shelves and wooden dowel rods, and this is by far the cheapest solution on a per spool basis.


### Filaments

---

#### Extruder Temp

#### Bed Temp

#### Print Speed


### Slicing Settings

---

#### perimeter layers

#### Layer Heights
talk about arachne mode

#### Infill Types

#### Supports

#### Bridging


### My Personal Setup

---



### Credits 

---
