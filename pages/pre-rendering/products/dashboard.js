import { useState, useEffect } from "react";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  useEffect(() => {
    async function fetchDashBoardData() {
      const data = await (
        await fetch("http://localhost:4000/dashboard")
      ).json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashBoardData();
  }, []);
  if (isLoading) {
    return <h1>Dashboard is loading</h1>;
  }

  return (
    <>
      <h1>DashBoard</h1>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
    </>
  );
}
