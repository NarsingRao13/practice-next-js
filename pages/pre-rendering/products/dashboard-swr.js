import useSWR from "swr";
const fetcher = async () => {
  const data = await (await fetch("http://localhost:4000/dashboard")).json();
  return data;
};
export default function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return "An error occurred";
  if (!data) return "Loading..";
  return (
    <>
      <h1>DashBoard SWR</h1>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </>
  );
}
