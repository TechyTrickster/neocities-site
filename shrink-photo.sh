#!/bin/bash

#NOTE this script works best in terminology, where tycat
#will actually work and display all the resulting images
#in the terminal output.

#Description
#this is a small and fast script to compress entire
#folders of images into compact, but very legible images
#for web hosting purposes.

compress_image () {
    #1 = input file
    #2 = output file
    #3 = output file dimensions
    ffmpeg -hide_banner -loglevel warning -i "$1" -lavfi scale="$3" -y "$2"
    tycat "$2"
    echo original: $(du -h "$1")
    echo compressed: $(du -h "$2")
}


compose_file_name () {
    #3 = output folder
    #2 = input file name
    #1 = file extension    
    echo "$3"/$(basename --suffix="$1" "$2")-tiny"$1"
}


generate_file_names () { 
    #1 = input dir anme
    #2 = file extension
    ls "$1" | parallel compose_file_name "$2" 
}

export -f compose_file_name
export -f compress_image
export -f generate_file_names


#1 = input dir name
#2 = output folder name
#3 = extension to operate on
#4 = output size (in ffmpeg recognized format, see line 14 for context)

if [ -d "$2" ]; then
    echo "folder already exists"
else
    echo "making folder"
    mkdir "$2"
fi

for inputFile in $(ls "$1")
do
    resolvedInput="$1"/$inputFile    
    outputFile=$(compose_file_name "$3" "$resolvedInput" "$2")
    compress_image "$resolvedInput" "$outputFile" "$4"
done 