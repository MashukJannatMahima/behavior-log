# Behavior Observation Log

An installable app for observers and special education teachers. It records how often a behavior happens and how long it lasts during a timed session, keeps an editable table of sessions, exports to Excel and draws progress graphs.

- Works on **iPhone, iPad, Android phones and tablets, Chromebooks, Windows and Mac**.
- Works offline once it's installed.
- **Observe a student or a teacher.** Use the **Student | Teacher** switch at the top. Each has its own behaviors, sessions, table, graphs and Excel file.
- **Data never leaves the device.** There is no server, account or login. Each person's records are saved in the browser on their own device.

---

## Part 1: Put the app online (do this once)

Teachers need a web address to install the app from. Any free static hosting works. The app is just these files, with no server code:

```
index.html  manifest.webmanifest  sw.js  icons/  vendor/
```

Hosting only serves the app itself. Nobody's recorded data is uploaded there, so a public link is safe.

### Option A: Netlify Drop (easiest, about 2 minutes)
1. Go to https://app.netlify.com/drop and sign up for a free account.
2. Unzip this folder, then drag the **whole folder** onto the page.
3. Netlify gives you an address like `https://behavior-log-abc123.netlify.app`. Under *Site configuration → Change site name* you can rename it, for example to `behavior-observation-log`.

### Option B: GitHub Pages (free, good if you'll keep improving it)
1. Create a free account at https://github.com and make a new **public** repository, e.g. `behavior-log`.
2. Click **Add file → Upload files** and upload everything in this folder, keeping the `icons` and `vendor` folders.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**.
4. After a minute your app is live at `https://YOUR-NAME.github.io/behavior-log/`.

The address must start with **https://**, because installing and offline mode only work over https.

### Check it before you share it
Open the link on your own iPhone and on an Android phone. Install it, record a short session, download the Excel file and open the Setup tab to download a backup.

### Sharing with teachers
Send the link in an email, a chat message or as a QR code. **If you send it in LINE, Facebook or Instagram, tell people to open it in Safari (iPhone) or Chrome (Android).** Links opened inside those apps can't be installed, and data saved there can be lost. The app shows a warning when this happens.

### Updating the app later
1. Change the files and upload them again.
2. Open `sw.js` and raise the version number, e.g. `v1.1.0` → `v1.1.1`.
3. Teachers will see **"A new version of the app is ready – Update now"** the next time they open it. Their data is kept.

---

## Part 2: Teacher instructions (copy these into a message or handout)

**Install Behavior Log (do this first, before recording anything)**

- **iPhone / iPad:** Open the link in **Safari**. Tap the **Share** button (square with an arrow), then **Add to Home Screen**, then **Add**.
- **Android:** Open the link in **Chrome**. Tap **Install app** when it appears, or tap the ⋮ menu → **Install app** or **Add to Home screen**.
- **Windows / Mac / Chromebook:** Open the link in **Chrome** or **Edge**. Click the install icon at the right end of the address bar, or open the menu → **Install Behavior Observation Log**.

After that, open **Behavior Log** from your home screen or apps list. It works without internet.

> On iPhone and iPad, the installed app and Safari keep **separate** data. Always record in the installed app.

**Using it**
1. **Pick who you're observing** with the **Student | Teacher** switch at the top. The colors change so you can tell which one you're in.
2. **Setup tab:** Set the behaviors you track and choose a method for each. *Frequency* counts each time it happens. *Duration* times how long it lasts. Add a clear definition for each behavior. Students and teachers each have their own list.
3. **Record tab:** Enter the person's initials or code, the setting and your name. Tap **Start session**, then tap a behavior each time it happens. For duration behaviors, tap once when the behavior starts and again when it stops. Tap **End & save** when you're done. You can't switch between Student and Teacher during a session.
4. **Data tab:** Fix any number by tapping it. Tap **Download Excel** to get a spreadsheet with all sessions, the event log and the behavior definitions.
5. **Graphs tab:** See rate per minute and % of time across sessions, plus a comparison by setting. Each graph can be saved as an image.

**Saving files**
- **iPhone / iPad:** A share sheet opens. Choose **Save to Files**, AirDrop, or email it to yourself.
- **Android:** The file goes to your **Downloads** folder.
- **Laptop (Chrome or Edge):** A Save window opens so you can choose the folder and name.

**Keep your data safe**
- Records are saved **only on this device**. If the phone is lost or reset, the data is gone. Go to **Setup → Download backup** every week and keep the file somewhere safe.
- To move to a new device, install the app there, then go to **Setup → Open backup file**.
- Don't use a private or incognito window, or nothing is saved.
- Use initials or a code instead of full names, following your school's privacy rules. This applies to teachers as well as students.

---

## Files
| File | What it is |
|---|---|
| `index.html` | The whole app |
| `sw.js` | Offline support; raise `VERSION` when you update |
| `manifest.webmanifest` | App name, colors and icons for installing |
| `icons/` | App icons |
| `vendor/chart.umd.js` | Chart.js 4.4.1 (MIT license) for the graphs |
| `vendor/jszip.min.js` | JSZip 3.10.1 (MIT license), used to build the Excel files |
