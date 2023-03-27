import { useEffect } from "react";
import registerManifest from "./util/registerManifest";

export default function Root(props) {
  useEffect(() => {
    registerManifest();
  }, []);

  return <section>{props.name} is mounted!</section>;
}
