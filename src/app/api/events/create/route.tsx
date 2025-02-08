import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/PrismaClient/db";
import { position_options } from "@prisma/client";
import { getSession } from "@/lib/actions/Sessions";
import z from "zod";

const eventSchema = z.object({
    eventName: z.string().min(1, "Event Name is required"),
    description: z.string().min(1, "Description is required"),
    conductedBy: z.string(),
    conductedOn: z.string(),
    registration_deadline: z.string(),
    imageURL: z.string().optional(),
    venue: z.string(),
    prize: z.string().optional(),
});

export async function POST(req:NextRequest){
    try{
        const body = await req.json();
        const scehma = eventSchema.safeParse(body);
        const session = await getSession();

        if(!session?.user){
            return NextResponse.json({status: 400, message: "User not logged in!"});
        }

        const userId = session.user.id;
        const user = await prisma.user.findUnique({
            where: {id: userId},
            select: {position: true}
        });

        if (!user){
            return NextResponse.json({status: 400, message: "User not found!"});
        }

        const position = user?.position;
        if (position != position_options["President"] && position != position_options["Secretary"] && position != position_options["Coordinator"]){
            return NextResponse.json({status: 400, message: "You don't have rights!"});
        }

        if(!scehma.success){
            return NextResponse.json({status: 400, message: "Bad Request"});
        }

        const {eventName, description, conductedBy, conductedOn, registration_deadline, imageURL, venue, prize} = scehma.data;

        if(isNaN(Date.parse(conductedOn))|| isNaN(Date.parse(registration_deadline))){
            return NextResponse.json({status: 400, message: "Invalid date format"});
        }

        const conductedOn_dt = new Date(conductedOn);
        const registration_deadline_dt = new Date(registration_deadline);

        const event = await prisma.events.create({
            data:{
                eventName,
                description,
                conductedBy,
                conductedOn: conductedOn_dt,
                registration_deadline: registration_deadline_dt,
                imageURL,
                venue,
                prize,
                createdBy: {
                    connect: {id: userId}
                }
            }
        });

        if(!event){
            return NextResponse.json({status:400, message: "Failed to create event"});
        }

        return NextResponse.json({status: 200, message: "Event created successfully"});
        
    }
    catch(err){
        console.log(err);
        return NextResponse.json({status: 500, message: "Internal Server Error"});
    }
}