import os
import shutil

path = "./docs/"

try:
    _, _ , files = os.walk(path + "browser").__next__()
except StopIteration:
    quit(0)
for file in files:
    os.rename(path+"browser/"+file, path+file)

os.rmdir(path+"browser")

shutil.copyfile(path+"index.html", path+"404.html")