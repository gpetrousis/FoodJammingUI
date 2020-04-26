# Coding standards
## Tools used
* eslint
* pre-commit (husky)

## Commit messages
Sited from [https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project]
```
Capitalized, short (50 chars or less) summary

More detailed explanatory text, if necessary.  Wrap it to about 72
characters or so.  In some contexts, the first line is treated as the
subject of an email and the rest of the text as the body.  The blank
line separating the summary from the body is critical (unless you omit
the body entirely); tools like rebase can get confused if you run the
two together.

Write your commit message in the imperative: "Fix bug" and not "Fixed bug"
or "Fixes bug."  This convention matches up with commit messages generated
by commands like git merge and git revert.

Further paragraphs come after blank lines.

- Bullet points are okay, too

- Typically a hyphen or asterisk is used for the bullet, followed by a
  single space, with blank lines in between, but conventions vary here

- Use a hanging indent
```

Based on those guidelines:
 * The subject should be in the form of `[#TicketNr] {Action} {Subject line}`.
 * Actions include: Fix, Implement, Doc, Refactor, Test.
 * No more than one action should be included in the subject.
 * Do not end the subject line with a period.
 * If applied, this commit will `your subject line here`.

## Code Review Guide
* Review the code without bias and emotions.
* Review your code before the sending for a Pull Request (PR). 
  Follow the review checklist and make sure the code is done.
* Keep the PR to the point. No extra features, minor changes,
  etc that are out of scope.
* Do not send early PRs. If you need to send one mark it as preliminary.
* Question everything in the code.
* Send small pull requests if possible.
* Keep good quality code even when you are working on a PoC.
  You never know if you'll keep the same piece of code for later.
* Always write a small documentation for each function that contains
  the params and the return type.

### Review checklist:
* Each commit can be deployed independently.
* The are no leftover prints, debug code, comments.
* The code works correctly (inc corner cases).
* There are zero known defects.
* Have implemented proper error handling and proper logging.
* Have implemented tests.
* Have created/updated the documentation.
* The tests are succeeding.
* The style matches the rest of the code. (Use linter)
* The variable names make sense.
* The functionality is split into small modular functions.
* Have merged/rebased master into the working branch.
* There are no conflicts.
* Are you proud of your code for others to see?

### As a reviewer:
* Read the ticket and understand the task/problem/bug.
* Don't be afraid to ask questions.
* Checkout the branch and test the changes.
* Read the changes and think how to improve the code.
* Reason about every comment you leave.

## Change log
Based on the instructions from [https://keepachangelog.com/en/1.0.0/]
* Update the change log with every release bigger than pre-release.
* Keep the change log in reverse chronological order (latest first).
* For each release note the date and fill the following sections if applicable:
  * `Added` for new features.
  * `Changed` for changes in existing functionality.
  * `Deprecated` for soon-to-be removed features.
  * `Removed` for now removed features.
  * `Fixed` for any bug fixes.
  * `Security` in case of vulnerabilities.
* Keep the example template at the top of the file.
