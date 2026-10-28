import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:21017/fashion_inventory';

  try {
    const conn = await mongoose.connet(uri);
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error al conectar con MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;

