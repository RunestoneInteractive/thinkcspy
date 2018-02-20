import paver
from paver.easy import *
import paver.setuputils
paver.setuputils.install_distutils_tasks()
from os import environ, getcwd
import os.path
import sys
from socket import gethostname
import pkg_resources

sys.path.append(getcwd())
sys.path.append('../modules')

updateProgressTables = True
try:
    from runestone.server.chapternames import populateChapterInfob
except ImportError:
    updateProgressTables = False


######## CHANGE THIS ##########
project_name = "thinkcspy"
###############################

master_url = None
doctrees = None
if master_url is None:
    if gethostname() in ['web608.webfaction.com', 'rsbuilder']:
        master_url = 'http://interactivepython.org'
        if os.path.exists('../../custom_courses/{}'.format(project_name)):
            doctrees = '../../custom_courses/{}/doctrees'.format(project_name)
        else:
            doctrees = './build/{}/doctrees'.format(project_name)
    else:
        master_url = 'http://127.0.0.1:8000'
        doctrees = './build/{}/doctrees'.format(project_name)

master_app = 'runestone'
serving_dir = "./build/thinkcspy"
dest = "../../static"

options(
    sphinx = Bunch(docroot=".",),

    build = Bunch(
        builddir="./build/"+project_name,
        sourcedir="./_sources/",
        outdir="./build/"+project_name,
        confdir=".",
        project_name = project_name,
        doctrees = doctrees,
        template_args = {
            'course_id':project_name,
            'login_required':'false',
            'appname':master_app,
            'loglevel':10,
            'course_url':master_url,
            'use_services': 'true',
            'python3': 'true',
            'dburl': 'postgresql://bmiller@localhost/runestone',
            'basecourse': 'thinkcspy',
            'downloads_enabled': 'false',
            'default_ac_lang': 'python',
        }

    )
)

if project_name == "<project_name>":
  print("Please edit pavement.py and give your project a name")
  exit()

version = pkg_resources.require("runestone")[0].version
options.build.template_args['runestone_version'] = version

if 'DBHOST' in environ and  'DBPASS' in environ and 'DBUSER' in environ and 'DBNAME' in environ:
    options.build.template_args['dburl'] = 'postgresql://{DBUSER}:{DBPASS}@{DBHOST}/{DBNAME}'.format(**environ)

from runestone import build
# build is called implicitly by the paver driver.
