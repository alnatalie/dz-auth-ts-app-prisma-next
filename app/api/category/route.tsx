import {prisma} from '@/prisma/prisma'
import { auth } from '@/auth';
import { /*type NextRequest,*/ NextResponse } from "next/server";



//общедоступная API

export async function GET(/*request: NextRequest*/){
    // console.log('request=', request);
    return NextResponse.json(
        await prisma.categories.findMany()
    );
}

