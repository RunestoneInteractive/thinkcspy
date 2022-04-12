export BOOKDIR=$(HOME)/Runestone/books/thinkcspy
export COMPDIR=$(HOME)/Runestone/RunestoneComponents

.PHONY: pretext html pdf

# This target converts the RST to Generic XML
xml:
	runestone rs2ptx

# This target takes the generic XML and through a series of scripts gets us as close to 
# working ptx as possible.
pretext:
	python ~/Runestone/Runestone2PreTeXt/xml2ptx.py
#	python ~/Runestone/Runestone2PreTeXt/fixFileNames.py
	python ~/Runestone/Runestone2PreTeXt/fixIds.py

# Convert the ptx to html and make sure that the latest Javascript/css bundles are in place
html:
	python $(COMPDIR)/scripts/dist2xml.py test
	python ~/src/pretext/pretext/pretext -c all -f html -p $(BOOKDIR)/pretext/publication-rs-for-all.xml -x debug.rs.services.file /Users/bmiller/Runestone/RunestoneComponents/runestone/dist/webpack_static_imports.xml -d $(BOOKDIR)/beta $(BOOKDIR)/pretext/thinkcspy.ptx 
	rsync -avz $(COMPDIR)/runestone/dist/ $(BOOKDIR)/beta/_static/test/

pdf:
	python ~/src/pretext/pretext/pretext -c all -f pdf -p $(BOOKDIR)/pretext/publication-rs-for-all.xml -x debug.rs.services.file /Users/bmiller/Runestone/RunestoneComponents/runestone/dist/webpack_static_imports.xml -d $(BOOKDIR)/pdf $(BOOKDIR)/pretext/thinkcspy.ptx 

foo:
	python foo.py
