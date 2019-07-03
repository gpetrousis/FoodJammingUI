# FoodJammingUI
Ui library for the foodjamming blog

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
* don't be afraid to ask questions.
* Checkout the branch and test the changes.
* Read the changes and think how to improve the code.
* Reason about every comment you leave.

# Design decisions 
## Typography
The idea in Typography is to create different components that re-use as much
styles and css code as possible so that the Components can be easily updated
from centralized styles and they can scale.

I identified 4 main components of typography: Font, Style, Size, Color

I decided to start small and add more as the project advances so I used only
one font which is the base of all all the components. The style contains
Bold, Italic, Muted, or even font weight. In the size I have defined several
useful sizes for each Component. More sizes will be added later based on the
media size to create a responsive result. Finally the color belongs to the
Theme of the app and shouldn't be part of the Typography it self.

With the above in mind I created small css components using the
styled-components module, and mix and match them to create the Typography.

The naming of the components is based on the usage to make things a bit
simpler.