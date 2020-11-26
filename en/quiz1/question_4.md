
--- question ---

---
legend: Question 4 of 4
---

Which of the following pieces of code will show you the message 'Nice biscuits!' if you visit `http://127.0.0.1:5000/biscuits`

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

- ( )
  ```python
  @app.route('/biscuits')
  def index():
      return 'Hello world'
  ```

--- /choices ---

--- /question ---
