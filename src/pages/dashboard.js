import React, { Component } from "react"
import {
  Container,
  FormGroup,
  Input,
  Label,
  FormText,
  Button,
  Row,
} from "reactstrap"
import { Editor } from "react-draft-wysiwyg"
import draftToHtml from "draftjs-to-html"
import htmlToDraft from "html-to-draftjs"
import { EditorState, convertToRaw, ContentState } from "draft-js"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import Axios from "axios"

class DashBoard extends Component {
  constructor(props) {
    super(props)

    const html = "<p>Hey this <strong>editor</strong> rocks 😀</p>"
    const contentBlock = htmlToDraft(html)
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      )
      const editorState = EditorState.createWithContent(contentState)
      this.state = {
        editorState,
      }
    }
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState,
    })
  }

  validateField = () => {}

  onSubmit = () => {
    const data = {
      title: document.querySelector("#title").value,
      img_banner: document.querySelector("#fileThumbnail").value,
      content: draftToHtml(
        convertToRaw(this.state.editorState.getCurrentContent())
      ),
    }
    // Axios.post(
    //   "https://blog-dev.taragala.com/api/admin/crud/blog-content",
    //   data
    // )
    //   .then(res => console.log(res))
    //   .catch(err => console.error(err))

    console.log(data)
  }

  getFile = () => {
    document.querySelector("#fileThumbnail").click()
    document.querySelector("#fileBtn").blur()
  }

  getFilename = () => {
    const fileCaption = document.querySelector("#fileCaption")
    const fileThumbnail = document.querySelector("#fileThumbnail")
    if (fileThumbnail.value) {
      fileCaption.innerHTML = fileThumbnail.value
    } else {
      fileCaption.innerHTML = "No chosen file, yet."
    }
  }

  render() {
    const htmlContent = draftToHtml(
      convertToRaw(this.state.editorState.getCurrentContent())
    )

    return (
      <section className="py-10">
        <Container>
          <h2>Create Post</h2>
          <FormGroup>
            <Label for="title" size="lg">
              Title
            </Label>
            <Input
              type="text"
              name="title"
              id="title"
              size="lg"
              className="font-weight-bold"
            />
          </FormGroup>
          <FormGroup>
            <Label for="fileThumbnail">Thumbnail</Label>
            <br />
            <Input
              type="file"
              name="fileThumbnail"
              id="fileThumbnail"
              onChange={this.getFilename}
              hidden
            />
            <Button
              outline
              className="btn-default bg-white"
              id="fileBtn"
              onClick={this.getFile}
            >
              Choose File
            </Button>
            <span className="ml-1" id="fileCaption">
              No file chosen, yet
            </span>
            <FormText color="muted">
              Please select an image for the thumbnail of the post.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label>Body</Label>
            <Editor
              wrapperClassName="shadow"
              editorClassName="bg-light p-3"
              toolbarClassName="bg-secondary"
              editorStyle={{ minHeight: "300px" }}
              onEditorStateChange={this.onEditorStateChange}
            />
          </FormGroup>
          <Row className="justify-content-end m-0">
            <Button
              size="lg"
              className="btn-default font-family-roboto-r"
              onClick={this.onSubmit}
            >
              Publish
            </Button>
          </Row>
          {/* <article id="htmlContent">{htmlContent}</article> */}
        </Container>
      </section>
    )
  }
}

export default DashBoard
