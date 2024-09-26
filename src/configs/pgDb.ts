import { DataSource, DataSourceOptions } from 'typeorm';

const connectionOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432', 10),
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || 'toor',
  database: process.env.DATABASE_NAME || 'enterprise',
  entities: [__dirname + '/../**/entity.ts'], // Adjust path for compiled JS files if needed
  synchronize: true, // Set to false in production
};

export const PostgresDatasource = new DataSource(connectionOptions)

export const connectPostgres = async () => {
  try {
    const connection = await PostgresDatasource.initialize();
    console.log('Connected to PostgreSQL');
    return connection;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};

