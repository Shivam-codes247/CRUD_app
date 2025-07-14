```markdown
📝 CRUD Notes App (Express.js)

This is a simple CRUD (Create, Read, Update, Delete) Notes API built using Node.js and Express.js.  
The app stores notes in memory (JavaScript array), and supports all basic HTTP methods.

✅ Postman is used as the frontend to test and visualize API requests and responses.

```

```

📁 Project Structure

📦 crud-notes-app
├── server.js         # Main Express server file
├── package.json      # Node.js project metadata
└── README.md         # You're reading it now!

```

````

🚀 Features

- GET / – Welcome message  
- POST /notes – Create a new note  
- GET /notes – Get all notes  
- PATCH /notes/:index – Update a note  
- DELETE /notes/:index – Delete a note

````


## 🧪 API Endpoints

### ➕ POST `/notes`


*Create a new note.*

**Body:**

```json
{
  "title": "cohort",
  "content": "placement 100%"
}
```


**Response:**

*json*
```
{
  "message": "Post method successfull"
}
```

---

### 📖 GET `/notes`

Returns all notes.

---

### ✏️ PATCH `/notes/:index`

Update the title of a note by index.

**Body:**

```json
{
  "title": "updated title"
}
```

---

### ❌ DELETE `/notes/:index`

Delete a note by index.

---

## 🛠️ How to Run Locally

```bash
git clone https://github.com/your-username/crud-notes-app.git
cd crud-notes-app
npm install
node server.js
```

Server will start at:

```
http://localhost:3000
```

---

## 🧪 Testing with Postman

* Use **Postman** to send HTTP requests (`GET`, `POST`, `PATCH`, `DELETE`) to the endpoints.
* Ensure `Content-Type: application/json` is set in headers for `POST` and `PATCH`.
* You can visualize request/response flow easily using Postman.

---

## 📸 Sample Request using curl

```bash
curl -X POST http://localhost:3000/notes \
     -H "Content-Type: application/json" \
     -d '{"title": "cohort", "content": "placement 100%"}'
```

---

## 💡 Future Improvements

* Add persistent storage (MongoDB)
* Validate request bodies
* Use unique IDs instead of array indexes

---

## 🙌 Author

Made with ❤️ by [Shivam](https://github.com/your-username)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE)

---

### 📌 Notes:
- Be sure to replace `https://github.com/your-username/crud-notes-app.git` and author link with your actual GitHub username.
- Don’t copy from chat preview — click into the message to expand it first for safe copying.

Let me know if you'd like a downloadable `.md` file too.

