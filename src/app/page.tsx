import { exampleFlag } from "./flags";

export default async function Home() {
  const featureFlag = await exampleFlag();

  return (
    <div className="m-auto p-20">
      <h1>Vercel Feature Flags</h1>
      {featureFlag ? (
        <p>Feature flag is enabled</p>
      ) : (
        <p>Feature flag is disabled</p>
      )}
    </div>
  );
}
