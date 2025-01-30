import { Link } from "react-router-dom";

const userId = 5;

function ProfilePage() {
  return (
    <div>
      <h1>PÁGINA DE INICIO</h1>
      <Link to={`/nosotros/${userId}`}> Nosotros </Link>
    </div>
  );
}

export default ProfilePage;