
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { getPool } from './lib/db';

async function cleanup() {
    const pool = getPool();
    try {
        console.log('Cleaning up insecure tables...');
        await pool.execute('DROP TABLE IF EXISTS user_plain_passwords');
        console.log('✅ user_plain_passwords table deleted.');

        // Check if table exists to verify
        const [rows] = await pool.execute("SHOW TABLES LIKE 'user_plain_passwords'");
        if ((rows as any[]).length === 0) {
            console.log('✅ Verification successful: Table is gone.');
        } else {
            console.error('❌ Verification failed: Table still exists!');
        }
    } catch (error) {
        console.error('Error during cleanup:', error);
    }
    process.exit(0);
}

cleanup();
