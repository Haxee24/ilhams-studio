import { useNavigate } from "react-router-dom";

function ArtCard(item) {
    const navigate = useNavigate();

    return (
        <div
            onClick={()=>navigate('/images/'+item.id)}
            className="cursor-pointer break-inside-avoid rounded-2xl overflow-hidden bg-white/50 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.08)] transition"
        >
            <img
            src={item.image}
            alt={item.title}
            className="w-full object-cover hover:opacity-95 transition"
            />

            <div className="p-4">
            <p className="text-sm opacity-80">{item.title}</p>
            </div>
        </div>
    )
}

export default ArtCard