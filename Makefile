export BOOKDIR=$(HOME)/Runestone/books/thinkcspy
export COMPDIR=$(HOME)/Runestone/RunestoneComponents
export RSURI = https://runestone.academy/cdn/runestone/

.PHONY: pretext html pdf runestone

help:
	@echo "Unless you are converting RST to PTX you you should use this Makefile!!!!"
	@echo "Use pip to install pretextbook"
	@echo "To build run: pretext build --input pretext/thinkcspy.ptx --output output --format html --publication pretext/publication-rs-for-all.xml"
	@echo "Then: pretext view html"

# This target converts the RST to Generic XML
xml:
	runestone rs2ptx

# This target takes the generic XML and through a series of scripts gets us as close to 
# working ptx as possible.
pretext:
	python ~/Runestone/Runestone2PreTeXt/xml2ptx.py
	python ~/Runestone/Runestone2PreTeXt/fixIds.py
	python ~/Runestone/Runestone2PreTeXt/fix_xrefs.py
	python ~/Runestone/Runestone2PreTeXt/reformatPtx.py	

# Convert the ptx to html and make sure that the latest Javascript/css bundles are in place
html:
	python $(COMPDIR)/scripts/dist2xml.py test $(https://runestone.academy/cdn/runestone/)
#	python ~/src/pretext/pretext/pretext -c all -f html -p $(BOOKDIR)/pretext/publication-rs-for-all.xml -x debug.rs.services.file /Users/bmiller/Runestone/RunestoneComponents/runestone/dist/webpack_static_imports.xml -d $(BOOKDIR)/beta $(BOOKDIR)/pretext/thinkcspy.ptx 
	python ~/src/pretext/pretext/pretext -c all -f html -p $(BOOKDIR)/pretext/publication-rs-for-all.xml  -d $(BOOKDIR)/beta $(BOOKDIR)/pretext/thinkcspy.ptx 
	rsync -avz $(COMPDIR)/runestone/dist/ $(BOOKDIR)/beta/_static/test/

pdf:
	python ~/src/pretext/pretext/pretext -c all -f pdf -p $(BOOKDIR)/pretext/publication-rs-for-all.xml -x debug.rs.services.file /Users/bmiller/Runestone/RunestoneComponents/runestone/dist/webpack_static_imports.xml -d $(BOOKDIR)/pdf $(BOOKDIR)/pretext/thinkcspy.ptx 

runestone:
	python ~/src/pretext/pretext/pretext -c all -f html -p $(BOOKDIR)/pretext/publication-rs-academy.xml  -d $(BOOKDIR)/runestone $(BOOKDIR)/pretext/thinkcspy.ptx 
	
profile:
	python -m cProfile -s cumulative  ~/src/pretext/pretext/pretext -c all -f html -p $(BOOKDIR)/pretext/publication-rs-for-all.xml  -d $(BOOKDIR)/beta $(BOOKDIR)/pretext/thinkcspy.ptx 
