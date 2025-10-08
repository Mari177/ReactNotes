
## 1. **What is Emmet?**

* **Definition:** Emmet is a toolkit integrated into editors like VS Code, Sublime, or Atom, designed to **speed up HTML and CSS coding**.
* **Key Feature:** Allows writing **short abbreviations** that expand into full HTML/CSS code automatically.
* **Benefits:**

  * Reduces typing repetitive code
  * Helps beginners write correct HTML faster

**Example:**

```html
div#app>ul>li*3
```

**Expands to:**

```html
<div id="app">
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
```

---

## 2. **Difference between a Library and a Framework**

| Feature        | Library                                                       | Framework                                                                |
| -------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Definition** | A collection of pre-written functions/components you can call | A complete structure for building an application; it **calls your code** |
| **Control**    | You are in control (“You call the library”)                   | Framework is in control (“Inversion of Control”)                         |
| **Scope**      | Focused on specific tasks                                     | Provides overall architecture and structure                              |
| **Examples**   | React, Lodash, jQuery                                         | Angular, Vue, Django                                                     |

**Key takeaway:**

* Library → you **use** it as needed
* Framework → you **plug your code into it**, it dictates the structure

---

## 3. **What is CDN? Why do we use it?**

* **Definition:** CDN = **Content Delivery Network**
* A network of globally distributed servers that **deliver static content** (JS, CSS, images, fonts) closer to the user.

**Advantages:**

1. **Faster page load** → the file comes from the server nearest to the user.
2. **Saves bandwidth** → you don’t need to host large JS/CSS files yourself.
3. **Easy access to popular libraries** → no need to download manually.

**Example (React via CDN):**

```html
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
```

---

## 4. **Why is React known as React?**

* React is named **“React”** because it **reacts to changes in data** automatically.
* Whenever the **state or props of a component change**, React updates only the affected parts of the **DOM** efficiently using **Virtual DOM**.
* Focuses on building **component-based UIs** with minimal manual DOM manipulation.

---

## 5. **What is `crossorigin` in `<script>` tag?**

* **Definition:** Attribute that controls **cross-origin requests** and whether the browser can access the resource across domains.
* **Purpose:** Needed when fetching scripts, fonts, or images from another domain, especially when using **Subresource Integrity (SRI)** or sending credentials.

**Values:**

| Value             | Meaning                                                     |
| ----------------- | ----------------------------------------------------------- |
| `anonymous`       | No credentials sent; allows SRI checks                      |
| `use-credentials` | Sends cookies, HTTP auth, or TLS certificates to the server |
| Not present       | Default behavior; may block some cross-origin access        |

**Example:**

```html
<script src="https://cdn.com/library.js" crossorigin="anonymous"></script>
```

---

## 6. **Difference between React and ReactDOM**

| Feature      | React                                                        | ReactDOM                                      |
| ------------ | ------------------------------------------------------------ | --------------------------------------------- |
| **Purpose**  | Core library for building components, managing state and JSX | Handles rendering React components to the DOM |
| **Key APIs** | `React.createElement`, `useState`, `useEffect`               | `ReactDOM.createRoot`, `render()`             |
| **Example:** |                                                              |                                               |

```js
// React
const heading = React.createElement("h1", {}, "Hello World");

// ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

* **Key takeaway:** React → defines components, ReactDOM → renders components to the web page.

---

## 7. **Difference between `react.development.js` and `react.production.js`**

| File                   | Use Case    | Features                                         |
| ---------------------- | ----------- | ------------------------------------------------ |
| `react.development.js` | Development | Full warnings, unminified, easy to debug, slower |
| `react.production.js`  | Production  | Minified, faster, no warnings, harder to debug   |

* **Development build:** Good for debugging and learning.
* **Production build:** Optimized for speed, smaller file size, removes runtime checks.

---

## 8. **What is `async` and `defer`?**

**Purpose:** Control how `<script>` tags load and execute.

| Attribute | Download | Execution          | Order          | Use Case                                 |
| --------- | -------- | ------------------ | -------------- | ---------------------------------------- |
| None      | Blocking | Immediately        | Preserved      | Critical scripts, may block HTML parsing |
| `async`   | Parallel | As soon as ready   | Not guaranteed | Independent scripts (analytics, ads)     |
| `defer`   | Parallel | After HTML parsing | Preserved      | DOM-dependent scripts (React, libraries) |

**Explanation:**

* **Normal scripts:** Blocks HTML parsing → executes immediately.
* **Async:** Loads in parallel, executes as soon as possible, may cause race conditions.
* **Defer:** Loads in parallel, executes **after HTML is parsed**, maintains order → safe for React apps.

**Example for React:**

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js" defer></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" defer></script>
<script src="./App.js" defer></script>
```

