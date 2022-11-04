![alt text](https://github.com/melissarwong/bdab_website/blob/main/src/images/favicon.ico?raw=true)
# Big Data at Berkeley's Website

#### Author: Melissa Wong
#### Modifier(s): Izzie Lau, Sofia Kwee, Erin Hong
#### Last Modified: 11/2/22

***


## 🚀 To setup, modify, and run the website locally (12 steps)

   1. Open the terminal.
   2. Navigate into the directory you want to place the website repo.
   3. Run `git clone https://github.com/melissarwong/bdab_website.git` to clone the repo.
   4. Run `cd bdab_website` to access the cloned repo.
   5. Run `npm install` and `npm i gatsby` to automatically install the dependencies listed in the package.json file.
   6. Open your preferred code editor and open up the 'bdab_website' folder.
   7. Open the terminal in your code editor or use your previous terminal.
   8. Run `gatsby develop`. If that doesn't work, `npx gatsby develop`.
      - Make sure you are inside the 'bdab_website' folder when you run this.
   9. The original site is now running at `http://localhost:8000`!
   10. Open this [document](https://docs.google.com/document/d/1v4oN_-WMnfGSvhRZwCypfTGO-NiJF2tdqPCM4qkUPU0/edit?usp=sharing) to see which files you need to open to make certain changes.
   11. To make edits to the original, update the code, save, and the `localhost` browser will update in real time - gatsby develop is running in the background!
   12. Update `README.md` by adding your name to the modifiers list.
   13. Once you've ensured your local copy is working, push changes to Github. Follow these 4 steps: 
      - Run `git status` to check that all the files you added are correct. 
      - `git add *`
      - `git commit -m <insert message>`
      - `git push -u origin main` (Remember the `master` branch is called `main` now!!!!!)

***

## 🤠 To publish your changes (14 steps)
   1. Open a terminal window and download [Cyberduck](https://cyberduck.io/download/).
      - NOTE: If you're wondering if you can do everything in Cyberduck or everything in one terminal window, you cannot. Uploading to Cyberduck is buggy and deleting files through SFTP on the terminal is impossible! 

   #### Terminal
   2. In a terminal window, make sure you are inside the 'bdab_website' folder.
   3. Run `gatsby build`. If that doesn't work, `npx gatsby build`.
        - For context, `gatsby build` creates a production ready version of the site which can be found in the 'public' folder.

   #### Cyberduck
   - For context, the OCF hosts our website, so I use Cyberduck to visually navigate the files. All site components must be in the 'public_html' folder for them to be used.
   4. Open Cyberduck.
   5. Press Open Connection.
   6. In the drop down menu, select SFTP (SSH File Transfer Protocol).
      - Server: ssh.ocf.berkeley.edu
      - Username: bigdata
      - Password: melandsmoozi
   7. Press Connect and allow the fingerprint.
   8. You should see the public_html folder. Open it and delete ALL files (you will be replacing them).
      - If you accidentally delete the 'public_html' file on the OCF server, follow these [instructions](https://www.ocf.berkeley.edu/docs/services/web/).

   #### Terminal
   9. Run `sftp bigdata@ssh.ocf.berkeley.edu` with password: melandsmoozi.
   10. Run `pwd` to make sure your REMOTE location is in the 'bigdata' directory. 
   11. Run `lcd <filepath>` to navigate to the folder in your LOCAL computer that contains the 'public' directory. Run `lpwd` to verify your local location.
   12. Once there, run `put -r public/* public_html/` to transfer all files to the OCF server! (~1 min process)
   13. Once the transfer is complete, refresh your Cyberduck window and expand the 'public_html' to confirm all of the files are there!
   14. Clear your cache on Safari and Chrome and navigate to `bd.berkeley.edu`!

***

## 🧐 Website File Structure

These are the relevant files that you will need when updating the website.

Notes:
   - All files that aren't in nested folders are shared components among many files.
   - `index.css` was only used to import the Google Fonts
   - Fonts used: Bebas Neue and Montserrat (replacement for Gotham)

    .
    ├── README.md
    └── src
         └── components
                  └── Home
                  └── AboutUs
                  └── Courses
                  └── WorkWithUs
                  └── ContactUs
                  └── Apply
                  └── Navbar
                  └── Footer
                  └── OnlineCourse (entire course code source is here & respective pages folder)
         └── images
         └── pages
               └── index.js
               └── index.css (import all fonts)
               └── aboutus.js
               └── course.js
               └── workwithus.js
               └── contactus.js
               └── apply.js
               └── online_course
                        └── intro.js
                        └── schedule.js
                        └── materials.js
                        └── about.js
                        └── modules
                              └── modules[0-8].js


***

##### <em>For any questions, email melissarwongg@gmail.com, text me on Slack, or contact me directly on Facebook!</em>
