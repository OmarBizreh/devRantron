import React, { Component } from 'react';

const { dialog, app } = require('electron').remote;
const fs = require('electron').remote.require('fs');

class PostRant extends Component {
  constructor(props) {
    super(props);
    this.state = { rantText: 'Lol windows sux amirite?' };
  }
  selectImage() {
    dialog.showOpenDialog({
      title: 'Select Image',
      defaultPath: app.getPath('pictures'),
      filters: [
        { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
      ],
    }, (fp) => {
      if (fp.length !== 0) {
        let data;
        switch (fp[0].split('.')[fp[0].split('.').length - 1]) {
          case 'png':
            data = `data:image/png;base64,${new Buffer(fs.readFileSync(fp[0])).toString('base64')}`;
            break;
          case 'gif':
            data = `data:image/gif;base64,${new Buffer(fs.readFileSync(fp[0])).toString('base64')}`;
            break;
          default:
            data = `data:image/jpeg;base64,${new Buffer(fs.readFileSync(fp[0])).toString('base64')}`;
        }
        this.setState({ rantImage: data });
      }
    });
  }
  render() {
    let imageSource = '';
    if (this.state.rantImage !== undefined) {
      imageSource = <div className="card-image"><img src={this.state.rantImage} alt="" /></div>;
    }
    return (
      <div className="postrant">
        <div className="postranteditor">
          <textarea
            rows="8"
            placeholder="Lol windows sux amirite?"
            id="rantEditorText"
            onInput={(e) => {
              this.setState({ rantText: e.target.value });
            }}
          />
          <input type="text" placeholder="Tags (Linux ftw, Windows Sux, etc.)" />
          <button
            className="btn"
            onClick= {()=>this.selectImage()}
          >Add Image</button>
          <button
            className="btn"
            onClick={() => {
              console.log('tahnik do yer magic here :)');
            }}
          >Post Rant</button>
        </div>
        <div className="postrantpreview">
          <div className="rant_card row" >
            <div className="card blue-grey darken-1">
              <div className="card-user">
                <img alt="profile" src="https://avatars.devrant.io/v-11_c-3_b-5_g-m_9-1_1-1_16-14_3-2_8-3_7-3_5-3_12-1_6-3_10-9_2-54_11-2_4-3_19-2_21-2.jpg" />
                <div>
                  <p>Dacexi</p>
                  <p className="user_score">+5 trilion</p>
                </div>
              </div>
              <div className="card-content white-text">
                <pre><p>{this.state.rantText}</p></pre>
              </div>
              {imageSource}
              <div className="card-bottomBar">
                <button>
                  <i
                    className="ion-plus-round"
                  />
                </button>
                <p>0</p>
                <i
                  className="ion-minus-round"
                />
                <div style={{ flex: 1 }} />
                <p>0</p>
                <button>
                  <i className="ion-chatbubbles" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostRant;
