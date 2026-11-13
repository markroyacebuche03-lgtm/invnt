KEY INVENTORY - START HERE
==========================

Key Inventory is a website app for a worship band: songs, each singer's keys, setlists, a Play mode for
the stage, and (optional) live sync between the band's phones.
There is nothing to install or build. You put these files on a web host, and it works.

WHAT IS IN THIS FOLDER
----------------------
  index.html             the whole app (REQUIRED)
  firebase.js            your Firebase settings for band sync (fill in once; see CLOUD-SETUP.txt)
  sw.js                  lets the app show phone alerts
  manifest.webmanifest   makes "Add to Home Screen" work like a real app
  icon-192.png, icon-512.png, icon-maskable-512.png   the app icon (your ministry logo)
  firestore.rules        the database rules you paste into Firebase once
  firebase.json          only for Firebase Hosting (optional)
  CLOUD-SETUP.txt        step by step Firebase setup, and what to do when something does not work
  FEATURES.txt           what the app can do and how it behaves
  README.txt             this page

UPLOAD ALL OF THE FILES THAT ARE NOT .txt (index.html, firebase.js, sw.js, manifest.webmanifest and the
three icon files) TOGETHER, in the same folder on your host, with index.html at the top level.
If you only want the app on one phone with no sync and no alerts, index.html alone is enough.
Use an https address (every host below gives you one).

STEP 1 - PUT IT ONLINE (pick one, all free)
-------------------------------------------
- Netlify Drop     app.netlify.com/drop: unzip this file, then drag the whole FOLDER onto the page.
- Cloudflare Pages create a project, choose "Direct upload", and upload the files.
- GitHub Pages     make a repository, upload the files, then Settings > Pages > deploy from the main branch.
- Firebase Hosting needs the Firebase tools: run "firebase deploy" in this folder. It publishes the website and
                   the rules together, and then you do not need to fill in firebase.js.

STEP 2 - TURN ON BAND SYNC (optional, about 10 minutes, once)
-------------------------------------------------------------
Open CLOUD-SETUP.txt and follow it: create a Firebase project, switch on email sign-in, make the database,
paste the rules, copy your project's settings into firebase.js, and upload the files again.
Until then the app works, but each phone keeps its own songs and Settings > Band & sync says
"Sync is not switched on yet".

STEP 3 - TRY IT (5 minutes)
---------------------------
1. Open your website address on a computer. You should see the Home page with your logo, a big Play button and six big buttons.
2. Tap Settings (gear) > Your data > Add sample, so there are songs to look at.
3. Open a song, tap "+ Add to setlist", then open the Setlist tab and tap Play.
4. With sync on: Settings > Band & sync > create your account with an email and a password.
5. On a second phone, open the same address, register, then add each other by email.

ON THE PHONES
-------------
- iPhone: open the address in Safari, tap Share > Add to Home Screen. The Home Screen app keeps its OWN
  saved data, separate from Safari, so you sign in once inside it.
- Android: open the address in Chrome, menu > Install app (or Add to Home screen).
- Phone alerts need that Home Screen app on iPhone, and "Turn on" in Settings > Notifications.

UPDATING THE APP LATER
----------------------
Upload the new files over the old ones (keep your own firebase.js: do not replace it with the empty one
unless you fill it in again). Phones keep the old page for a while: reload the page, or remove the Home
Screen app and add it again.

IF THE UPDATE DOES NOT SHOW
---------------------------
1. Settings > Your data shows "Version ...". Open that page on the phone or computer and tap "Check for a
   newer version". It tells you whether the website has something newer than what you are looking at.
2. Reload without the old copy: on a computer press Ctrl+Shift+R (Cmd+Shift+R on a Mac), or open the address
   in a private window. On a phone open it in a private tab. On an iPhone, remove the Home Screen app, open the
   site in Safari, and add it to the Home Screen again.
3. Check the files really changed on the host:
   - GitHub: the files must be unzipped. "Add file > Upload files" does NOT unzip a .zip: unzip it first and
     drag the FILES (index.html, firebase.js, sw.js ...), not the zip, into the repository's top level.
     Open index.html on GitHub and look for the new text.
   - GitHub Pages: Settings > Pages shows the branch and folder it publishes; the Actions tab shows whether the
     last deploy finished (it can take a few minutes).
   - Cloudflare Pages: Workers & Pages > your project > Deployments. The newest one should say Production and
     show your latest commit. If it says Preview, or the commit is old, check Settings > Builds (production
     branch) and that the build output directory is the folder that holds index.html (often empty or /).
   - If you use your own domain through Cloudflare: Caching > Configuration > Purge Everything.
4. Add ?x=1 to the end of the address (for example https://yoursite.pages.dev/?x=1). If that shows the new
   version but the plain address does not, it is only a cached copy: wait a few minutes or purge the cache.
5. Make sure you are opening the right site: GitHub Pages and Cloudflare Pages are two different addresses.
   Only the one you updated changes.

YOUR DATA
---------
Songs are saved in each browser, and with sync on they are also kept in your Firebase database.
Settings > Your data > Backup downloads a file with everything; Restore puts it back (also how you
move songs to a new phone). Clearing a browser's site data erases the copy on that device, so take a
backup now and then.

NEEDS THE INTERNET
------------------
The Manrope font (falls back to a normal font), "Find a song online" (the globe button on the Songs tab),
and band sync. Everything else works offline once the page has loaded.
Song lyrics can be incomplete or protected by copyright: make sure you are allowed to use them (for
example with a CCLI licence for church use).
