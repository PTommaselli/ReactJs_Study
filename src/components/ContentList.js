import React, {Component} from 'react';
import './ContentList.css'

import ItemPost from './ItemPost';

class ContentList extends Component{
  state ={
    posts: [
      {
        id: 1,
        author: {
          avatar: "https://placeimg.com/600/600/any",
          name: "Pedro Garcia",
        },
        date: "04 Jun 2019",
        coment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        commits: [
          {
            id: 2,
            author: {
              avatar: "https://placeimg.com/600/600",
              name: "Juliane Lira",
            },
            date: "10 Jul 2019",
            coment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          }
        ]
      },
      {
        id: 1,
        author: {
          avatar: "https://placeimg.com/600/600/any",
          name: "Pedro Garcia",
        },
        date: "04 Jun 2019",
        coment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        commits: [
          {
            id: 1,
            author: {
              avatar: "https://placeimg.com/600/600",
              name: "Juliane Lira",
            },
            date: "10 Jul 2019",
            coment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          },
        ]
      }
    ]
  }
  
  render(){
    const { posts } = this.state;
    return(
       <div className="content" >
        { posts.map(post => (
            <ItemPost 
              key={ post.id } 
              avatar={ post.author.avatar }
              author={ post.author.name }
              date={ post.date }
              comment={ post.coment }
              comments={ post.commits }
            />
        ))}
       </div>
    )
  }
}

export default ContentList