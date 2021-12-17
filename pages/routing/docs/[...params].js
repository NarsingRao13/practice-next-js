import { useRouter } from "next/router";
export default function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  if (params.length === 2) {
    return (
      <h1>
        Viewing docs of {params[0]} and concept of {params[1]}
      </h1>
    );
  }
  if (params.length === 1) {
    return <h1>Viewing docs of {params[0]}</h1>;
  }
  return <h1>Docs home page</h1>;
}
