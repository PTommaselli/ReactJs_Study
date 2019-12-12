import React from 'react';
import './ItemPost.css';

function ItemPost({avatar, author, date, comment, comments}) {
  return(
    <section className="post" >
      <div className="info" >
        <img className="profile_img" src={ avatar }/>
        <div className="labals">
          <h3>{ author }</h3>
          <legend>{ date }</legend>
        </div>
      </div>

      <p className="text">{ comment }</p>
      <div className="division" ></div>

      <div className="commits">
        { comments.map(commit => (
            <section className="commit">
            <img className="avatar" src={ commit.author.avatar } alt=""/>
            <p className="comment"><b>{ commit.author.name }</b> { commit.coment }</p>
          </section>
          ))
        }
      </div>

    </section>
  )
}

export default ItemPost;