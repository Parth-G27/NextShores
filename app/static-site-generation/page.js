// app/static-site-generation/page.js

export default async function UsersPage() {
    // Fetch data during build time
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    const users = data.users;
  
    return (
      <main className="flex min-h-screen flex-col items-center bg-white p-8">
        <p className="mt-4 text-3xl font-medium text-orange-600">Users</p>
        <ul className="w-full max-w-lg mt-8 space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between p-2 rounded-md bg-gray-100 hover:bg-orange-100 transition-all duration-200"
            >
              <span className="text-lg font-medium">{user.firstName}</span>
              <a
                href={`/static-site-generation/${user.id}`}
                className="text-orange-600 hover:underline transition-all duration-200"
              >
                View Profile
              </a>
            </li>
          ))}
        </ul>
      </main>
    );
  }
  