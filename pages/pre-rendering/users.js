import User from "../../components/user";

export default function users({ users }) {
  //console.log(users);
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => {
        return <User key={user.key} user={user} />;
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  // console.log(users);
  return {
    props: {
      users,
    },
  };
}
