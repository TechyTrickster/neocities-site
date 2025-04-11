---
title: 
summary: 
created-on: 
last-modified: 
author: 
category: 
link: 
tags: 
hero-image:
---

### readme

---

### Site Operation Instructions

---
To add a new page to the website, simply author a new markdown document in your editor of choice (right now, mine is Obsidian) in a new folder in the appropriate category directory (not *strictly* mandatory, but highly suggested for your own sanity), with the relevant images and assets in the same new folder.  Then, run 

```sh
python3 generate-site-digest.py content/ content.json
```

this will create the new site digest, making your new article viewable on the site through the dynamic search, load, and display system

---

### todo
1. create a better site header
2. add links back to home page on every page
3. create the topic directory template
	1. brush up on enough react code to do this
4. finish documenting all my projects
5. compress all the hosted images on the site to improve loading times and reduce page memory footprint
6. finish writing site inventory script