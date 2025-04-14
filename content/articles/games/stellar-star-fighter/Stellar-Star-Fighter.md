---
title: Stellar Star Fighter
summary: A simple (and bespoke engine) Shmup in the classic 8-bit style
created_on: March 31st, 2025 12:01 PM CST
last_modified: April 2nd, 2025 12:28 PM CST
author: Andrew Phifer
category: games
link: 
tags:
  - video-games
  - Maker
  - pico-8
  - lua
  - pixel-art
hero_image: /content/articles/games/stellar-star-fighter/stellar_star_fighter_early_development.gif
---

### My First Video Game

---

I can't remember when I first learned about the pico-8 *fantasy console*.  But as soon as I did, I was instantly captivated.  Something about the style of the website ([pico-8 home page](https://www.lexaloffle.com/pico-8.php)), the limitations breading creativity, and the accessibility of the systems was deeply appealing to me.  I've played plenty of different games on it (like the original [Celeste](https://www.lexaloffle.com/bbs/?pid=11722#p)) and had plenty of fun!  Eventually, I wanted to try my hand at making my own.  Thinking about what I thought would be a solid challenge, but still attainable, I decided to make vertical shoot'em up, like [Tyrian](https://www.gog.com/en/game/tyrian_2000) (though certainly not as grand as it is!!!).  

The pico-8 console spec provides for some strict limitations.  first of all, it uses a distribution of Lua with more or less no additional libraries beyond the low level graphics and sound packages for the pico-8 console itself.  This results in code that is **much** more verbose than say; python 3.  Additionally, the system only allows for ~64KB memory map, as much as half of which can come from the *game cartridge*.  Here are the specs

##### pico-8 specifications
```
Display: 128x128, fixed 16 colour palette  
Input:   6-button controllers  
Carts:   32k data encoded as png files  
Sound:   4 channel, 64 definable chip blerps  
Code:    P8 Lua (max 8192 tokens of code)  
CPU:     4M vm insts/sec  
Sprites: Single bank of 128 8x8 sprites (+128 shared)  
Map:     128 x 32 Tilemap (+ 128 x 32 shared)
```

As you can see, the system is quite resource limited.  On the other hand, we all know that restrictions like this can *really* get the creative juices flowing!  So far, I'm only a few days into creating the game.  Most of my time has been spent better learning the ins and outs of environment (this isn't quite my first project for the pico-8, but it is my first game), and setting down the plumbing of the game engine, and code stubs, rather than making any functioning code.  At the moment, this is what I have so far.

![early gif](/content/articles/games/stellar-star-fighter/stellar_star_fighter_early_development.gif)

Just a basic UI and boarder, with an animate player ship.  My plans are to have a playable version of the game available and embedded on this site at some later date!