# 🚀 Project: The Digital Time Capsule

Welcome, Developers! Your mission is to build a CLI (Command Line Interface) tool that "locks" a message and your current computer stats into a digital vault. 

But there's a catch: **The code is broken and split between two files.** You must work as a team using Git to fix it and merge your work!

---

## 👥 The Shared Responsibility Model

### 🏗️ Partner A: The Architect
**File:** `app.js`  
**Your Job:** 1. Import the `os` module and the storage function.
2. Capture the user's message from the terminal using `process.argv`.
3. Use **Destructuring** to get the system username.
4. Call the storage function to save the data.

### 📚 Partner B: The Librarian
**File:** `utils.js`  
**Your Job:**
1. Import the `fs` module.
2. Fix the `saveToCapsule` function so it writes a real JSON file.
3. **Export** the function so Partner A can use it.
4. Work on a **separate branch** named `feat-storage`.

---

## ⏱️ The 20-Minute Sprint Workflow

1. **Setup (2 mins):** - Partner A clones this repo.
   - Partner A adds Partner B as a "Collaborator" on GitHub.
   - Partner B clones Partner A's new repo.

2. **Coding (10 mins):** - Fix the `// ??` sections in your assigned files.
   - **Partner B:** Remember to create your branch first! `git switch -c feat-storage`.

3. **The Merge (5 mins):**
   - **Partner B:** Push your branch to GitHub.
   - **Partner A:** Open the Pull Request, leave a review comment, and **Merge** it.

4. **The Launch (3 mins):**
   - Partner A runs `git pull`.
   - Run the final app: `node app.js "Greetings from the past!"`
   - Check if `capsule.json` appeared!

---

## 🛠️ Commands You'll Need

| Action | Command |
| :--- | :--- |
| **Check Status** | `git status` |
| **Create Branch** | `git switch -c branch-name` |
| **Stage Changes** |
