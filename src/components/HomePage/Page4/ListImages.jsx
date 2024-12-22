import React from "react";
import "./ListImages.css"
function ListImages() {
  const imageList = [
    {text:"Lorem", imageURL:"https://images.unsplash.com/photo-1734276221099-ba7f256b15e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {text:"Elem Nelem", imageURL:"https://images.unsplash.com/photo-1732221560326-f6c8cb063e8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {text:"Episolon Charge", imageURL:"https://plus.unsplash.com/premium_photo-1734440541572-4e0367669638?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {text:"Delta Attack", imageURL:"https://images.unsplash.com/photo-1553933899-131780ba04a3?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {text:"Gamma", imageURL:"https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {text:"Beta Defence", imageURL:"https://plus.unsplash.com/premium_photo-1670438167779-2cda71e3c777?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {text:"Alpha", imageURL:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {text:"Redhat", imageURL:"https://images.unsplash.com/photo-1562758778-e5638b5b6607?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {text:"Pond of Luck", imageURL:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  ]
  return (
    <>
      <div className="list-images">
        {imageList.map((item,index)=>(
          <div key={index} className="item-image">
            <img src={item.imageURL} alt="" />
            <div className="image-below-text"><h3>{item.text}</h3></div>
          </div>
        ))}

      </div>
    </>
  );
}

export default ListImages;
