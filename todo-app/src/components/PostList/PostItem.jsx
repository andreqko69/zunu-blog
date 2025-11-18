import React from "react";

const PostItem = React.memo(({ id, title, body, onDelete }) => {
  console.log("PostItem component rendered with id:", id);

  return (
    <div className="list-row flex flex-col justify-between items-center gap-3 rounded p-2 cursor-pointer">
      <h1 className="text-xl text-left w-full font-bold">
        {title}{" "}
        <button className="btn btn-danger" onClick={() => onDelete(id)}>
          X
        </button>
      </h1>
      <div className="">{body}</div>
    </div>
  );
});

export default PostItem;
