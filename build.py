from subprocess import Popen

p = Popen("./build.sh")
stdout, stderr = p.communicate()