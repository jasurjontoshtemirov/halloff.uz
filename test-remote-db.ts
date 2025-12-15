
import mysql from 'mysql2/promise';

const configs = [
    { label: 'Pass 1 (No DB)', config: { host: '142.132.219.117', user: 'halloff_db', password: '@Qwer1234', port: 3306 } },
    { label: 'Pass 1 + DB halloff_db', config: { host: '142.132.219.117', user: 'halloff_db', password: '@Qwer1234', database: 'halloff_db', port: 3306 } },
];

async function testStrategies() {
    console.log('Starting credential strategy test...');

    for (const strategy of configs) {
        console.log(`\n--- Testing: ${strategy.label} ---`);
        try {
            const connection = await mysql.createConnection(strategy.config);
            console.log('✅ SUCCESS! Connection established.');

            // List tables to verify full access
            const [rows] = await connection.execute('SHOW TABLE STATUS');
            console.log(`Found ${(rows as any[]).length} tables.`);

            await connection.end();
            process.exit(0); // Exit on first success
        } catch (error: any) {
            console.error('❌ Failed:', error.message);
        }
    }

    console.log('\n❌ All strategies failed.');
}

testStrategies();
