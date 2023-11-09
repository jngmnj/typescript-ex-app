import React, { useEffect, useState } from 'react'
import Comment from '../components/Commnet'
import { useSearchParams } from 'react-router-dom'
import useRpc from '../hooks/useRpc';
import Loading from '../components/Loading';
import { formatTimestamp } from '../utils/time';

const DetailPage = () => {
  const [searchParams] = useSearchParams();
  const postId = parseInt(searchParams.get("id") ?? "-1", 32);

  const [commentBody, setCommentBody] = useState("");
  
  const rpcReadPost = useRpc("readPost", { postId });
  const rpcCreateComment = useRpc("createComment");

  useEffect(() => {
    if (rpcCreateComment.value) {
      rpcReadPost.request({ postId });
      setCommentBody("");
    }
  }, [rpcCreateComment.value]);
  
  const post = rpcReadPost.value?.post;
  if(!post) {
    return <Loading />
  }

  const onWriteComment = () => {
    rpcCreateComment.request({postId: post.id, body: commentBody})
  }

  return (
    <div className='flex flex-col items-center'>
      <div className="text-xs">{post.body}</div>
      <div className="">{post.author.name}</div>
      <div className="text-xs text-gray-700">{formatTimestamp(post.timestamp)}</div>
      <div>
        {
          post.comments.map((c) => (
            <Comment key={c.id} comment={c} />
          ))
        }
        <div className="flex flex-row border">
          <input className='' value={commentBody} onChange={e => setCommentBody(e.target.value)} />
          <button onClick={onWriteComment}>댓글 쓰기</button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage