import { useParams } from "react-router-dom";
import paintings from "../data/paintings";

function ArtPage() {
    const {id} = useParams();
    const item = paintings[id];
    return (
        <div>{item.title}</div>
    )
}

export default ArtPage;