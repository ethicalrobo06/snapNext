import mongoose, { Connection } from 'mongoose'

let cachedConnection: Connection | null = null
export async function connectToMongoDB() {
  if (cachedConnection) {
    console.log('Using cached MONGODB connection')
    return cachedConnection
  }
  // if cached connection doesn't exist
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL as string)
    cachedConnection = conn.connection

    console.log('new mongodb connection established')
    return cachedConnection
  } catch (error) {
    console.log(error)
    throw error
  }
}
