# Adhin Gopuj A: Portfolio and The EV Handbook

This folder is a complete website. Put it on GitHub Pages and it gets a public link
like https://YOUR-USERNAME.github.io that you can share on LinkedIn.

## What is in this folder

| File | What it is | Edit it? |
|---|---|---|
| `index.html` | The portfolio page: summary, work, experience, skills, contact | Yes, the text only |
| `content/handbook/*.md` | One file per handbook chapter, in Markdown | Yes, freely |
| `content/chapters.json` | The order of the chapters | Only to add, remove or reorder chapters |
| `site.js`, `marked.min.js` | The code that runs the site | No |

## Editing a handbook chapter

1. On GitHub, open `content/handbook/` and click the chapter file, for example `02-battery.md`.
2. Click the pencil icon (Edit).
3. Change the text. Markdown basics:
   - `# Title` on the first line is the chapter title (it also appears in the chapter list).
   - `## Heading` and `### Smaller heading` for sections.
   - `**bold**` for bold text.
   - Lines starting with `- ` become bullet points; `1. ` becomes a numbered list.
   - Lines starting with `> ` become a highlighted "In the field" box.
   - Tables use `|` between columns (copy an existing table and change the words).
4. Click **Commit changes**. The site updates within a minute or two.

## Adding a new chapter

1. In `content/handbook/`, click **Add file > Create new file** and name it, for example `11-charging-infrastructure.md`.
   The part after the number becomes the chapter's web address (`#charging-infrastructure`).
2. Start the file with `# Your chapter title`, write the chapter, and commit.
3. Open `content/chapters.json`, add the file name to the list in the position you want
   (each name in quotes, separated by commas), and commit.

If a file is listed in `chapters.json` but does not exist yet, the chapter shows as "in progress".

## Editing the portfolio page

Open `index.html`, click the pencil icon and change the words between the tags.
For example, in `<p class="role">Mechanical engineer...</p>`, change only the words, never the
`<p class="role">` or `</p>` parts. Use Ctrl+F (Cmd+F on Mac) in the editor to find the sentence you want.

## Note on previewing

The handbook loads its chapters from the files, which works on GitHub Pages but not when you
double-click `index.html` on your computer. Always check changes on the live site.
