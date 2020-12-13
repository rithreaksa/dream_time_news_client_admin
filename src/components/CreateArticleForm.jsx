import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios"

const CreateArticleForm = () => {
  const [message, setMessage] = useState()
  const [title, setTitle] = useState()
  const [subtitle, setSubtitle] = useState()
  const [author, setAuthor] = useState()
  const [content, setContent] = useState()

  let headers = useSelector((state) => state.currentUser)

  const saveArticle = async (e) => {
    e.preventDefault()
    debugger
    setTitle(e.target.title.value);
    setSubtitle(e.target.input_sub_title.value)
    setAuthor(e.target.input_author.value)
    setContent(e.target.input_content.value)
    setMessage("Your article was created")
    headers = {
      ...headers,
      "Content-type": "application/json",
      Accept: "application/json"
    }
    try {
      await axios.post(
        "/articles",
        {
          article: {
            title: title,
            sub_title: subtitle,
            author_id: author,
            content: content,
          },
        }
      )
    }
    catch (err) {
      alert("Something went wrong!")
    }
  }

  return (
    <>
      <form data-cy="create-article-form" onSubmit={(e) => saveArticle(e)}>
        <input
          data-cy="input-title"
          type="text"
          name="title"
          placeholder="Title"
        />
        <br />
        <input
          data-cy="input-author"
          type="text"
          name="input_author"
          placeholder="Author"
        />
        <br />
        <input
          data-cy="input-sub-title"
          type="text"
          name="input_sub_title"
          placeholder="Sub Title"
        />
        <br />
        <input
          data-cy="input-content"
          type="text"
          name="input_content"
          placeholder="Content"
        />
        <br />
        <button
          data-cy="create-article-button"
          type="submit"
          value="submit"
        >
          Create Article
        </button>
        <p data-cy="response-message">{message && message}</p>
      </form>
    </>
  );
};

export default CreateArticleForm;