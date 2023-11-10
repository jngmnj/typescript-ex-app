import React, { useEffect } from 'react'
import useRpc from '../hooks/useRpc'
import { formatTimestamp } from "../utils/time";
import Loading from '../components/Loading';
import useNavigateWithSeaerch from '../hooks/useNavigateWithSearch';

const MainPage = () => {
  const rpcRandomPost = useRpc("readRandomPost", {});
  const navigate = useNavigateWithSeaerch();

  useEffect(() => {
    rpcRandomPost.request({})
  }, [])
  
  const onNext = () => {
    rpcRandomPost.request({})
  }

  const post = rpcRandomPost.value?.post;

  if(!post) {
    return <Loading />;
  }

  const onDetail = () => {
    // navigate({pathname:"/detail", search:createSearchParams({id: `${post.id}`}).toString()})
    navigate("/detail", { id: post.id });
  };

  return (
    <div>
      <div className="text-xs">{post.body}</div>
      <div className="text-xs">{post.author.name}</div>
      <div className="text-xs">{formatTimestamp(post.timestamp)}</div>
      <button className="border border-black p-2 m-1" onClick={onDetail}>자세히</button>
      <button className="border border-black p-2 m-1" onClick={onNext}>
        다음글
      </button>
    </div>
  );
}

export default MainPage