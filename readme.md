---
title: readme
summary: an introduction to the technical details of this site, its operation, and credits for technologies used
created-on: April 11th, 2025 5:09 PM CST
last-modified: April 11th, 2025 5:09 PM CST
author: Andrew Phifer
category: main
link: 
tags:
  - information
hero-image:
---

### readme

---
This site is three things
1. a place for my portfolio
2. an exercise in learning static site web development
3. a writing exercise

I've written the entirety of this site myself.  No static site generator was used, instead, I essentially wrote my own. (I think?  More research needed...)  Content is authored for this site in Markdown, with a templated metadata block which gets read by a site digest generator that provides the data needed for the website frontend to populate with content.  Going in, I didn't have much experience doing web development.  I took a 3 month crash course in it years ago, but it was pretty heavily guided.  This wasn't...  The site is built on HTML 5, CSS, Bootstrap (a style package), Javascript, React (JSX, specifically), python (offline site digest generation), and Markdown (content format).

As a side note, and I'm sure that quite a few other web developers, both new and experienced will agree; there are **WAY TOO MANY JAVASCRIPT LIBRARIES**.  I know how we got here...  

![xkcd page 927, Standards](https://imgs.xkcd.com/comics/standards.png)

This is just me, spit balling ideas, but maybe we should do something different.  Instead of constantly coming up with new standards, over and over again, maybe we should look at whats *already out there* and try to find something that can cover all our needs *reasonably well* and then forget the rest.


### Plans

---
I plan to eventually start maintaining a separate version of this repo, with all my own content pages stripped out so that people can use my site templates for their own purposes.  I think I'll start on that once I've finished the project and caught up on documenting my own projects.  


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
5. ==compress all the hosted images on the site to improve loading times and reduce page memory footprint==
6. finish writing site inventory script
7. update all content files with the new meta data format
8. work around encodeURIComponent bug


### Tutorials Used

---
1. setting up local Apache 2 Web Server for rapid site testing
	1. https://ubuntu.com/tutorials/install-and-configure-apache#3-creating-your-own-website
2. configuring a fstab based davfs mount
	1. https://wiki.archlinux.org/title/Davfs2#Configuration_and_mount_options
3. writing in React
	1. Learning React, Alex Banks and Eve Porcello, May 2017, O'Reilly Media Inc


### Technologies Used

---
1. WebDav - for quickly updating the production site
	1. https://github.com/alisarctl/davfs2
	2. https://savannah.nongnu.org/projects/davfs2
2. Javascript Markdown interpreter - showdown
	1. https://github.com/showdownjs/showdown
3. Python Markdown interpreter - Python-Markdown
	1. https://python-markdown.github.io/
4. Local Testing Web Server - Apache 2
	1. https://httpd.apache.org/
5. 