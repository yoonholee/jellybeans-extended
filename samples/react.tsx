import { useState, useEffect, type FC } from "react";

interface Props {
  userId: string;
  onLoad?: (user: User) => void;
}

interface User {
  name: string;
  avatar: string;
}

const UserCard: FC<Props> = ({ userId, onLoad }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`/api/users/${userId}`);
      const data = await res.json();
      setUser(data);
      setLoading(false);
      onLoad?.(data);
    }
    fetchUser();
  }, [userId, onLoad]);

  if (loading) {
    return <div className="skeleton">Loading...</div>;
  }

  return (
    <div className="card">
      <img src={user?.avatar} alt={user?.name} />
      <h2>{user?.name ?? "Unknown"}</h2>
      <button onClick={() => console.log("Clicked!")}>
        View Profile
      </button>
    </div>
  );
};

export default UserCard;
