export default function Page({ params }: {
  params: {id: string}
}) {
  return <h1>Id: {params.id}</h1>;
}