
--- question ---

---
legend: Cwestiwn 4 o 5
---

Pa un o'r darnau cod canlynol fydd yn dangos y neges 'Bisgedi neis i chi!' os ymwelwch â `http://127.0.0.1:5000/bisgedi`

--- choices ---

  --- feedback ---
  Gwiriwch y llwybr A'R testun a ddychwelwyd.
  --- /feedback ---

- ( )
  ```python
  @app.route('/')
  def index():
      return 'Helo Byd'
  ```

- ( )
  ```python
  @app.route('/')
  def index():
      return 'Bisgedi neis i chi!'
  ```

- (x)
  ```python
  @app.route('/bisgedi')
  def index():
      return 'Bisgedi neis i chi!'
  ```

- ( )
  ```python
  @app.route('/bisgedi')
  def index():
      return 'Helo Byd'
  ```

--- /choices ---

--- /question ---
