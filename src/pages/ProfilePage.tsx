import React, { useEffect, useState } from 'react'
import useRpc from '../hooks/useRpc'
import Loading from '../components/Loading'
import Preview from '../components/Preview'
import useNavigateWithSearch from "../hooks/useNavigateWithSearch";

const ProfilePage = () => {
  const rpcReadProfile = useRpc("readProfile", {});
  const rpcReadPreview = useRpc("readPreview", {});
  const rpcUpdateProfile = useRpc("updateProfile");
  const navigate = useNavigateWithSearch();
  const [name, setName] = useState("");

  const user = rpcReadProfile.value?.user;
  const preview = rpcReadPreview.value;

  useEffect(() => {
    if(user?.name) {
      setName(user.name)
    }
  }, [user?.name])

  useEffect(() => {
    if (rpcUpdateProfile.value) {
      rpcReadProfile.request({})
    }
  }, [rpcUpdateProfile.value]);
  
  
  if(!user || !preview) {
    return <Loading />
  }

  const onChangeName = () => {
    rpcUpdateProfile.request({name})
  }
  
  const onDetail = (id: number) => {
    navigate("/detail", {id});
  }
  return (
    <div>
      <div className="flex flex-col items-center">
        <input
          type="text"
          className="font-xl font-bold border border-black"
          placeholder="내이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="text-xs underline" onClick={onChangeName}>
          이름변경
        </button>
      </div>
      <div className="flex flex-row justify-between w-full max-w-lg">
        <div className="">
          <div className="font-bold">내가 쓴 글</div>
          {preview.posts.map((p) => (
            <Preview key={p.id} preview={p} onClick={() => onDetail(p.id)} />
          ))}
        </div>
        <div>
          <div className="">내가 쓴 댓글</div>
          {preview.comments.map((p) => (
            <Preview key={p.id} preview={p} onClick={() => onDetail(p.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage