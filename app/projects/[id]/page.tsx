export default function Project({ params }: { params: { id: string } }) {
  const projectId = params.id;

  return <h1>Project ID: {params.id}</h1>;
}
