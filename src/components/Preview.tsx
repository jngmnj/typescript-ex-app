import React from 'react'
import { Preview as rpcPreview } from "../rpcgen";

interface PreviewProps {
  preview: rpcPreview;
  onClick?: () => void;
}
const Preview = (props: PreviewProps) => {
  return <div onClick={props.onClick}>{props.preview.body}</div>;
};

export default Preview;