import { useParams } from "react-router-dom";
import paintings from "../data/paintings";
import { ArtPiece } from "../components";

function ArtPage() {
    const {id} = useParams();
    const item = paintings[id];
    return (
        <ArtPiece {...item} />
    )
}

export default ArtPage;