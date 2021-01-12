![alt text](https://github.com/smruthibalajee/bdab_website/blob/master/src/images/favicon.ico?raw=true)
# Big Data at Berkeley's Website

#### Author: Melissa Wong
#### Modifier(s): Smruthi Balajee 
#### Last Modified: 10/11/2020

***


## 🚀 To setup, modify, and run the website locally

   1. Open the terminal.
   2. Navigate into the directory you want to place the website repo.
   3. Run `git clone https://github.com/smruthibalajee/bdab_website.git` to clone the repo.
   4. Run `cd bdab_website` to access the cloned repo.
   5. Run `npm install` to automatically install the dependencies listed in the package.json file.
   6. Open your preferred code editor and open up the 'bdab_website' folder.
   7. Open the terminal in your code editor or use your previous terminal.
   8. Run `gatsby develop`. If that doesn't work, `npx gatsby develop`.
      - Make sure you are inside the 'bdab_website' folder when you run this.
   9. The original site is now running at `http://localhost:8000`!
   10. To make edits to the original, change the code, save, and the `localhost` browser will update in real time - gatsby develop is running in the background!

***

## 🤠 To publish your changes
   1. Open your code editor, Cyberduck, and a new terminal window.

   #### Code Editor
   2. In a terminal window, make sure you are inside the 'bdab_website' folder.
   3. Run `gatsby build`. If that doesn't work, `npx gatsby build`.
        - For context, `gatsby build` creates a production ready version of the site which can be found in the 'public' folder.
   
   #### Cyberduck
   - For context, the OCF hosts our website so I use Cyberduck to visually navigate the files. All site components must be in the 'public_html' folder.
   4. SFTP to ssh.ocf.berkeley.edu 
      - Username: bigdata
      - Password: melandsmoozi
   5. Open the current public_html and delete ALL files (you will be replacing them).
   
   #### New Terminal Window
   6. Run `sftp bigdata@ssh.ocf.berkeley.edu` with password: melandsmoozi.
   7. Use `lpwd`, `pwd`, `lcd` commands to navigate to 'bdab_website' in local and 'bigdata' in remote
   8. Once there, run `put -r public/* public_html/` to transfer all files to the OCF server!
   9. Once the transfer is complete, refresh your Cyberduck window to confirm all of the files are there!
   10. Clear your cache on Safari and Chrome and navigate to `bd.berkeley.edu`!

***

## 🧐 Website File Structure

The files that you will need when updating the website:

    .
    ├── src
    |     └──
    └── README.md

_________________

##### <em>For any questions, email melissarwong@berkeley.edu or contact me directly!</em>
