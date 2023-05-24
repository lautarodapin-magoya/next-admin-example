
import {prisma} from '@/server/db'
import {defaultHandler} from "ra-data-simple-prisma"

export default function handler(req, res) {
    defaultHandler(req, res, prisma)
}   