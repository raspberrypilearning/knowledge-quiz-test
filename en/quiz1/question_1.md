# Quiz introduction

The quiz can have normal HTML before it, which will just be treated like normal markdown.

Anything inside a `---question---` block will be parsed into a `<form>` representing the quiz question

A question may optionally have a 'frontmatter' section with the `legend` parameter to override the default 'Question' string used in the form's legend tag.

--- question ---

---
legend: Question 1 of 3
---

A dog sprite in Scratch has the following code:

![A dog](images/quiz/q1-1.png) ![Selection of four scratch blocks](images/quiz/q1-2.png)

How would you get the dog sprite to change size?

--- choices ---

- ( ) Press the 'space' key

  --- feedback ---
  What code is attached to the
  \```blocks3
  when [space v] key pressed
  \```
  event block?
  --- /feedback ---

- ( ) Make a loud noise

  --- feedback ---
  What code is attached to the
  \```blocks3
  when [loudness v] > 10 :: events hat
  \```
  event block?
  --- /feedback ---

- ( ) Click the green flag

  --- feedback ---
  What code is attached to the
  \```blocks3
  when flag clicked
  \```
  event block?
  --- /feedback ---

- (x) Click on the dog sprite

--- /choices ---

--- /question ---
