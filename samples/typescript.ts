interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
}

type AsyncResult<T> = Promise<{ data: T; error: null } | { data: null; error: Error }>;

const API_URL = "https://api.example.com";

async function fetchUser(id: string): AsyncResult<User> {
  try {
    const response = await fetch(`${API_URL}/users/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    return { data, error: null };
  } catch (err) {
    return { data: null, error: err as Error };
  }
}

class UserService {
  private cache = new Map<string, User>();

  async getUser(id: string): Promise<User | null> {
    if (this.cache.has(id)) {
      return this.cache.get(id)!;
    }

    const { data, error } = await fetchUser(id);
    if (error) {
      console.error("Failed to fetch user:", error.message);
      return null;
    }

    this.cache.set(id, data);
    return data;
  }
}

// Arrow function with destructuring
const formatUser = ({ name, email, role }: User): string =>
  `${name} <${email}> [${role}]`;

export { UserService, fetchUser, formatUser };
