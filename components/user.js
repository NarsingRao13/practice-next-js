function User({ key, user }) {
  return (
    <>
      <h2 key={key}>
        {user.name} - {user.email}
      </h2>
    </>
  );
}

export default User;
