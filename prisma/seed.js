const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');

const csvFilePath = path.join(__dirname, 'data/test.csv');
const items = [];

fs.createReadStream(csvFilePath)
.pipe(csvParser())
.on('data', (row) => {
    // console.log('Row read from CSV:', row);

    // データを適切な型に変換
    items.push({
    name: row.name || '',  // CSVから読み込んだ値を設定
    category: row.category || null,
    url: row.url || null,
    imageUrl: row.imageUrl || null,
    initialPrice: parseFloat(row.initialPrice) || null,
    monthlyPrice: parseFloat(row.monthlyPrice) || null,
    overview: row.overview || null,
    detail: row.detail || null,
    });
})
.on('end', async () => {
    // データベースに挿入
    for (const item of items) {
    try {
        await prisma.Items.create({
        data: {
            name: item.name,         // 正しいデータを設定
            category: item.category,
            url: item.url,
            imageUrl: item.imageUrl,
            initialPrice: item.initialPrice,
            monthlyPrice: item.monthlyPrice,
            overview: item.overview,
            detail: item.detail,
        },
        });
    } catch (error) {
        console.error('Error creating item:', error);
    }
    }
    console.log('CSV file successfully processed');
    await prisma.$disconnect();
});
