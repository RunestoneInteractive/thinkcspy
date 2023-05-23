import paver
from paver.easy import *
import paver.setuputils

paver.setuputils.install_distutils_tasks()
from os import environ, getcwd
import os.path
import sys
from socket import gethostname
import pkg_resources
from runestone import get_master_url

sys.path.append(getcwd())
sys.path.append("../modules")

updateProgressTables = True
try:
    from runestone.server.chapternames import populateChapterInfob
except ImportError:
    updateProgressTables = False


######## CHANGE THIS ##########
project_name = "mines_csstem"
###############################

master_url = None
doctrees = "./build/{}/doctrees".format(project_name)
dynamic_pages = True

if master_url is None:
    master_url = get_master_url()

master_app = "runestone"
serving_dir = "./build/" + project_name
dest = "./published"

options(
    sphinx=Bunch(
        docroot=".",
    ),
    build=Bunch(
        builddir="./build/" + project_name,
        sourcedir="./_sources/",
        outdir="./build/" + project_name,
        confdir=".",
        project_name=project_name,
        doctrees=doctrees,
        template_args={
            "course_id": project_name,
            "course_title": "Computer\\ Science\\ for\\ STEM",
            "login_required": "false",
            "appname": master_app,
            "loglevel": 10,
            "course_url": master_url,
            "use_services": "true",
            "python3": "true",
            "dynamic_pages": dynamic_pages,
            "dburl": "postgresql://bmiller@localhost/runestone",
            "basecourse": "thinkcspy",
            "downloads_enabled": "false",
            "default_ac_lang": "python",
            "enable_chatcodes": "false",
            "allow_pairs": "false",
        },
    ),
)

if project_name == "<project_name>":
    print("Please edit pavement.py and give your project a name")
    exit()

version = pkg_resources.require("runestone")[0].version
options.build.template_args["runestone_version"] = version

if (
    "DBHOST" in environ
    and "DBPASS" in environ
    and "DBUSER" in environ
    and "DBNAME" in environ
):
    options.build.template_args[
        "dburl"
    ] = "postgresql://{DBUSER}:{DBPASS}@{DBHOST}/{DBNAME}".format(**environ)

from runestone import build

# build is called implicitly by the paver driver.

template_args = {
    "course_id": project_name,
    "course_title": "Computer\\ Science\\ for\\ STEM",
    "login_required": "false",
    "appname": master_app,
    "loglevel": 10,
    "course_url": master_url,
    "use_services": "true",
    "python3": "true",
    "dynamic_pages": dynamic_pages,
    "dburl": "postgresql://bmiller@localhost/runestone",
    "basecourse": "thinkcspy",
    "downloads_enabled": "false",
    "default_ac_lang": "python",
    "enable_chatcodes": "false",
    "allow_pairs": "false",
}
