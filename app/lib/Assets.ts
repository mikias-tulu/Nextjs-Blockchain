import clientPromise from "@/app/lib/mongodb";
import { Db } from "mongodb";


const DATABASE_NAME = process.env.DATABASE as string;

const getDatabase = async () => {
  const client = await clientPromise;
  return client.db(DATABASE_NAME);
};

export interface Asset {
  _id: string;
  name: string;
}

async function collectionExists(db: Db, collectionName: string): Promise<boolean> {
    const collections = await db.listCollections({ name: collectionName }).toArray();
    return collections.length > 0;
  }
  
  export async function getAllAssets(): Promise<Asset[]> {
    try {
      const db = await getDatabase();
      const collectionExistsResult = await collectionExists(db, "assets");
  
      if (!collectionExistsResult) {
        throw new Error(`Collection does not exist.`);
      }
  
      const collection = db.collection<Asset>("assets");
      const assets = await collection.find().toArray();
      return assets;
    } catch (error) {
      throw new Error(`Error fetching assets: ${error}`);
    }
  }
