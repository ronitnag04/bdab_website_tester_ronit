![alt text](https://github.com/smruthibalajee/bdab_website/blob/master/src/images/favicon.ico?raw=true)
# Big Data at Berkeley's Website

#### Author: Melissa Wong
#### Modifier(s): Smruthi Balajee 
#### Last Modified: 10/11/2020

_________________


## To setup, modify, and run the website locally

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
   10. To make edits to the original, change the code, save your changes, and the `localhost` browser will update in real time!


## To publish your changes
   1. Have your code editor open, Cyberduck, and a new terminal window.

   #### Code Editor
   1. In a terminal window, make sure you are inside the 'bdab_website' folder.
   2. Run `gatsby build`. If that doesn't work, `npx gatsby build`.
        - For context, `gatsby build` creates a production ready version of the site which can be found in the 'public' folder.
   
   #### Cyberduck
   - For context, the OCF hosts our website so use Cyberduck to visually navigate the files. All site components
   must be in the 'public_html' folder.
   1. SFTP to ssh.ocf.berkeley.edu 
      - Username: bigdata
      - Password: melandsmoozi
   2. Open the current public_html and delete ALL files (you will be replacing them).
   
   #### New Terminal Window
   1. Run `sftp bigdata@ssh.ocf.berkeley.edu`
   2. Use `lpwd`, `pwd`, `lcd` commands to navigate to 'bdab_website' in local and 'bigdata' in remote
   3. Once there, run `put -r public/* public_html/` to transfer all files to the OCF server!



## Website File Structure

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

_________________

##### <em>For any questions, email melissarwong@berkeley.edu or contact me directly!</em>
