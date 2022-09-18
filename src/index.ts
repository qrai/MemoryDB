import Analytics from "./analytics/Analytics"
import MemoryDB from "./core/MemoryDB"
import AscendingSort from "./sorting/AscendingSort"

type Book = { name: string, writtenIn: number }

let db: MemoryDB<Book> = new MemoryDB('index')
db.debug = true

db.insert({ name: 'Harry poter', writtenIn: 2007 })
db.insert({ name: 'Galaxy', writtenIn: 2014 })
db.insert({ name: 'Elytra', writtenIn: 2010 })
db.insert({ name: 'Unknown', writtenIn: 2020 })
db.insert({ name: 'Unknown', writtenIn: 2022 })
//db.remove((row: Book) => row.name === 'Unknown')
db.sort(AscendingSort('writteIn'))

console.log(db.raw)

let analytics: Analytics<Book> = db.Analytics
console.log(analytics.len('writtenIn'))