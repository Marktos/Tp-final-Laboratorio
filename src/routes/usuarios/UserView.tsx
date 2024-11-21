import UsuarioCard from "../../components/UsuarioCard";

export default function UsersView() {

  const users = [
    { name: 'Markitos', email: 'user1@example.com', role: 'Admin' },
    { name: 'Markitos', email: 'user2@example.com', role: 'Editor' },
    { name: 'Markitos', email: 'user3@example.com', role: 'Viewer' },
  ];

  return (
    <>
      {users.map((user, index) => (
        <UsuarioCard
          key={index}
          email={user.email}
          role={user.role}
          name={user.name}
        />
      ))}
    </>
  )
}