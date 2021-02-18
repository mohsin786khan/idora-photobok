import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from "draft-convert";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Cms = () => {
    const history = useHistory();
    const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [select, setSelect] = useState("");
  const [content, setHtmlText] = useState(null);

  const handleChange = (value) => {
    setEditorState(value);
    ToHtml();
  };
  const ToHtml = () => {
    const html = convertToHTML(editorState.getCurrentContent());
    setHtmlText(html);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(content, select);
    try {
      const result = await axios({
        method: "post",
        url: "http://localhost:8000/api/v1/cms/create",
        data: { description: content, title: select },
      });
      if (result) {
        setTimeout(() => {
            history.push('/');
        }, 2500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section id="page-title">
        <div class="container clearfix">
          <h1>CMS</h1>
          <span>Forms Widget</span>
        </div>
      </section>

      <section id="content">
        <div class="content-wrap">
          <div class="container clearfix">
            <div class="form-widget">
              <div class="form-result"></div>

              <div class="bottommargin-sm">
                <div class="form-row">
                  <form class="row" onSubmit={handleSubmit}>
                    <div class="form-process">
                      <div class="css3-spinner">
                        <div class="css3-spinner-scaler"></div>
                      </div>
                    </div>

                    <div class="col-12 form-group">
                      <div class="row">
                        <div class="col-md-6 form-group">
                          <label>Title:</label>
                          <select
                            onChange={(e) => setSelect(e.target.value)}
                            class="form-control required"
                            name="jobs-application-experience"
                            id="jobs-application-experience"
                          >
                            <option value="">-- Select One --</option>
                            <option value="About us">About us</option>
                            <option value="Terms and Policy">
                              Terms and Policy
                            </option>
                            <option value="privacy and policy">
                              privacy and Policy
                            </option>
                            <option value="Refund Policy">Refund Policy</option>
                            <option value="Cookie Policy">Cookie Policy</option>
                          </select>
                        </div>

                        <div class="w-100"></div>

                        <div class="w-100"></div>
                      </div>

                      <label>Description :</label>
                      <div
                        class="form-group"
                        style={{ height: "400px", border: "1px solid black" }}
                      >
                        <Editor
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                          onEditorStateChange={handleChange}
                          editorState={editorState}
                        />
                      </div>

                      <button type="submit" class="btn btn-primary">
                        add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cms;
