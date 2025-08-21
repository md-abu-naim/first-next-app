import { MongoClient, ServerApiVersion } from 'mongodb'

export const collectionName = {
    TEST_USER: 'test_user',
    PRODUCTS: 'products'
}

const dbConnect = (collectionName) => {
    const uri = process.env.MONGODB_URL

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db(process.env.DB_NAME).collection(collectionName)
};

export default dbConnect;