'use server'

import dbConnect, { collectionName } from "@/lib/dbConnect";


const registerUser = async (payload) => {

    try {
        const result = await dbConnect(collectionName.TEST_USER).insertOne(payload)
        return result
    }
    catch (error) {
        console.log(error);
        return null
    }
};

export default registerUser;