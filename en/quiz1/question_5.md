
--- question ---

---
legend: Question 5 of 5
---

What happens if we show a wide scratch block in the question, for example, this one from [Poetry Generator](https://projects.raspberrypi.org/en/projects/poetry-generator/4)

```blocks3
say (join [I ](item (pick random (1) to (length of [verbs v])) of [verbs v]) :: +) for (2) seconds
```

Also testing blocks in feedback and wide blocks in answers...

--- choices ---

  --- feedback ---
  Can we show blocks in feedback?
  ```blocks3
  when this sprite clicked
  say [Here is your poem...] for (2) seconds
  + say (join [I ](item (pick random (1) to (length of [verbs v])) of [verbs v])) for (2) seconds
  ```
  --- /feedback ---

- ( )
  `Pick a random number`{:class="block3operators"} between `1` and the `length of the verbs list`{:class="block3variables"}:
  ```blocks3
  (pick random (1) to (length of [verbs v]))
  ```

- ( )
  Use this block to get a random `item`{:class="block3variables"} from the `verbs`{:class="block3variables"} list:
  ```blocks3
  (item (pick random (1) to (length of [verbs v]) :: +) of [verbs v])
  ```

- (x)
  `Join`{:class="block3operators"} "I " with the random verb to create the first line of your poem:

  ```blocks3
  (join [I ] (item (pick random (1) to (length of [verbs v])) of [verbs v] :: +))
  ```

- ( )
  Use a `say`{:class="block3looks"} block to display the line of poetry:

  ```blocks3
  say (join [I ](item (pick random (1) to (length of [verbs v])) of [verbs v]) :: +) for (2) seconds
  ```

--- /choices ---

--- /question ---
