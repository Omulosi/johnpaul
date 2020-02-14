---
layout: post
title:  "How to Convert and Resize Images from linux CLI"
published: false
categories: [linux]
---

To be completed!!!!!

https://www.howtogeek.com/109369/how-to-quickly-resize-convert-modify-images-from-the-linux-terminal/

Convert and resizing images from the Linux terminal is as easy as installing
the `ImageMagick`. ImageMagick is a suite of command line utitlities for modifying and working with images.

### Installation
```bash
sudo apt-get install imagemagick
```
### Convert between formats
```bash
convert hello.png hello.jpg
```

specify a compression level for JPEG images
```bash
convert hello.png -quality 95 hello.jpg
```

### Resize an image
```bash
convert example.png -resize 200X100 example.png
```

ImageMagick overwrites original file if same file name used

ImageMagick tries to preserve the aspect ratio if you use this command. It will alter the image to fit within a 200x100 area, but the image wont be exacltly 200x100.

To force the image to have a specific size, execute

```bash
convert example.png -resize 200X100! example.png
```
The following resizes an image to a height of 100

```bash
convert example.png -resize x100 example.png
```
