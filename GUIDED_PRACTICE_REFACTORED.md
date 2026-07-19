# From Idea to Deployed App: A Multi-Agent AI Workflow

In this guide, you'll turn a product idea into a live, deployed web application using a combination of AI tools.

You'll use:

- **Atoms** to generate a product specification
- **Your LLM of choice** (DeepSeek, Claude, GPT-5, etc.) to build the app
- **GitHub** to store your code
- **Vercel** to deploy the app live

By the end, you'll have a working app that you can share with anyone.

---

# Prerequisites

Before you start, make sure you have:

- A **GitHub account** (create one at https://github.com if you don't have one)
- A **Vercel account** (sign up at https://vercel.com — you can use GitHub to sign in)
- Access to an **LLM of your choice** (DeepSeek, Claude, ChatGPT, etc.)
- **VS Code** installed (or another code editor)
- **Git** installed on your computer

## Quick Check: Is Git Installed?

Open your terminal:

- **Windows:** Git Bash
- **macOS/Linux:** Terminal

Run:

```bash
git --version
```

If you see output similar to:

```text
git version 2.39.0
```

then Git is installed correctly.

If not, download Git from:

https://git-scm.com

> **Windows Users:** Use **Git Bash** throughout this guide instead of PowerShell or Command Prompt. Git Bash includes the Unix commands used in many tutorials.

---

# Part 1: Generate the Product Specification (Atoms)

Atoms is a multi-agent AI platform that simulates a product team to generate structured product specifications from a single prompt.

## Step 1: Create a Project

1. Visit https://atoms.dev
2. Sign in with your Google account.
3. Click **New Project** or use the **"Your next product starts here, AI Ninja"** prompt.
4. Name your project (for example, `Habit Tracker Gamification`).

## Step 2: Generate the Specification

Paste the following prompt into Atoms:

> *"You are a product manager at a tech startup building a web-based habit tracking app. The goal is to improve user retention by introducing a gamification feature. Generate a complete product specification including user stories, feature requirements, design considerations, and development plan."*

Click **Send** and wait approximately **5 minutes** while the multi-agent workflow completes.

## Step 3: Review the Output

When complete, Atoms will generate:

- `wiki.md` (project summary)
- A complete product specification (for example, `product-spec-gamification-feature.md`)

Open the specification file.

> **Note:** Atoms creates a **product specification**, not application code. You'll use this specification to generate your application in the next stage.

---

# Part 2: Set Up GitHub and Vercel

Before generating any code, create your GitHub repository and connect it to Vercel.

## Step 1: Create a GitHub Repository

1. Go to GitHub.
2. Click the **+** icon.
3. Select **New repository**.
4. Name the repository:

```text
habit-tracker-app
```

5. **Do not** initialize the repository with:
   - README
   - `.gitignore`
   - License

6. Make the repository **Public**.
7. Click **Create repository**.

## Step 2: Set Up Vercel

1. Visit https://vercel.com.
2. Sign in using GitHub.
3. Click **Add New → Project**.
4. Select your new repository.
5. Click **Deploy**.

The deployment will fail because there is no code yet.

That is expected.

Vercel has now created a project that is permanently linked to your GitHub repository.

> **Why do this now?** Every future GitHub push will automatically trigger a new deployment.

---

# Part 3: Set Up Your Project Folder

Now you'll create your local project folder and clone the starter template.

## Step 1: Navigate to Your Lesson Folder

Open your lesson folder:

```text
 cd 5- Multi-Agent Ecosystems (I)
```


## Step 2: Clone the Template Repository

Open Git Bash (Windows) or Terminal (macOS/Linux).

Run:

```bash
git clone https://github.com/AlveiroMateus/habit-tracker-app-template.git habit-tracker-app
cd habit-tracker-app
```

## Step 3: Open the Project in VS Code

Run:

```bash
code .
```

If `code` isn't recognized, open VS Code manually and choose:

**File → Open Folder**

Select your `habit-tracker-app` folder.

---

# Part 4: Build the App (Your LLM of Choice)

Now you'll generate the application using your product specification.

## Step 1: Copy the Product Specification

Copy the entire contents of your Atoms specification (`.md` file).

## Step 2: Generate the Code

Paste the specification into your preferred LLM along with the following prompt:

> **You are a senior frontend developer. Build a React frontend for a habit tracking app with gamification features. Use mock data (no database or backend needed).**
>
> The app should include:
>
> 1. Dashboard showing habits and progress
> 2. XP, levels, achievements, and streaks
> 3. Leaderboard using mock data
> 4. Responsive design
> 5. Clean, well-documented code
> 6. README with setup and deployment instructions
> 7. Vercel deployment configuration (`vercel.json`)
>
> No backend or database is required.
>
> Please generate every file needed to run locally and deploy to Vercel.
>
> Output every file with its complete filename and path (for example, `src/App.js`, `src/components/Dashboard.js`, `vercel.json`).

## Step 3: Save the Generated Files

The LLM will output files individually.

For example:

```text
src/App.js
src/components/Dashboard.js
src/styles/main.css
vercel.json
README.md
```

Save every generated file.

> **Tip:** If the folder structure doesn't exist yet, simply create the missing folders inside VS Code.

---

# Part 5: Fill in the Code

Now copy the generated code into your project.

## Step 1: Open the Project

If needed:

```bash
cd habit-tracker-app
code .
```

## Step 2: Create or Locate Each File

For every file generated:

- Find it in the Explorer
- Create missing folders if necessary
- Create missing files if necessary
- Paste the generated code
- Save

## Step 3: Test the Application

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Your browser should open:

```text
http://localhost:3000
```

---

# Part 6: Push to GitHub

Once everything works locally, upload your project.

## Step 1: Change the Remote Repository

If you cloned the template, replace its GitHub origin with your own repository.

```bash
git remote remove origin
git remote add origin https://github.com/your-username/habit-tracker-app.git
```

## Step 2: Commit and Push

```bash
git add .
git commit -m "Add habit tracker app"
git push -u origin main
```

## Step 3: Verify the Remote (Optional)

Run:

```bash
git remote -v
```

Expected output:

```text
origin https://github.com/your-username/habit-tracker-app.git (fetch)
origin https://github.com/your-username/habit-tracker-app.git (push)
```

---

# Part 7: Deploy to Vercel

Since Vercel is already connected to GitHub, deployment is automatic.

## Step 1: Check Vercel

1. Visit https://vercel.com
2. Log in.
3. Open your project dashboard.

A deployment should already be running.

## Step 2: View Your Live Application

When deployment finishes:

1. Click **Visit**.
2. Open your live website.

Your application is now publicly available.

Share the URL with anyone.

---

# Part 8: Additional Options

## Improve the UI Using Claude

If you'd like a more polished interface, paste your frontend code into Claude with this prompt:

> **You are a senior UI/UX designer and frontend developer. I have a working habit tracking app, but the UI needs polish. Please update the frontend code with a modern, gamified design.**
>
> **[Paste your frontend code here]**
>
> Improve:
>
> - Visual design
> - Dashboard UX
> - Gamification interface
> - Leaderboard
> - Mobile responsiveness
> - Animations
> - Accessibility
>
> Return updated frontend code, CSS, and any design assets.

After making improvements:

1. Commit your changes.
2. Push to GitHub.

Vercel will automatically redeploy.

---

## Deploy Using the Vercel CLI (Optional)

Install the CLI:

```bash
npm install -g vercel
```

Deploy:

```bash
vercel
```

Follow the prompts.

---

# Summary

| Step | Tool | Output |
|------|------|--------|
| 1 | Atoms | Product specification |
| 2 | GitHub + Vercel | Connected repositories |
| 3 | Template + VS Code | Local project folder |
| 4 | Your LLM of Choice | Complete frontend application |
| 5 | VS Code | Code placed into project |
| 6 | Git | Code pushed to GitHub |
| 7 | Vercel | Live deployed application |

---

# Troubleshooting

| Issue | Solution |
|--------|----------|
| Atoms quota limit reached | Wait 24 hours or upgrade your plan. |
| Vercel build fails | Review the deployment logs. Missing dependencies or incorrect framework settings are common causes. |
| App doesn't run locally | Run `npm install` and follow the README instructions. |
| Git push fails | Verify your remote using `git remote -v` and ensure you have permission to push. |
| Git not found | Install Git from https://git-scm.com and restart your terminal. |
| `mkdir -p` doesn't work on Windows | Use Git Bash instead of PowerShell or Command Prompt. |

---

# Next Steps

After completing this workflow, consider:

- Sharing your live application with classmates.
- Experimenting with different prompts to compare outputs.
- Expanding the product specification with new features.
- Generating and deploying additional AI-built applications.

---

# Overall Workflow

| Section | What It Covers |
|---------|----------------|
| **Part 1** | Generate the product specification with Atoms |
| **Part 2** | Set up GitHub and Vercel before coding |
| **Part 3** | Create your local project and clone the template |
| **Part 4** | Generate application code using an LLM |
| **Part 5** | Copy the generated code into your project |
| **Part 6** | Push your project to GitHub |
| **Part 7** | Automatic deployment with Vercel |
| **Part 8** | Optional UI improvements and CLI deployment |

---

# Congratulations!

You've successfully gone from **idea → product specification → project setup → AI-generated application → GitHub repository → live deployed web application** using a modern AI-assisted development workflow.