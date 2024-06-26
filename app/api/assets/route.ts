import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";
import { NextResponse } from "next/server";
import { createErrorResponse } from "@/app/lib/utils";
import { getAllAssets } from "@/app/lib/Assets";

const DATABASE_NAME = process.env.DATABASE as string;
const COLLECTION_NAME = "assets";

const getDatabase = async () => {
  const client = await clientPromise;
  return client.db(DATABASE_NAME);
};

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const assets = await getAllAssets();

    let json_response = {
      status: "success",
      assets,
    };
    
    return NextResponse.json(json_response);
  } catch (error: any) {
    return createErrorResponse(error.message, 500);
  }
}

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await getDatabase();
    const collection = db.collection(COLLECTION_NAME);

    await collection.deleteMany({});
    console.log("All assets cleared, adding now...");

    if (Array.isArray(req.body)) {
      const result = await collection.insertMany(req.body);
      console.log(`${result.insertedCount} assets synced successfully`);

      res.status(200).json({
        message: `${result.insertedCount} assets synced successfully`,
      });
    } else {
      throw new Error("Invalid data format: Expected an array of documents");
    }
  } catch (error) {
    console.error("Error syncing assets data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Allow", ["POST", "GET"]);
  res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
