
--- question ---

---
legend: Question 4 of 5
---

Which of the following pieces of code will show you the message 'Nice biscuits!' if you visit `http://127.0.0.1:5000/biscuits`

This would serve coffee
```python
@app.route('/coffee')
def index():
    return 'Have some coffee'
```

--- choices ---

  --- feedback ---
  Check the route AND the returned text.
  --- /feedback ---

- ( )
  ```python
  @app.route('/')
  def index():
      return 'Hello world'
  ```

- ( )
  ```python
  @app.route('/')
  def index():
      return 'Nice biscuits'
  ```

- (x)
  ```python
  @app.route('/biscuits')
  def index():
      return 'Nice biscuits'
  ```

  --- feedback ---
  Well done!  (This may not show??)
  --- /feedback ---

- ( )
  ```python
  @app.route('/biscuits')
  def index():
      return 'Hello world'
  ```

--- /choices ---

--- /question ---
