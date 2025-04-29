---
title: puzzle making
summary: my journey in learning how to use a cricut
created_on: April 14th, 2025 12:01 PM CST
last_modified: April 20th, 12:45 AM CST
author: Andrew Phifer
category: art
link: 
tags:
  - paper-craft
  - pixel-art
  - cricut
  - art
hero_image: /content/articles/art/puzzle-making/processed-early-puzzle-attempt-overview.jpg
---

### Puzzle Making

---

My mother recently gave me her old [Cricut](https://cricut.com/en-us/) (an [Explore Air 2](https://cricut.com/en-us/sale/refurbished-open-box-machines/certified-refurbished-cricut-explore-air-2/2009170.html)), saying that she hasn't gotten any use out of it for various reasons for quite some time.  Taking it home, I set it up and got to work trying to learn how to make use of it.  The first real project that I came up with was making puzzles.  As I've quickly learned, along with more or less the rest of Cricut's users, the machines are pretty nice, but their software is *horrible*!!

For those not in the know, a Cricut is a company which makes knife and pen plotters, designed to cut and draw on materials like paper, card-stock, cardboard, and vinyl. The general workflow while using a Cricut is to create a pattern to cut / draw, set up a project to arrange that pattern on a virtual bed, and then send the configured pattern to the Cricut for it to do its thing.

I've already gone through a couple of different approaches in trying to set up a general workflow using my Cricut.  The first challenge that I ran into was that the first party software to use my machine, [Cricut Design Space](https://cricut.com/en-us/apps), isn't compatible with my OS (I run [PopOS](https://system76.com/pop/), a [Linux](https://en.wikipedia.org/wiki/Linux) based OS, derived from [Debian](https://en.wikipedia.org/wiki/Debian)), its available only for [Windows](https://www.microsoft.com/en-us/windows/) and Mac OS.  So I set about setting up a [Bottles](https://usebottles.com/) environment (a easy-ish to use wrapper for [WINE](https://www.winehq.org/)) to run the application on my machine, upon which I learned a couple of things:

1. the desktop application is *extremely* slow
2. the screen won't update on its own, you have to mouse over an active UI element to do that
3. import images (vector or raster) doesn't work
	1. vector images aren't interpreted correctly
	2. importing raster images causes the application to hang indefinitely

At first I figured that the issue was running it in WINE rather than native Windows, so I asked my SO to run it on their Windows computer, where we discovered that these issues exist on the native platform, too.  After that, I tried using the Android version of Design Space.  While it does work without crashing or hanging, vector images are still interpreted incorrectly.  Additionally, running this on a phone is *unpleasant* due to the tiny screen, which makes using the interfaces very fiddly and difficult.  I quickly came to the conclusion that I'd have to do all of my asset creation on a computer, using more conventional creative software, and then copy the exported png file over to my phone to finally setup the cut and start it.

Ultimately, I've settled on the following workflow 

1. using this [gitlab site](https://draradech.github.io/jigsaw/jigsaw.html) by Manuel Kasten (aka Draradech) to generate puzzle patterns 
2. import the resulting svg file into inkscape (a FOSS vector illustration application) to convert it to a png
3. copy that png to my NAS (network attached storage)
4. pull a photo I've taken that I'd like to use as the art for the puzzle and size it appropriately for the backing I'd like to use and print it on my inkjet printer using some [thin, glossy, A4 sized photo paper](https://www.amazon.com/dp/B07PYG93TH?ref=ppx_yo2ov_dt_b_fed_asin_title)
5. glue together 2 pieces of [24pt comic book boards](https://www.amazon.com/dp/B09XDRDYQ6?ref=ppx_yo2ov_dt_b_fed_asin_title) along with the printed picture using a glue stick, and set a couple of heavy textbooks on top of it for 10 minutes
6. trim the excess photo paper to size
7. copy that png pattern from my NAS (Network Attached Storage) to my phone
8. set the Cricut cut depth wheel to **max**
9. import that png pattern into Design Space and size it appropriately for the paper materials I'm using
	1. at the moment, this means **under-sizing** the pattern slightly when compared to the paper stock i'm using.  this makes fitting, and cutting more accurate and consistent
10. attach the assembled paper stock to a light adhesion build plate
11. load the build plate into the Cricut
12. send the design the to Cricut
13. Hit the run button on the Cricut

So, that's the workflow.  But what about the results?  At the moment, they're *close* to good.

![overview](/content/articles/art/puzzle-making/processed-early-puzzle-attempt-overview.jpg)

At the moment, with my current workflow, I'm running into 2 problems:

1. paper stock tear out
2. *barely* insufficient cut depth

By tear out, I'm referring to how the cutting blade of the Cricut is causing the layers of paper stock to delaminate, and peal up.

![tear out](/content/articles/art/puzzle-making/processed-early-puzzle-attempt-tear-out.jpg)

As for the barely insufficient cut depth, the blade just isn't cutting through all the layers, leaving the bottom layer of comic book boards cut completely in a few places, but still connected in most others by only about (i'm guessing here) 50 to 100 *microns*.  

![insufficient cut depth](/content/articles/art/puzzle-making/processed-early-puzzle-attempt-insufficient-cut-depth.jpg)

This is despite the fact that the whole assembly is about 1mm thick, and the deep cut blade from Cricut is advertised to cut 50% more than that.  What I may end up doing is swapping out one of the comic book boards for a piece of heavy card stock instead so that way the cut gets complete.  Ideally, a puzzle should be over a millimeter thick, but I think I'll just have to deal with the equipment I have, for now.  Additionally, I'm going to search for another adhesive for the glue up, such as contact cement or a strong spray adhesive.  



