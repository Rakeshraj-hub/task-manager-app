import React from "react";
import Badge from "./Badge";
import { Link } from "react-router-dom";

const Task = ({ props, onDelete }) => {
  const badgeColor =
    props.status === "Pending"
      ? "blue"
      : props.status === "Completed"
      ? "green"
      : "red";

  const handleDelete = async () => {
    await onDelete(props._id);
  };

  const created = new Date(props.createdAt).toLocaleString();
  const updated = new Date(props.updatedAt).toLocaleString();
  const isUpdated = props.updatedAt !== props.createdAt;

  return (
    <div className="task p-4 shadow-md bg-white rounded-lg mb-4 border">
      
      
      <Badge color={badgeColor} text={props.status}/>

      
      <h3 className="font-bold text-lg mt-2">{props.title}</h3>

      
      <p className="text-gray-600 text-sm mt-1">{props.description}</p>

      
      <div className="text-xs text-gray-500 mt-3 space-y-1">
        <p>
          <span className="font-semibold">Created: </span>
          {created}
        </p>

        {isUpdated && (
          <p>
            <span className="font-semibold">Updated: </span>
            {updated}
          </p>
        )}
      </div>

      
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 font-medium"
        >
          Delete
        </button>

        <Link
          to={`/show-task/${props._id}`}
          className="text-blue-600 hover:underline font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Task;
