import UserCard from "../../components/UsuarioCard";

export default function UsersView() {

  const users = [
    { email: 'user1@example.com', role: 'Admin' },
    { email: 'user2@example.com', role: 'Editor' },
    { email: 'user3@example.com', role: 'Viewer' },
  ];

  return (
    <>
      {users.map((user, index) => (
        <UserCard
          key={index}
          email={user.email}
          role={user.role}
        />
      ))}
    </>
  )
}