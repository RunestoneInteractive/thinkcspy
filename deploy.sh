ssh-keyscan dev.runestone.academy >> ~/.ssh/known_hosts
rsync -avz build/thinkcspy bmiller@dev.runestone.academy:/tmp
