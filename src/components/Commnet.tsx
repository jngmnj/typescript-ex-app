import React from 'react'
import {Comment as RpcComment} from "../rpcgen";
import { formatTimestamp } from '../utils/time';

interface CommentProps {
  comment: RpcComment;
}

const Commnet = (props: CommentProps) => {
  console.log(props)
  return (
    <div className="flex flex-col items-start border m-3">
      <p className="text-xs">{props.comment.body}</p>
      <div className="flex flex-row text-gray-600 text-xs self-end">
        <div className="text-xs">{props.comment.author.name}</div>
        <div>{formatTimestamp(props.comment.timestamp)}</div>
      </div>
    </div>
  );
};

export default Commnet