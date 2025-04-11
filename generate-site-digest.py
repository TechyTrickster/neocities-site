import os, sys, json
from pathlib import Path
from functools import reduce
from markdown import Markdown


projectName = "neocities-site"
originalDir = os.getcwd()
scriptPath = Path(__file__)
scriptDir = scriptPath.parent
moveUpDegrees = lambda originalPath, amount : reduce(lambda x, y : x.parent, range(0, amount), originalPath)
potentials = list(map(lambda x : moveUpDegrees(scriptPath, x), range(0, len(scriptPath.parts))))
rootDir: Path = list(filter(lambda x : x.name == projectName, potentials))[-1] #should always grab the shortest possible, and therefore most likely to be actual root path, even if the root directory name was reused.
sys.path.append(str(rootDir))
sys.path = sorted(list(set(sys.path)))


def findFiles(dir: Path) -> list[Path]:
        """
        small function to recursively search a given folder to list out all of the contained
        files.

        Parameters:
        dir (Path) : path to start the search in

        Returns:
        (list[Path]) : the list of paths of all of the files under the input directory
        """
        output = []
        dirs = list(os.walk(dir))
        for element in dirs:
            if (".git" not in str(element)) and ("venv_page" not in str(element)):
                data = list(map(lambda x : Path(element[0]) / x, element[2]))
                output.extend(data)        

        return output


def getMetaData(filePath: Path) -> dict:
    converter = Markdown(extensions = ['meta'])
    inputHandle = open(filePath, "r")
    text = inputHandle.read()
    inputHandle.close()
    data = converter.convert(text)
    output = converter.Meta
    output["path"] = "/" + str(filePath)
    return output


def main(baseDir: Path) -> dict:
    allFiles = findFiles(baseDir)
    mdDocs = list(filter(lambda x : '.md' == x.suffix, allFiles))
    output = list(map(getMetaData, mdDocs))
    return output    



if __name__ == "__main__":
    inputDir = sys.argv[1]
    outputFile = Path(sys.argv[2]).resolve()
    buffer = main(inputDir)
    output = json.dumps(buffer)
    outputHandle = open(outputFile, "w")
    outputHandle.write(output)
    outputHandle.close()

