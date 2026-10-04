import { Metadata } from "next";
import JoinClient from "./join-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;
  return {
    title: "Join a trip on Tripseek",
    description: `You've been invited to plan a trip together on Tripseek. Use code ${code.toUpperCase()} to join.`,
  };
}

export default async function JoinPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  return <JoinClient code={code.toUpperCase()} />;
}
